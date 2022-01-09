import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from 'react-router-dom'
import Header from './components/Header/Header'
import Bars from './pages/Bars'
import Home from './pages/Home'

function App () {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <Routes>
          <Route path='/bars' element={<Bars />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
