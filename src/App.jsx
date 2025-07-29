import { useEffect } from 'react'; import { Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage'
import Orientate from './pages/OrientationPage'
import Introduction from './pages/IntroductionPage'
import Interview from './pages/InterviewPage'
import Contact from './pages/ContactPage'
import Course from './pages/CoursePage'
import NotFound from './pages/_NotFound'

import AOS from 'aos'; import 'aos/dist/aos.css'

import './App.css'; import './assets/css/pages/HomePage.css'

function App() {
  useEffect(() => {AOS.init({duration: 800, once: false, easing: 'ease-in-out', offset: 100})}, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orientate" element={<Orientate />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App