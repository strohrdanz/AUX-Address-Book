// var contacts = {
//     "addressBook" : [
//         {
//             "name": "Abe Lincoln",
//             "email": "honest.abe@example.com",
//         },
//         {
//             "name": "John Adams",
//             "email": "j.adamz@example.com",
//         },
//         {
//             "name": "George Washington",
//             "email": "mr.president.washington@example.com",
//         },
//     ]
// };

// var object = contacts.addressBook;
// var contactsCount = object.length;
// var target = document.getElementById("list");
// var i; 

// if(contactsCount > 0) {
//     for (i = 0; i < contactsCount; i = i + 1) {
//         var item = object[i];
//         var name = item.name;
//         var email = item.email;
        
//         if(name === "hillisha"){
//             target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>!</p>';
        
//         } else if (name === "paul") {
//             target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>?</p>';
        
//         } else {
//             target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a></p>';
        
//         } 
//     } 
// }

// var adr = {
//     addActiveSession : function (){
//         this.parentNode.setAttribute("class","active");
//     },
//     removeActiveSession : function (){
//         this.parentNode.removeAttribute("class","active");
//     },
//     addHoverClass : function(){
//         searchForm.setAttribute("class","hovering");
//     },
//     removeHoverClass : function(){
//         searchForm.removeAttribute("class","hovering");
//     },
//     search : function(event) {
//         event.preventDefault;
//         var target = getElementById("output");
//         var book = contacts.addressBook;
//         var count = book.length;
//         var i;
//         target.innerHTML = "";

//         if(count > 0 && searchValue !== "") {
//             for (i = 0; i < count; i = i + 1) {
//                 var obj = contacts.addressBook[i];
//                 var isItFound = obj.name.indexOf(searchValue);
//                 if (isItFound !== -1 {
//                     target.innerHTML =+ '<p><a href="mailto:'+ obj.name +'">' + obj.email + '</a></p>';
//                 } 
//             }
//         }
//     }
// }

// var searchField = document.getElementById("search");

// searchField.addEventListener("focus",adr.addActiveSession,false);

// searchField.addEventListener("blur",adr.removeActiveSession,false);

// var searchForm = document.getElementById("search form");

// searchForm.addEventListener("mouseover",adr.addHoverClass,false);

// searchForm.addEventListener("mouseout",adr.removeHoverClass,false);

// var searchForm = document.getElementById("search form");

// searchField.addEventListener("submit",addr.search,false);







/* wrap everything in an anonymous function to contain the variables */
(function(){
    
    /* create address book data */
    var contacts = {
        "addressBook" : [
            {
                "name": "hillisha",
                "email": "hill@example.com",
            },
            {
                "name": "paul",
                "email": "cleveland@example.com",
            },
            {
                "name": "vishaal",
                "email": "vish@example.com",
            },
            {
                "name": "mike",
                "email": "grady@example.com",
            },
            {
                "name": "jamie",
                "email": "dusted@example.com",
            }
        ]
    };
    
    /* define the DOM elements and common variables you'll need */
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q"),
        getAllButton = document.getElementById("get-all"),
        count = contacts.addressBook.length,
        target = document.getElementById("output");
    
    /* define address book methods */
    var addr = {
        
        search : function(event){
            
            // save the input value, contacts length and i to variables
            var searchValue = searchField.value,
                i;
            
            // stop the default behavior
            event.preventDefault();
            
            // clear the target area just incase there's something in it.
            target.innerHTML = "";
            
            // check the count, of course
            if(count > 0 && searchValue !== ""){
            
                // loop through the contacts
                for(i = 0; i < count; i = i + 1) {

                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i],
                        isItFound = obj.name.indexOf(searchValue);

                    // anything other than -1 means we found a match
                    if(isItFound !== -1) {
                        target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                    } // end if

                } // end for loop

            } // end count check

        },
        getAllContacts : function (){
            
            var i;
            
            // clear the target area just incase there's something in it.
            target.innerHTML = "";
            
            // check the count, of course
            if(count > 0){
            
                // loop through the contacts
                for(i = 0; i < count; i = i + 1) {
                
                    // look through the name value to see if it contains the searchterm string
                    var obj = contacts.addressBook[i];
                    
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                    
                } // end for loop
            } // end count check
        },
        setActiveSection : function(){
        
            // add a class of "active" the wrapping div
            this.parentNode.setAttribute("class", "active");
        
        },
        removeActiveSection : function(){
        
            // remove the class from the wrapping div
            this.parentNode.removeAttribute("class");
        
        },
        addHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.setAttribute("class", "hovering");
        
        },
        removeHoverClass : function(){
        
            // remove the class from the wrapping div
            searchForm.removeAttribute("class");
        
        }
    
    } // end addr object
    
    // activate auto complete on keyUp
    searchField.addEventListener("keyup", addr.search, false);
    
    // set active section on focus of the form field
    searchField.addEventListener("focus", addr.setActiveSection, false);
    
    // remove active section on blur of the form field
    searchField.addEventListener("blur", addr.removeActiveSection, false);
    
    // get all contacts when you click the button
    getAllButton.addEventListener("click", addr.getAllContacts, false);
    
    // add hover class on mouse over of the form field
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);
    
     // remove hover class on mouse out of the form field
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
    
    // activate search on form submit
    searchForm.addEventListener("submit", addr.search, false);
    
})(); // end anonymous function