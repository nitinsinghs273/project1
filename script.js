let weather = {
    "apikey": "eed0a08dc50c0e4ac00762f3191fbc83"
}
function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(event) {
        // console.log(event);
        document.getElementById('speechToText').value = event.results[0][0].transcript;
    }
    recognition.start();

}