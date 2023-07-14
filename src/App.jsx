import Users from './Components/Users'
import React from 'react'
import {useState, useEffect} from 'react'

function App() {
  // Instructions:
    // 1. Use a react hook to create some state called users with an initial value of an empty Array.
    const [users, setUsers] = useState([])

    // 2. Use the endpoint https://jsonplaceholder.typicode.com/users to get data
    // 3. Use a hook to make the API request when the app loads. 
    useEffect(() => {
      const getUsers  = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users') // this line is making the request
        const data = await res.json()// this line is converting the response into json
        setUsers(data) // this line is setting the state of users to the data
      }
      getUsers()
    })

    // 4. Create Users and UserItem components
    // 5. Pass down the users state into the Users component, loop through it, and render UserItem components
    // a. Each UserItem should display the users name as an h1 and the users email as a p tag


    // 6. Add event listeners to each UserItem, that when clicked will console.log() that UserItems unique ID



  return (
    <div className="container">
      <Users users={users}/>
    </div>
  )
}

export default App
