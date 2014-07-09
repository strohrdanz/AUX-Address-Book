(function($){

$.fn.addressBook = function(options) {
    var defaults = {
        file: "default",
        outputElement: "#output"
    };

    var now = Date.now();
    console.log(now);

    // setInterval(function(){
    //     var newnow = Date.now();
    //     var check = newnow - now;
    //     if (check > 4000) {
    //         console.log("need to refresh");
    //     } 
    //     console.log(newnow);
    //     console.log(check);
    // },3000);

    var options = $.extend(defaults, options);
    var template = $('#persontpl').html();
    return this.each(function(){
var addr = {
    search : function(event){

        event.preventDefault();

        $.getJSON(options.file, function (data) {
                var searchValue = $("#input").val().toLowerCase(),
                addrBook = data.addressBook,
                count = addrBook.length,
                outputElement = options.outputElement,
                filteredData = {"addressBook": []};
            
            $(outputElement).empty();

            if (count > 0 && searchValue !== "") {
                $.each(addrBook, function (i, obj) {
                    var isItFound = obj.name.toLowerCase().indexOf(searchValue);
                    if(isItFound !== -1) {
                        filteredData.addressBook.push(obj);
                    }
                });
                var rendered = Mustache.render(template, filteredData);
                $(outputElement).html(rendered);
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
                    var rendered = Mustache.render(template, data);
                    $(outputElement).html(rendered);
                });
            }
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