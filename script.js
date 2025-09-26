window.addEventListener("load", (e) => {
    navBar =   "<section>"
                    "<center>\
                        <nav id=\"nav-bar\">\
                            <button><a href=\"index.html\" aria-label=\"Main page\">Main page</a></button>\
                            <button><a href=\"resume.html\" aria-label=\"Resume page\">Resume page</a></button>\
                            <button><a href=\"portfolio.html\" aria-label=\"Portfolio page\">Portfolio page</a></button>\
                        </nav>\
                    </center>\
                </section>";
    
    footer =   "<footer>\
                    <nav>\
                        <button><a href=\"https://app.joinhandshake.com/profiles/bu5wmu\">Handshake</a></button>\
                        <button><a href=\"www.linkedin.com/in/riley-mcculloch-170114387\">LinkedIn</a></button>\
                    </nav>\
 	            </footer>";
    
    main = document.getElementsByTagName("main")[0];
    body = document.getElementsByTagName("body")[0];

    main.innerHTML = navBar + main.innerHTML;
    body.innerHTML = body.innerHTML + footer;


    
});