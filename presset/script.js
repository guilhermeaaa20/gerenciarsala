document.getElementById("badmin").addEventListener("click", function() {
    alert("senha do administrador 123");
    if (document.getElementById(exampleInputEmail1.value) === 123) {
       let url1 = "http://127.0.0.1:5500/administrador.html";
       windows.location.href = url1; 
    };
});