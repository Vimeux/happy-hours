import './App.css'
import logo from './logoBeer.png'

import {
  Route,
  Routes
} from 'react-router-dom'
import Header from './components/Header/Header'
import Bars from './pages/Bars'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { AuthProvider } from './contexts/AuthContext'
import Profile from './pages/Profile'
import AddBar from './pages/AddBar'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <header className='App-header'>
          <img src={logo} />
          <Routes>
            <Route path='/addBar' element={<AddBar />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/bars' element={<Bars />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </header>
      </AuthProvider>
    </div>
  )
}

export default App
