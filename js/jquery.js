$(document).ready(function(){
    $("#navUserToggle").hide();
    $("#cartShopToggle").hide();

    $("#navUserProfile").click(function(){
        $("#navUserToggle").slideToggle();
    });
    $("#navUserToggle").mouseleave(function(){
        $(this).slideUp();
    });
    $("#cartShop").click(function(){
        $("#cartShopToggle").slideToggle();
    });
    $("#cartShopToggle").mouseleave(function(){
        $(this).slideUp();
    });
});