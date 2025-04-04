$(document).ready(function () {
    $(".add-to-cart").click(function () {
        $("#cart-items").append("<li>Fruit - Rs.450</li>").listview("refresh");
        alert("Item added to cart!");
    });
});