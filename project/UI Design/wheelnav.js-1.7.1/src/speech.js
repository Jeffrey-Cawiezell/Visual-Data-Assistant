/**
 * Speech Recognition code
 * NOTE:  "message" is an html attribute id.  This is where the output is sent.
 * You can name it anything, but it has to have an equivalent id in the html
 * itself, for example:
 * 
  <span id='message'></span>
 */


/** "message" is referred to here
 * THIS HAS TO BE DEFINED BEFORE ANYTHING ELSE SAYING "message" IN THE JS CODE
 * (again, "message" could be any id name. Most likely a text box we're entering into)
 */
// var message = document.querySelector('#message');

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

var grammar = '#JSGF V1.0';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
// recognition.interimResults = true;
recognition.interimResults = false;
recognition.wordsSpoken = '';

/****** This needs to be in the main html page *****
 *      (technically doesn't have to be but it's easier to understand context)
 ****************************************************/
/*
 * recognition.onresult = function(event) {
 *  var last = event.results.length - 1;
 *  var words = event.results[last][0].transcript;
 *  message.textContent = 'Voice Input: ' + words + '.';
 *  console.log(words);
 * //recognition.wordsSpoken += words;
 *}
 */

/***** Same with this *****
/* (btnStartSpeaking is another html attribute.
 * Just an example. It's the thing that starts the recording.)
 **************************/
/* 
 * document.querySelector('#btnStartSpeaking').addEventListener('click', function() {
 *	recognition.start();
 * })
 */

recognition.onspeechend = function() {
	recognition.stop();
};

recognition.onerror = function(event) {
  // "message" here
	message.textContent = 'Error occurred in recognition: ' + event.error;
}

