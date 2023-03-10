    // Variables
    let showText = document.getElementById("notfound-text"),
        copyBtn = document.getElementById("copy"),
        clearBtn = document.getElementById("clear-content"),
        notFoundImg = document.getElementById("notfound-img"),
        encryptBtn = document.getElementById("btn-encrypt"),
        decryptBtn = document.getElementById("btn-decrypt"),
        textToEncrypt;




    function guide() {
        alert("La letra 'e' es convertida para 'enter'\n" +
            "La letra 'i' es convertida para 'imes'\n" +
            "La letra 'a' es convertida para 'ai'\n" +
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
        textToEncrypt = textToEncrypt.replace(/e/g, "enter");
        textToEncrypt = textToEncrypt.replace(/i/g, "imes");
        textToEncrypt = textToEncrypt.replace(/a/g, "ai");
        textToEncrypt = textToEncrypt.replace(/o/g, "ober");
        textToEncrypt = textToEncrypt.replace(/u/g, "ufat");
        showText.innerHTML = textToEncrypt.toLowerCase();


        (!textToEncrypt) ? hideElements(): showElements();
    }

    function decrypt() {
        textToEncrypt = document.getElementById("text").value;
        textToEncrypt = removeAccents(textToEncrypt);
        textToEncrypt = textToEncrypt.replace(/enter/g, "e");
        textToEncrypt = textToEncrypt.replace(/imes/g, "i");
        textToEncrypt = textToEncrypt.replace(/ai/g, "a");
        textToEncrypt = textToEncrypt.replace(/ober/g, "o");
        textToEncrypt = textToEncrypt.replace(/ufat/g, "u");
        showText.innerHTML = textToEncrypt.toLowerCase();

        (!textToEncrypt) ? hideElements(): showElements();
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