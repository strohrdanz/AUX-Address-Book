$(document).ready(function(){  
    $("body").addressBook({
        file: "data/contacts.json",
        outputElement: "#output"
    });
});
