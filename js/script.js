/* create some data in the form of a JSON object you can consume and loop through */
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

/* cache some initial variables */
var object = contacts.addressBook;
var contactsCount = object.length;
var target = document.getElementsByTagName("body")[0];
var i; 

if(contactsCount > 0) {
    for (i = 0; i < contactsCount; i = i + 1) {
        var item = object[i],
            name = item.name,
            email = item.email;
        
        if(name === "hillisha"){
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>!</p>';
        
        } else if (name === "paul") {
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a>?</p>';
        
        } else {
            target.innerHTML += '<p><a href="mailto:'+ email +'">' + name + '</a></p>';
        
        } 

    } 
}