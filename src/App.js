import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 1300, 
  easing: 'ease',
  once:false
})
AOS.refresh()
function App() {
  // <Home />
  return (
    <>
    <Login />
    </>
  )
}

export default App;
