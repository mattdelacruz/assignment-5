window.onload = function() {
    document.getElementById("form").value = "";
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    })
}

function bigger() {
    document.getElementById("form").style.fontSize = "24pt";
}

function fancify(id) {
    clearRadio(id);
    switch (id) {
        case "FancyShmancy":
            document.getElementById("form").style.textDecoration = "underline";
            document.getElementById("form").style.color = "blue";
            document.getElementById("form").style.fontWeight = "bold";
            break;
        case "BoringBetty":
            document.getElementById("form").style.textDecoration = "none";
            document.getElementById("form").style.color = "black";
            document.getElementById("form").style.fontWeight = "normal";
            break;
    };
}

function moo() {
    var text = document.getElementById("form").value.toUpperCase();
    if (text != "") {
        text = text.split(" ");
        text[text.length - 1] += "-Moo";
        document.getElementById("form").value = text.join(" ");
    }
}

function clearRadio(id) {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        if (radio.id !== id) {
            radio.checked = false;
        }
    })
}