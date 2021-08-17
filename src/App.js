import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import NotFound from './components/NotFound/NotFound'
import Alertbox from './components/Alertbox/Alertbox'
import NoteAuth from './validators/noteAuth'
import {Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import AccountAuth from './validators/accountAuth'
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
    <Alertbox />
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/noteapp' render={()=>{ 
       return <NoteAuth />
        }}/>
        <Route exact path='/account' render={()=>{
        return <AccountAuth />
        }}/>
      <Route exact path='/*' component={NotFound} />
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
