function MainContent() {
    return (
        <div class="parallax_wrapper">  
            <div class="parallax_group intro_screen" id="intro">
            <header class="intro_header">
                <div class="intro_caption">Welcome to my website</div>
                <div class="intro_title">Ivan Rodin</div>
            </header>
            </div>


            <div class="parallax_group" id="group-1">
            <div class="parallax_layer base_layer">
                Education
            </div>
            <div class="parallax_layer mid_layer">
                Comming soon...
            </div>
            </div>

            <div class="parallax_group" id="group-2">
            <div class="parallax_layer mid_layer">
                Work
            </div>
            <div class="parallax_layer top_layer">
                Comming soon...
            </div>
            </div>


            <div class="parallax_group outro_screen" id="outro">
            The end
            </div>
        </div>
    )
}

ReactDOM.render(
    <div>
        {/* <div>
            <div class="container">
            <nav class="navbar">
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#group-1">Education</a></li>
                <li><a href="#group-2">Work</a></li>
            </ul>
            </nav>
        </div>, */}

        <MainContent />
    </div> , document.getElementById("root"))