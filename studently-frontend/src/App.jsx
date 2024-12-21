import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProfileSection from './components/ProfileSection';
import TeachersSection from './components/TeachersSection';
import Messages from './components/Messages';
import SellStuff from './components/SellStuff';
import TeacherDetails from './components/TeacherDetails';
import useGetAllPosts from './hooks/useGetAllPosts';
import Signup from './components/Signup';

function App() {
  useGetAllPosts()
  return (
    <div className='w-screen h-screen bg-[#050A24] '>
      <Router>
        <Routes>

          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='profile' element={<ProfileSection/>}/>
          <Route path='/teachers' element={<TeachersSection/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/sell' element={<SellStuff/>}/>
          <Route path='/teacherdetails' element={<TeacherDetails/>}/>
        </Routes>
      </Router>
        
    </div>
    
  )
}

export default App
