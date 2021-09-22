import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

const DisplayForm = () => {

  const [name, setName] = useState("")
  const [nameId, setNameId] = useState(null)
  const [retrievedName, setRetrievedName] = useState("")

  const postWithAxios = (e) => {
    e.preventDefault()
    const data = { name: name}
    axios.post('/api/person', data)
        .then(response => {
          //console.log(response)
          setNameId(response.data.id)
        })
  }

  const getWithAxios = (e) => {
    e.preventDefault()
    axios.get('/api/person/' + nameId)
      .then(response => {
        console.log(response)
        setRetrievedName(response.data.name)
      })
  }

  return(
    <div className="displayFormContainer">
      <p>Hey there {retrievedName ? retrievedName : null}</p>
      <form onSubmit={postWithAxios}>
        <input type="text" placeholder="Name..." value={name} 
          onChange={e => setName(e.target.value)} name="name" />
        <button type="submit">Submit</button>
      </form>
      <button onClick={getWithAxios}>View Personal Message</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DisplayForm />
      </header>
    </div>
  );
}

export default App;
