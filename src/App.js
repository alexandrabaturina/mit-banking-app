import { HashRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import AllData from './components/AllData'
import Withdraw from './components/Withdraw'
import { useState, useEffect } from 'react'

const App = () => {

  const [users, setUsers] = useState({})
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    document.title = "Bad Bank App"
  }, [])

  const addUser = ({ name, email, password }) => {
    setUsers(Object.assign(users, {
      [name]: { name: name, email: email, password: password, balance: 0 }
    }))
    setCurrentUser(name)
  }

  const addDeposit = sum => {
    return {
      ...users,
      [currentUser]: {
        ...users[currentUser],
        balance: users[currentUser].balance += sum
      }
    }
  }

  const withdraw = sum => {
    return {
      ...users,
      [currentUser]: {
        ...users[currentUser],
        balance: users[currentUser].balance -= sum
      }
    }
  }

  return (
    <HashRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/createaccount/" component={() =>
        <CreateAccount
          users={users}
          addUser={addUser} />} />
      <Route path="/deposit/" component={() =>
        <Deposit
          users={users}
          currentUser={currentUser}
          addDeposit={addDeposit} />} />
      <Route path="/withdraw/" component={() =>
        <Withdraw
          users={users}
          currentUser={currentUser}
          withdraw={withdraw} />} />
      <Route path="/alldata/" component={() =>
        <AllData users={users} />} />
    </HashRouter>
  )
}

export default App