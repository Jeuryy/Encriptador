    var encryptBtn = document.getElementById("btn-encrypt");
    var decryptBtn = document.getElementById("btn-decrypt");
    var showText = document.getElementById("notfound-text");
    var copyBtn = document.getElementById("copy");


    function hideElements() {
        copyBtn.style.display = "none";
    }

    function encrypt() {
        if (textToEncrypt == "") {
            showText.innerHTML = "<p><strong>Ningún mensaje fue encontrado.</strong><br><br> Ingresa el texto que desees encriptar o desencriptar</p>";
        } else {
            var textToEncrypt = document.getElementById("text").value;
            showText.innerHTML = textToEncrypt;
            var notFounImg = document.getElementById("notfound-img").style.display = "none";
            copyBtn.style.display = "initial";
        }
    }

    //alert(textToEncrypt);


    window.onload = hideElements;