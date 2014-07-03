(function(){

var searchForm = document.getElementById("search"),
        searchField = document.getElementById("input"),
        getAllButton = document.getElementById("getall"),
        count = contacts.addressBook.length,
        target = document.getElementById("list");

var adr = {
    search : function(event){
        var searchValue = searchField.value;
        var i;
        event.preventDefault();
        target.innerHTML = "";
        if(count > 0 && searchValue !== ""){
            for(i = 0; i < count; i = i + 1) {
                var obj = contacts.addressBook[i],
                isItFound = obj.name.indexOf(searchValue);
                if(isItFound !== -1) {
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                }
            }
        }
    },
    getAllContacts : function (){
        var i;
        target.innerHTML = "";
        if(count > 0){
            for(i = 0; i < count; i = i + 1) {
                var obj = contacts.addressBook[i];
                target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
            }
        }
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

searchField.addEventListener("keyup", adr.search, false);

getAllButton.addEventListener("click", adr.getAllContacts, false);

searchField.addEventListener("submit",adr.search,false);

})();