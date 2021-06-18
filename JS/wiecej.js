function createMore() {
    $('main').fadeOut(500, function() {
        $('main').html("<h2>Więcej</h2>").attr("id", "more");
        createChapter("doswiadczenie", "Doświadczenie");
        createEntry("#doswiadczenie-admissions", 
        "2019 - Teraz",
        "Starostwo Powiatow w Łęcznej");
        createEntry("#doswiadczenie-admissions",
        "2018 - 2019",
        "Serwis komputerowy");
        
        addDelimeter();
        createChapter("nauka", "Nauka");
        createEntry("#nauka-admissions", 
        "2018 - Teraz", "Politechnika Lubelska")
        createEntry("#nauka-admissions", 
        "2013 - 2017", "Technikum Ekonomiczno-Handlowe im. Władysława Grabskiego w Lublinie")
    }).fadeIn(500);
}
function createChapter(id = "przykladowa", title = "Przykładowy tytuł") {
    var content = 
    "<section class='chapter' id='"+id+"'>"
    +"<h3 class='admission-title'>"+title+"</h3>"
    +"<div class='admissions' id='"+id+"-admissions'></div></section>"
    $('main').append(content);
}
function createEntry(id = "przykladowa",
    date = "2020 - TEST",
    title = "Przykładowy tytuł",
    desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") 
    {
    var content = 
    "<div class='entry'><div><p class='entry-date'>"+date+"</p></div>"
    +"<div class='entry-desc'><h4 class='entry-title'>"+title+"</h4>"
    +"<p class='entry-text'>"+desc+"</p></div></div>"
    $(id).append(content);
}
function addDelimeter() { 
    var content = "<hr class='delimeter'/>";
    $('main').append(content);
}