(function($){

$.fn.addressBook = function(options) {
    var defaults = {
        file: "default",
        outputElement: "#output"
    };

    var options = $.extend(defaults, options);

    return this.each(function(){
var addr = {
    search : function(event){
        event.preventDefault();

        $.getJSON(options.file, function (data) {

            var searchValue = $("#input").val().toLowerCase(),
                addrBook = data.addressBook,
                count = addrBook.length,
                outputElement = options.outputElement;

                console.log(searchValue);

            $(outputElement).empty();

            if (count > 0 && searchValue !== "") {
                $.each(addrBook, function (i, obj) {
                    var isItFound = obj.name.toLowerCase().indexOf(searchValue);
                    if(isItFound !== -1) {
                        $(outputElement).append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>');
                    }
                });
            }
        });
    },
    getAllContacts : function (){
        $.getJSON(options.file, function (data) {
            var addrBook = data.addressBook,
                count = addrBook.length,
                outputElement = options.outputElement;

            $(outputElement).empty();
            if (count > 0) {
                $.each(addrBook, function (i, obj) {
                    $(outputElement).append('<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>');
                });
            }
        })
        .fail( function(d, textStatus, error) {
            console.error(textStatus + " error: " + error);
        }); 
    } // end get all
}; // end addr 

    $("#input").keyup(addr.search).focus(function () {
        $(this).parent().addClass("active");
    }).blur(function () {
        $(this).parent().removeClass("active");
    });

    $("#search").hover(function () {
        $(this).addClass("hovering");
    }, function () {
        $(this).removeClass("hovering");
    }).submit(addr.search);

    $("#getall").on("click", addr.getAllContacts);
});
};

})(jQuery);