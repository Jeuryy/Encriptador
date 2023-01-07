    var encryptBtn = document.getElementById("btn-encrypt");
    var decryptBtn = document.getElementById("btn-decrypt");
    var showText = document.getElementById("notfound-text");
    var copyBtn = document.getElementById("copy");
    var clearBtn = document.getElementById("clear-content");


    function hideElements() {
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }


    function encrypt() {
        var textToEncrypt = document.getElementById("text").value;
        showText.innerHTML = textToEncrypt;
        var notFoundImg = document.getElementById("notfound-img");
        if (textToEncrypt == "") {
            showText.innerHTML = "<p><strong>Ningún mensaje fue encontrado.</strong><br><br> Ingresa el texto que desees encriptar o desencriptar</p>";
            notFoundImg.style.display = "initial";
            copyBtn.style.display = "none";
            clearBtn.style.display = "none";
        } else {
            notFoundImg.style.display = "none";
            copyBtn.style.display = "initial";
            clearBtn.style.display = "initial";
        }
    }

    function clearText() {
        showText.innerHTML = "<p><strong>Ningún mensaje fue encontrado.</strong><br><br> Ingresa el texto que desees encriptar o desencriptar</p>";
        notFoundImg.style.display = "initial";
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }


    //alert(textToEncrypt);


    window.onload = hideElements;