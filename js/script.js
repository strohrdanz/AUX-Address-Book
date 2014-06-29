var contacts = {
    "addressBook" : [
        {
            "name": "Abe Lincoln",
            "email": "honest.abe@example.com",
        },
        {
            "name": "John Adams",
            "email": "j.adamz@example.com",
        },
        {
            "name": "George Washington",
            "email": "mr.president.washington@example.com",
        },
    ]
};

var object = contacts.addressBook;
var contactsCount = object.length;
var target = document.getElementById("list");
var i; 

if(contactsCount > 0) {
    for (i = 0; i < contactsCount; i = i + 1) {
        var item = object[i];
        var name = item.name;
        var email = item.email;
        
        if(name === "hillisha"){
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>!</p>';
        
        } else if (name === "paul") {
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>?</p>';
        
        } else {
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a></p>';
        
        } 
    } 
}