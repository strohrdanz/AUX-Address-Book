$(document).ready(function(){  
    var addr = {
        search : function(event){
            event.preventDefault();

            $.getJSON('data/contacts.json', function (data) {

                var searchValue = $("#input").val();
                addrBook = data.addressBook,
                count = addrBook.length,

                $('#output').empty();

                if (count > 0 && searchValue !== "") {
                    $.each(addrBook, function (i, obj) {
                        var isItFound = obj.name.indexOf(searchValue);
                        if(isItFound !== -1) {
                            $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>');
                        }
                    });
                }
            });
        },
        getAllContacts : function (){
            $.getJSON('data/contacts.json', function (data) {
                var addrBook = data.addressBook,
                    count = addrBook.length;
                $('#output').empty();
                if (count > 0) {
                    $.each(addrBook, function (i, obj) {
                        $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>');
                    });
                }
            })
            .fail( function(d, textStatus, error) {
                console.error(textStatus + " error: " + error);
            }); 
        } // end get all
    } // end addr 

    $("#input").keyup(addr.search).focus(function () {
        $(this).parent().addClass("active");
    }).blur(function () {
        $(this).parent().removeClass("active");
    });

    $("#search").hover(function () {
        $(this).addClass("hovering");
    }, function () {

        $(this).removeClass("hovering");
    }).submit(addr.search);;

    $("#getall").click(addr.getAllContacts);
    });
