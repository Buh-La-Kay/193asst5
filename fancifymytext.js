function onBigger(){
    // document.getElementById("textArea").setAttribute("style", "font-size: 24px;")
    document.getElementById("textArea").style.fontSize = "24px"

}

function onMoo(){
    var textarea = document.getElementById("textArea");
    var text = textarea.value;
    var sentences = text.split(/[.!?]/);
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();

        if (sentence.length === 0) continue;

        sentences[i] = sentence.toUpperCase() + "-Moo";

        var modifiedText = sentences.join(" ");

        textarea.value = modifiedText;
    }

}

function onFancify(){
    var textArea = document.getElementById("textArea");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";}

function onBoring(){
    document.getElementById("textArea").setAttribute("style", "")
}

function myAlert(){
    alert("Hello, World!")
}

