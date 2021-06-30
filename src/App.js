import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import AllData from './components/AllData'
import Withdraw from './components/Withdraw'
import { useState, useEffect } from 'react'

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    document.title = "Bad Bank App"
  }, [])

  const addUser = ({ name, email, password }) => {
    const user = { name: name, email: email, password: password, balance: 0, history: [] }
    setUsers([...users, user])
  }

  const addDeposit = sum => {
    const updated = [...users]
    users[users.length - 1].balance += sum
    users[users.length - 1].history.push(`Deposit $${sum}`)
    setUsers(updated)
  }

  const withdraw = sum => {
    const updated = [...users]
    users[users.length - 1].balance -= sum
    users[users.length - 1].history.push(`Withdraw $${sum}`)
    setUsers(updated)
  }

  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/createaccount/" component={() =>
        <CreateAccount
          users={users}
          addUser={addUser} />} />
      <Route path="/deposit/" component={() =>
        <Deposit
          users={users}
          addDeposit={addDeposit} />} />
      <Route path="/withdraw/" component={() =>
        <Withdraw
          users={users}
          withdraw={withdraw} />} />
      <Route path="/alldata/" component={() =>
        <AllData users={users} />} />
    </Router>
  )
}
export default App