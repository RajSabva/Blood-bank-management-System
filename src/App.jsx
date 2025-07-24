import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Middle from './Components/Middle'
import Middle2 from './Components/Middle2'
import Aboutus from './Components/Pages/Aboutus'
import Bloodbank from './Components/Pages/Bloodbank'
import Cause from './Components/Pages/Cause'
import ContactUs from './Components/Pages/ContactUs'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<><Home /><Middle /><Middle2 /><Footer /></>} />
          <Route path='/aboutus' element={<><Home /><Aboutus /><Footer /></>} />
          <Route path='/bloodbank' element={<><Home /><Bloodbank /><Footer /></>} />
          <Route path='/cause' element={<><Home /><Cause /><Footer /></>} />
          <Route path='/contactus' element={<><Home /><ContactUs /><Footer /></>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
