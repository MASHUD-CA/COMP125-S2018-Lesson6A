"use strict";

//(function (content) { // OR
(function (content) {

    function OutputFormDataToConsole() {
        var FullName = document.getElementById("FullName");
        var ContactNumber = document.getElementById("ContactNumber");
        var EmailAddress = document.getElementById("EmailAddress");
        var Message = document.getElementById("Message");

        console.log("%c Form Data", "font-weight:bold; font-size: 16px; color: red;");
        console.log("%c------------------------------------------", "color: red;");
        // console.log("Full Name: "+FullName.value); //OR
        console.log("Full Name       : " + FullName.value); // New ecmascript // ~= tolda, `` = Backtec
        console.log("Contact Number  : " + ContactNumber.value);
        console.log("%cEmail Address : " + EmailAddress.value, "color: green;");
        console.log("%cMessage       : " + Message.value, "color: blue;");
        console.log("%c------------------------------------------", "color:red;");
    }

    function ContactContent() {

        //  console.log("Contact Content Accessed ..."); 
        // configure content
        console.log("%c Contact Content Accessed ...", "font-weight:bold; font-size: 20px;");

        /*
        console.log(navigator);
        console.log(history);
        console.log(document);
        console.log(screen);
        console.log(location);
        */

        //changed the name of the page
        document.getElementsByClassName("card-title")[0].textContent = "contact You";

        //Create a new HTML element
        var cancelButton = document.createElement("button");

        //configure the HTML Element
        //cancelButton.classList.add("btn"); //OR
        cancelButton.setAttribute("class", "btn btn-warning btn-lg");
        // cancelButton.classList.remove(btn-lg);
        cancelButton.textContent = "Cancel";
        // cancelButton.setAttribute("type", "reset"); //function of cancel removed as used reset.
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            // window.open("index.html"); //open a brand new window
            window.open("index.html", "_parent"); // URL loaded into parent frame
        });
        //add the HTML Element to the page somewhere
        //This case I attacing a button to the first form1 element.
        document.forms[0].appendChild(cancelButton);
        /*
        //use the histry object to wipe out the URL 
        document.title = "Contact";
        history.pushState("","document.title","/contact"); //Url changed to  Contact
        //use the location object to output my pathname
        console.log(location.pathname); 
        //show your hostname - domain name
        console.log(location.host);
        console.log(location.hostname);  
        */
        var SendButton = document.getElementById("SendButton");
        // SendButton.addEventListener("click", function(){  // OR
        SendButton.addEventListener("click", function (event) {
            event.preventDefault();
            OutputFormDataToConsole();
        });
    }
    content.ContactContent = ContactContent;
    // let tom = 5;
    // content.tom = tom;
    //content.tom = { tom: 6, sayTom: function(){console.log(tom)}}; //Anster = 5;
    // content.tom = { tom: 6, sayTom: function(){console.log(this.tom)}}; // Answer = 6;
})(content || (content = {}));