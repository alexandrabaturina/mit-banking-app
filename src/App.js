import { useEffect } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/Navbar'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import AllData from './components/AllData'
import Withdraw from './components/Withdraw'
import Profile from './components/Profile'
import { UserProvider } from './components/UserContext'

const App = () => {

  useEffect(() => {
    document.title = "Bad Bank App"
  }, [])

  return (
    <HashRouter>
      <NavBar />
      <UserProvider>
        <Route path="/" exact component={Home} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/alldata" component={AllData} />
        <Route path='/users/:username' component={Profile} />
      </UserProvider>
    </HashRouter>
  )
}

export default App