
import './App.css'
import Main from './components/agenda'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgendaItem from './components/AgendaItem'

function App() {


  return (
    <>
      {/* <Main/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/technology' element={<AgendaItem />} />
          <Route path='/Purpose' element={<AgendaItem />} />
          <Route path='/Entrepreneurship' element={<AgendaItem />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
