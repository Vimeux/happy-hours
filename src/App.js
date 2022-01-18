import './App.css'

import {
  Route,
  Routes
} from 'react-router-dom'
import Header from './components/Header/Header'
import Bars from './pages/Bars'
import Auth from './pages/Auth'
import { AuthProvider } from './contexts/AuthContext'
import Profile from './pages/Profile'
import AddBar from './pages/AddBar'
import Bar from './pages/Bar'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <div className='App'>
      <AuthProvider>
        <Header />
        <header className='App-header'>
          <Routes>
            <Route path='/addBar' element={<AddBar />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/bar/:id' element={<Bar />} />
            <Route path='/' element={<Bars />} />
          </Routes>
        </header>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
