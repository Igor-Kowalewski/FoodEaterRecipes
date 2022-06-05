
$(document).ready(function () {
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


    /// WYSZUKIWANIE PRZEPISÓW PO NAZWIE - BAZA DANYCH SQL
    var SearchInputRecipes = $("#SearchInputRecipes");
    SearchInputRecipes.on("input", function () {

        console.log("User typing...");

        SearchInputRecipes.autocomplete({
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


    /// WYSZUKIWANIE SKŁADNIKÓW PO NAZWIE - ZEWNĘTRZNE API
    var SearchIngredientResult = []
    var SearchInputIngredient = $("#SearchInputIngredient");
    SearchInputIngredient.on("input", function () {

        console.log("User typing...");
        while(SearchIngredientResult.length) { SearchIngredientResult.pop(); }

        SearchInputIngredient.autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "api/Ingredients",
                    type: "GET",
                    dataType: "json",
                    data: { Prefix: request.term },
                    success: function (data) {
                        response($.map(data, function (value) {
                            SearchIngredientResult.push(value);
                            return { label: value.name, value: value.name }; /// w json musi być z małej litery!!!
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

        console.log(SearchIngredientResult);

    });


    /// UZUPEŁNIANIE FORMULARZA DODANIA KOLEJNEGO SKŁADNIKA PO NACIŚNIĘCIU BUTTONA
    var addIngredientBtn = $("#addIngredientBtn");
    addIngredientBtn.on("click", function () {

        /// pobieram składnik
        var ingredient = SearchIngredientResult.find(ingredient => ingredient.name === $('#SearchInputIngredient').val());

        if (ingredient) {
            /// czyszczę tablicę wyników po pobraniu
            while (SearchIngredientResult.length) { SearchIngredientResult.pop(); }

            /// czyszczę pole input
            $('#SearchInputIngredient').val("");

            /// podmieniam wartości w formularzu?
            $('#ingredientAdded').text(ingredient.name);
        }
    });
});