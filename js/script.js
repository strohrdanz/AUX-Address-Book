<<<<<<< HEAD
(function(){
<<<<<<< HEAD
=======
var contacts = {
    "addressBook" : [
    {
        "name": "abe lincoln",
        "email": "honest.abe@example.com",
    },
    {
        "name": "john adams",
        "email": "j.adams@example.com",
    },
    {
        "name": "george washington",
        "email": "mr.president.washington@example.com",
    }
    ]
};
>>>>>>> sprint2
=======
function getHTTPObject() {

    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveObject("Msxml2.XMLHTTP");
    }
    return xhr;
}

function ajaxCall(dataURL, outputElement, callback) {

    var request = getHTTPObject();

    outputElement.innerHTML = "Loading...";

    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var contacts = JSON.parse(request.responseText); 
            if (typeof callback === "function") {
                callback(contacts);
            } // end typeof check
        } // end ajax status check
    } // end readystatechange

    request.open("GET", dataURL, true);
    request.send(null);
} // end ajaxCall

(function(){
>>>>>>> sprint2

var searchForm = document.getElementById("search"),
    searchField = document.getElementById("input"),
    getAllButton = document.getElementById("getall"),
    target = document.getElementById("list");

var addr = {
    search : function(event){
        var output = document.getElementById("output");

        ajaxCall('data/contacts.json', output, function(data){
        
        var searchValue = searchField.value;
            addrBook = data.addressBook,
            count = addrBook.length,
        i;

        event.preventDefault();

        target.innerHTML = "";

        if(count > 0 && searchValue !== ""){
            for(i = 0; i < count; i = i + 1) {
                var obj = addrBook[i],
                isItFound = obj.name.indexOf(searchValue);
                if(isItFound !== -1) {
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                }
            }
        }
    });
    },
    getAllContacts : function (){
        
        var output = document.getElementById("output");

        ajaxCall('data/contacts.json', output, function(data){
        
        var addrBook = data.addressBook,
            count = addrBook.length,
            i;

        target.innerHTML = "";
        if(count > 0){
            for(i = 0; i < count; i = i + 1) {
                var obj = addrBook[i];
                target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
            }
        }
    });
    },
    addActiveSession : function (){
        this.parentNode.setAttribute("class","active");
    },
    removeActiveSession : function (){
        this.parentNode.removeAttribute("class","active");
    },
    addHoverClass : function(){
        searchForm.setAttribute("class","hovering");
    },
    removeHoverClass : function(){
        searchForm.removeAttribute("class","hovering");
    }
}

searchField.addEventListener("keyup", addr.search, false);

getAllButton.addEventListener("click", addr.getAllContacts, false);

searchField.addEventListener("submit",addr.search,false);

})();