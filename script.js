window.addEventListener("load", (e) => {
    navBar =   "<section>\
                    <center>\
                        <nav id=\"nav-bar\">\
                            <a href=\"index.html\" aria-label=\"Main page\">About Me</a>\
                            <a href=\"resume.html\" aria-label=\"Resume page\">Resume</a>\
                            <a href=\"portfolio.html\" aria-label=\"Portfolio page\">Portfolio</a>\
                        </nav>\
                    </center>\
                </section>";
    
    footer =   "<footer>\
                    <center>\
                        <nav id=\"footer\">\
                            <a href=\"https://app.joinhandshake.com/profiles/bu5wmu\">Handshake</a>\
                            <a href=\"www.linkedin.com/in/riley-mcculloch-170114387\">LinkedIn</a>\
                        </nav>\
                    </center>\
 	            </footer>";

    main = document.getElementsByTagName("main")[0];
    body = document.getElementsByTagName("body")[0];

    main.innerHTML = navBar + main.innerHTML;
    body.innerHTML = body.innerHTML + footer;
});