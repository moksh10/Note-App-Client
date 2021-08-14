import './App.css';
import Home from './components/Home/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
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
    <Home />
    </>
  )
}

export default App;
