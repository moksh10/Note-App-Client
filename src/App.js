import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Account from './components/Account/Account'
import NoteApp from './components/NoteApp/NoteApp'
import NoteFound from './components/NotFound/NoteFound'
import {Switch, Route } from 'react-router'
import {BrowserRouter} from 'react-router-dom'
AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 1300, 
  easing: 'ease',
  once:false
})
AOS.refresh()
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/note-app' component={NoteApp}/>
      <Route exact path='/useraccount' component={Account}/>
      <Route exact path='/*' component={NoteFound} />
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
