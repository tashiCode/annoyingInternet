function failAlert() {
    alert("An error occurred. Please try again.");
    setTimeout(function() {window.location.href = 'index.html'; } ,1000);
}

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 10;
    var id = setInterval(frame, 100);
    function frame() {
        if (width >= 99) {
            clearInterval(id);
            setTimeout(failAlert,2500);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1 + '%';
        }
    }
}