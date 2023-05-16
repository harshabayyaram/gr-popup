// $("#openmodal").click(function() {
//     $("#container").css("display", "block");
//     $("#popup").css("display", "block");
// });

// $(".cancel").click(function() {
//     $("#container").fadeOut();
//     $("#popup").fadeOut();
// });


function openmodel() {
    document.getElementById("container").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function cancel() {
    document.getElementById("container").style.display = "none";
    document.getElementById("popup").style.display = "none";
}