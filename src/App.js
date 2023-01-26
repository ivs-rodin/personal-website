import './css/App.css'

// import Homepage from './pages/homepage';
// import Work from './pages/work';
import { ParallaxProvider } from 'react-scroll-parallax'
import {useState, useEffect} from 'react';


const App = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>

      <div className="intro_page">
        <div className='intro_group'>
            <header className="intro_header" style={{ transform: `translateY(${ -offsetY * 1.5}px) `}}>
                <div className="intro_text">Welcome to my website</div>
                <div className="intro_text">Ivan Rodin</div>
            </header>
        </div>
      </div>

      <div className="work_page">
        <div className="work_group">
            <header className="work_header">
                Comming soon...
            </header>
        </div>
      </div>      

    </div>
  );
}

export default App;
