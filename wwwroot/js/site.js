
$(document).ready(function () {

    console.log("Hello Foodeater!");

    //var contactUsForm = $("#contactUsForm");
    //contactUsForm.hide();

    //var contactUsButton = $("#contactUsButton");
    //contactUsButton.on("click", function () {
    //    contactUsForm.fadeToggle(500);
    //});

    //var loginToggle = $("#loginToggle")
    //var popupForm = $(".popup-form")
    //popupForm.hide();
    //loginToggle.on("click", function () {
    //    popupForm.fadeToggle(500);
    //});

    var productInfo = $(".recipe-info li");
    productInfo.on("click", function () {
        console.log("User clicked on " + $(this).text());
    });

    var SearchInput = $("#SearchInputRecipes");
    SearchInput.on("input", function () {

        console.log("User typing...");

        SearchInput.autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/Recipes",
                    type: "POST",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (value) {
                            console.log(value.name);
                            return { label: value.name, value: value.name };
                        }))
                    }
                })
            },
            messages: {
                noResults: 'No results found.',
                results: function () {
                    return;
                }
            }
        });
    });
});