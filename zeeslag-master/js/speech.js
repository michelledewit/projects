// var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
// var speechRecognitionList = new SpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;


// function startSpeech(){
// 	var x = document.getElementById("guessInput");
// 	if (x.style.display === "none") {
//       x.style.display = "block";
     
// 	} else {
// 	  x.style.display = "none";
//     } 
// }


function record(){
    var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = "nl-NL"
    recognition.interimResults = false;
    recognition.maxAlternatives = 5;
    
    recognition.onresult = function(event){
        document.getElementById("guessInput").value = event.results[0][0].transcript;
        console.log(event.results[0][0].transcript)
    }
    
    recognition.start();
}

// recognition.onspeechend = function() {
//     recognition.stop();
    
//   }