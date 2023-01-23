// import './css/App.css'

import Homepage from './pages/homepage';
import Work from './pages/work';
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
      <ParallaxProvider scrollAxis='vertical'>
        <Homepage />
        <Work />
      </ParallaxProvider>
    // <div>
    //     <Homepage />
    //     <Work />
    // </div>
    // <div className="parallax_wrapper">

    //     <div className="parallax_group" id="group-1">
    //     <div className="parallax_layer base_layer">
    //         Education
    //     </div>
    //     <div className="parallax_layer mid_layer">
    //         Comming soon...
    //     </div>
    //     </div>

    //     <div className="parallax_group" id="group-2">
    //     <div className="parallax_layer mid_layer">
    //         Work
    //     </div>
    //     <div className="parallax_layer top_layer">
    //         Comming soon...
    //     </div>
    //     </div>


    //     <div className="parallax_group outro_screen" id="outro">
    //     The end
    //     </div>
    // </div>
  );
}

export default App;
