/* eslint-disable react/prop-types */
import { useState } from 'react';
import './AlumniGallery.css';
import { X} from 'bootstrap-icons-react';

const alumniData = [
  {
    id: 1,
    name: 'Peter Qian',
    picture: 'src/assets/nopic.webp',
    email: 'p.qian@wustl.edu',
    phone: '314-600-5961',
    linkedIn: 'https://www.linkedin.com/in/peter-qian-121399263/'
  },
  {
    id: 2,
    name: 'Jake Wen',
    picture: 'src/assets/nopic.webp',
    email: 'p.qian@wustl.edu',
    phone: '314-600-5961',
    linkedIn: 'https://www.linkedin.com/in/peter-qian-121399263/'
  },
  {
    id: 3,
    name: 'James Liu',
    picture: 'src/assets/nopic.webp',
    email: 'p.qian@wustl.edu',
    phone: '314-600-5961',
    linkedIn: 'https://www.linkedin.com/in/peter-qian-121399263/'
  },
];

function AlumniGallery() {
    const [selectedAlumni, setSelectedAlumni] = useState(null);
  
    const handleAlumniClick = (alumni) => {
      setSelectedAlumni(alumni);
    };
  
    const handleCloseButtonClick = () => {
      setSelectedAlumni(null);
    };
  
    return (
      <div className='Alumini'>
        <h2>Alumni</h2>
        <div className="gallery-container">
          {alumniData.map((alumni) => (
            <div key={alumni.id} className={`thumbnail ${selectedAlumni === alumni ? 'clicked' : ''}`} onClick={() => handleAlumniClick(alumni)}>
              <img src={alumni.picture} alt={alumni.name} />
              <p>{alumni.name}</p>
            </div>
          ))}
        </div>
        {selectedAlumni && <AlumniCard alumni={selectedAlumni} onCloseButtonClick={handleCloseButtonClick} />}
      </div>
    );
  }
  
  

  function AlumniCard({ alumni, onCloseButtonClick }) {
    const handleCloseButtonClick = () => {
        console.log('close button clicked');
      onCloseButtonClick(); 
      
    };
  
    return (
      <div className="expanded-card-container">
        <div className="expanded-card">
          <button onClick={handleCloseButtonClick}><X /></button>
          <img src={alumni.picture} alt={alumni.name} />
          <h3>{alumni.name}</h3>
          <p>Email: {alumni.email}</p>
          <p>Phone: {alumni.phone}</p>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(alumni.linkedIn)};size=100x100`} alt="" title="" />
            <p>Scan to Follow me on LinkedIn</p>

        </div>
      </div>
    );
  }

export default AlumniGallery;
