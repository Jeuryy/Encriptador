    // Variables
    var encryptBtn = document.getElementById("btn-encrypt");
    var decryptBtn = document.getElementById("btn-decrypt");
    var showText = document.getElementById("notfound-text");
    var copyBtn = document.getElementById("copy");
    var clearBtn = document.getElementById("clear-content");
    var notFoundImg = document.getElementById("notfound-img");
    var textToEncrypt;


    function hideElements() {
        showText.innerHTML = "<p><strong>Ningún mensaje fue encontrado.</strong><br><br> Ingresa el texto que desees encriptar o desencriptar</p>";
        notFoundImg.style.display = "initial";
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }

    function showElements() {
        notFoundImg.style.display = "none";
        copyBtn.style.display = "initial";
        clearBtn.style.display = "initial";
    }

    /*La letra "e" es convertida para "enter"
      La letra "i" es convertida para "imes"
      La letra "a" es convertida para "ai"
      La letra "o" es convertida para "ober"
      La letra "u" es convertida para "ufat"*/
    function encrypt() {
        textToEncrypt = document.getElementById("text").value;
        textToEncrypt = textToEncrypt.replace(/a/igm, "ai");
        textToEncrypt = textToEncrypt.replace(/e/igm, "enter");
        textToEncrypt = textToEncrypt.replace(/i/igm, "imes");
        textToEncrypt = textToEncrypt.replace(/o/igm, "ober");
        textToEncrypt = textToEncrypt.replace(/u/igm, "ufat");
        showText.innerHTML = textToEncrypt.toLowerCase();

        if (textToEncrypt == "") {
            hideElements();
        } else {
            showElements()
        }
    }

    function decrypt() {
        textToEncrypt = document.getElementById("text").value;
        textToEncrypt = textToEncrypt.replace(/ai/igm, "a");
        textToEncrypt = textToEncrypt.replace(/enter/igm, "e");
        textToEncrypt = textToEncrypt.replace(/imes/igm, "i");
        textToEncrypt = textToEncrypt.replace(/ober/igm, "o");
        textToEncrypt = textToEncrypt.replace(/ufat/igm, "u");
        showText.innerHTML = textToEncrypt.toLowerCase();

        if (textToEncrypt == "") {
            hideElements();
        } else {
            showElements()
        }
    }

    function clearText() {
        textToEncrypt = document.getElementById("text").value = "";
        hideElements();
    }

    window.onload = hideElements;