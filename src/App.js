import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import AllData from './components/AllData'
import Withdraw from './components/Withdraw'
import { useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = user => {
    setUsers([...users, user])
  }

  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/createaccount/" component={() =>
        <CreateAccount
          addUser={addUser}
          users={users} />} />
      <Route path="/deposit/" component={Deposit} />
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/alldata/" component={() =>
        <AllData users={users} />} />
    </Router>
  )
}

export default App