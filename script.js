
document.addEventListener("DOMContentLoaded", function() {
    var chestXRayDoneYes = document.getElementById("chestXRayDoneYes");
    var chestXRayDoneNo = document.getElementById("chestXRayDoneNo");
    var chestXRayDoneNA = document.getElementById("chestXRayDoneNA");

    var reasonBlock = document.getElementById("reasonBlock");

    var hiddenDivs = document.querySelectorAll(".hidden:not(#reasonBlock)");


    function showElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "flex";
        });
    }

    function hideElements(elements) {
        elements.forEach(function(element) {
            element.style.display = "none";
        });
    }

    function enableElements(elements) {
        elements.forEach(function(element) {
            element.disabled = false;
        });
    }

    function disableElements(elements) {
        elements.forEach(function(element) {
            element.disabled = true;
        });
    }

    chestXRayDoneYes.addEventListener("click", function() {
        showElements(hiddenDivs);
        hideElements([reasonBlock]);
        enableElements(otherElements);
    });

    chestXRayDoneNo.addEventListener("click", function() {
        hideElements(hiddenDivs);
        showElements([reasonBlock]);
        disableElements(otherElements);
    });

    chestXRayDoneNA.addEventListener("click", function() {
        hideElements(hiddenDivs);
        hideElements([reasonBlock]);
        disableElements(otherElements);
    });
});