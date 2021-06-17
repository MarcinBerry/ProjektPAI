function createProjects() {
    $('main').fadeOut(500, function() {
        $('main').html("<h1>Projekty</h1>");
        for(var i = 0; i < 3; i++) {
            createProject();
        }
    }).fadeIn(500);
}

function createProject(title, desc, img) {
    var ty = title;
    var op = desc;
    var zd = img;
    
    if(ty === undefined) {
        ty = "Przykładowy tytuł";
    }

    if(op === undefined) {
        op = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    }
    if(zd === undefined) {
        zd = "projekt.jpg";
    }

    var content = '<article class="project">'
    +'    <div class="projects-desc">'
    +'      <h3 class="project-title">'+ty+'</h3>'
    +'      <p class="project-text">'+op+'</p>'
    +'    </div>'
    +'   <div class="project-img-box">'
    +'       <img src="img/'+zd+'"/>'
    +'    </div>'
    +'</article>';

    $('main').attr("id", "projects").append(content);
}