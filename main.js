    var encryptBtn = document.getElementById("btn-encrypt");
    var decryptBtn = document.getElementById("btn-decrypt");
    var showText = document.getElementById("notfound-text");
    var copyBtn = document.getElementById("copy");
    var clearBtn = document.getElementById("clear-content");
    var notFoundImg = document.getElementById("notfound-img");
    var textToEncrypt;

    function hideElements() {
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }


    function encrypt() {
        textToEncrypt = document.getElementById("text").value;
        showText.innerHTML = textToEncrypt;

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
        textToEncrypt = document.getElementById("text").value = "";
        showText.innerHTML = "<p><strong>Ningún mensaje fue encontrado.</strong><br><br> Ingresa el texto que desees encriptar o desencriptar</p>";
        notFoundImg.style.display = "initial";
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }



    //alert(textToEncrypt);


    window.onload = hideElements;