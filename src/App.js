import './App.css'

function App() {
  return (
    <div className="parallax_wrapper">  
        <div className="parallax_group intro_screen" id="intro">
        <header className="intro_header">
            <div className="intro_caption">Welcome to my website</div>
            <div className="intro_title">Ivan Rodin</div>
        </header>
        </div>


        <div className="parallax_group" id="group-1">
        <div className="parallax_layer base_layer">
            Education
        </div>
        <div className="parallax_layer mid_layer">
            Comming soon...
        </div>
        </div>

        <div className="parallax_group" id="group-2">
        <div className="parallax_layer mid_layer">
            Work
        </div>
        <div className="parallax_layer top_layer">
            Comming soon...
        </div>
        </div>


        <div className="parallax_group outro_screen" id="outro">
        The end
        </div>
    </div>
  );
}

export default App;
