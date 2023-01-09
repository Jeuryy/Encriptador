    // Variables
    var showText = document.getElementById("notfound-text");
    var copyBtn = document.getElementById("copy");
    var clearBtn = document.getElementById("clear-content");
    var notFoundImg = document.getElementById("notfound-img");
    var encryptBtn = document.getElementById("btn-encrypt");
    var decryptBtn = document.getElementById("btn-decrypt");
    var textToEncrypt;
    var aux;



    function guide() {
        alert("La letra 'e' es convertida para 'enter'\n" +
            "La letra 'i' es convertida para 'imes'\n" +
            "La letra 'a' es convertida para 'aimes'\n" +
            "La letra 'o' es convertida para 'ober'\n" +
            "La letra 'u' es convertida para 'ufat'\n");
    }

    function hideElements() {
        showText.innerHTML = "<p><strong>No hay mensaje</strong><br><br> El mensaje encriptado/desencriptado aparecera aqui</p>";
        notFoundImg.style.display = "initial";
        copyBtn.style.display = "none";
        clearBtn.style.display = "none";
    }

    function showElements() {
        notFoundImg.style.display = "none";
        copyBtn.style.display = "initial";
        clearBtn.style.display = "initial";
    }
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    /*La letra "e" es convertida para "enter"
      La letra "i" es convertida para "imes"
      La letra "a" es convertida para "aimes"
      La letra "o" es convertida para "ober"
      La letra "u" es convertida para "ufat"*/
    function encrypt() {
        textToEncrypt = document.getElementById("text").value;
        textToEncrypt = removeAccents(textToEncrypt);
        textToEncrypt = textToEncrypt.replace(/a/igm, "ai");
        textToEncrypt = textToEncrypt.replace(/e/igm, "enter");
        textToEncrypt = textToEncrypt.replace(/i/igm, "imes");
        textToEncrypt = textToEncrypt.replace(/o/igm, "ober");
        textToEncrypt = textToEncrypt.replace(/u/igm, "ufat");
        showText.innerHTML = textToEncrypt.toLowerCase();

        //encryptBtn.onclick = aux = 0;

        //copyBtn.onclick = copyText(showText.innerHTML);

        if (textToEncrypt == "") {
            hideElements();
        } else {
            showElements()
        }
    }

    function decrypt() {
        textToEncrypt = document.getElementById("text").value;
        textToEncrypt = removeAccents(textToEncrypt);
        textToEncrypt = textToEncrypt.replace(/aimes/igm, "a");
        textToEncrypt = textToEncrypt.replace(/enter/igm, "e");
        textToEncrypt = textToEncrypt.replace(/imes/igm, "i");
        textToEncrypt = textToEncrypt.replace(/ober/igm, "o");
        textToEncrypt = textToEncrypt.replace(/ufat/igm, "u");
        showText.innerHTML = textToEncrypt.toLowerCase();

        //decryptBtn.onclick = aux = 1;

        //copyBtn.onclick = copyText(showText.innerHTML);

        if (textToEncrypt == "") {
            hideElements();
        } else {
            showElements()
        }
    }

    function copyText() {
        navigator.clipboard.writeText(showText.innerHTML)
            .then(() => {
                alert("Texto copiado!");
            })
            .catch(err => {
                alert("Error, err");
            })
    }

    function clearText() {
        textToEncrypt = document.getElementById("text").value = "";
        hideElements();
    }


    window.onload = hideElements;