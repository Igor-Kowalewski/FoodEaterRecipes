
$(document).ready(function () {

    console.log("Hello Foodeater!");

    var contactUsForm = $("#contactUsForm");
    contactUsForm.hide();

    var contactUsButton = $("#contactUsButton");
    contactUsButton.on("click", function () {
        contactUsForm.fadeToggle(500);
    });

    var productInfo = $(".recipe-info li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });

    var loginToggle = $("#loginToggle")
    var popupForm = $(".popup-form")
    popupForm.hide();
    loginToggle.on("click", function () {
        popupForm.fadeToggle(500);
    });

});