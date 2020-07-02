$(function () {
    // Set Padding Bottom In Body
    if ($("footer").hasClass("bottom")) {
        $(".app").css("paddingBottom", $("footer").innerHeight());
        $(".app").css("paddingLeft", $(".header .nav-bar").innerWidth());
    }
    // End Set Padding

    // Start Function Show Sections
    $(".link-navbar").click(function (e) {
        e.preventDefault();
        $(".block").hide();
        $($(this).data("targets"))
            .addClass("block")
            .siblings()
            .removeClass("block");
        $($(this).data("targets")).fadeIn("slow");
    });
    // End Function Show Sections

    // Start Function Toggle Show PS & Drink
    // Show Dirnk Add
    $(".add-drink").click(function () {
        $(".add-drink-page").fadeIn();
        $(".add-ps-page").hide();
    });

    // Show PS Add
    $(".add-ps").click(function () {
        $(".add-ps-page").fadeIn();
        $(".add-drink-page").hide();
    });
    // End Function Toggle Show PS & Drink

    // Start Function Popup Drink
    $(".add-drink").click(function () {
        $(".parent-popup-drink").fadeIn();
        $(".popup-content-drink").css(
            "transform",
            "scale(1) translate(-50%, -50%)"
        );
    });
    // Hide Popup For Click To Parent Popup
    $(".parent-popup-drink").click(function () {
        $(this).fadeOut();
        $(".popup-content-drink").css(
            "transform",
            "scale(0) translate(-50%, -50%)"
        );
    });
    // Stop Hide && In Content Click
    $(".popup-content-drink").click(function (e) {
        e.stopPropagation();
    });
    // Closed Popup From Icon
    $(".parent-popup-drink .icon-closed").click(function (e) {
        e.preventDefault();
        $(".parent-popup-drink").fadeOut();
        $(".popup-content-drink").css(
            "transform",
            "scale(0) translate(-50%, -50%)"
        );
    });
    // Closed Popup From Key ESC
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(".parent-popup-drink").fadeOut();
            $(".popup-content-drink").css(
                "transform",
                "scale(0) translate(-50%, -50%)"
            );
        }
    });
    // End Function Popup Drink

    // Start Function Popup Details
    // Show PopUp Fuinctios Drink
    $(".details").click(function () {
        $(".parent-popup-details").fadeIn();
        $(".popup-content-details").css(
            "transform",
            "scale(1) translate(-50%, -50%)"
        );
    });
    // Hide Popup For Click To Parent Popup
    $(".parent-popup-details").click(function () {
        $(this).fadeOut();
        $(".popup-content-details").css(
            "transform",
            "scale(0) translate(-50%, -50%)"
        );
    });
    // Stop Hide && In Content Click
    $(".popup-content-details").click(function (e) {
        e.stopPropagation();
    });
    // Closed Popup From Icon
    $(".parent-popup-details .icon-closed").click(function (e) {
        e.preventDefault();
        $(".parent-popup-details").fadeOut();
        $(".popup-content-details").css(
            "transform",
            "scale(0) translate(-50%, -50%)"
        );
    });
    // Closed Popup From Key ESC
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $(".parent-popup-details").fadeOut();
            $(".popup-content-details").css(
                "transform",
                "scale(0) translate(-50%, -50%)"
            );
        }
    });
    // End Function Popup Details

    //
});
