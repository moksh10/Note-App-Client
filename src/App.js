/* eslint-disable import/first */
import { lazy, Suspense } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Loading from './components/Loading/Loading'

const Home = lazy(()=> import('./components/Home/Home'))
const Login = lazy(()=>  import('./components/Login/Login'))
const SignUp = lazy(()=> import('./components/SignUp/SignUp'))
const NotFound = lazy(()=>  import('./components/NotFound/NotFound'))
const NoteAuth = lazy(()=>  import('./validators/noteAuth'))
const AccountAuth = lazy(()=> import('./validators/accountAuth'))


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
      <Route exact path='/' render={()=>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>

      } />
      <Route exact path='/login' render={()=>
      <Suspense fallback={<Loading />}>
      <Login />
    </Suspense>
      }/>
      <Route exact path='/signup' render={()=>
      <Suspense fallback={<Loading />}>
      <SignUp />
    </Suspense>
      }/>
      <Route exact path='/noteapp' render={()=> 
       <Suspense fallback={<Loading />}>
       <NoteAuth />
     </Suspense>
       
        }/>
        <Route exact path='/account' render={()=>
       <Suspense fallback={<Loading />}>
       <AccountAuth />
       </Suspense>
        }/>
      <Route exact path='/*' render={()=>
      <Suspense fallback={<Loading />}>
      <NotFound />
      </Suspense>
      
      } />
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
