import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/tags').then((res) => {
      setUsers(res.data)
    })
  }, [])
  return (
    <div className="App">
      <ul>
        {users &&
          users.map((user: User) => <li key={user.id}>Tag: {user.name}</li>)}
      </ul>
    </div>
  )
}

export default App
