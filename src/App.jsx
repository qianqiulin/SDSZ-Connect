import './App.css'
import Headbar from './Headbar.jsx'
import MyGallery from './ImageGallery.jsx'
import AlumniGallery from './AlumniGallery.jsx';  
import JoinUs from './JoinUs.jsx';
function App() {

  return (
    <div className="App">
      <Headbar/>
      <div className='About'>
        <h2>About</h2>
        <p>SDSZ-Connect is a platform that connects students, teachers, and alumni of Beijing Experimental High School (SDSZ). It is a place where students can find information about their teachers and alumni, and where alumni can connect with each other. SDSZ-Connect is a project developed by alumni Peter Qian.</p>
      </div>
      <MyGallery/>
      <AlumniGallery/>
      <JoinUs/>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App
