	if(document.title)
	speak(' welcome to '+document.title);
	
	$(document).focusin(function(e) {
	speak(e.target.text);
	});

        // healper function definition
		
	function speak(txt){
	var synth = window.speechSynthesis;
	var voices = synth.getVoices();
	if(true){
	var utterThis = new SpeechSynthesisUtterance(txt);
	utterThis.voice=voices[0];
	utterThis.pitch = 1;
	utterThis.rate = 1;
	synth.speak(utterThis);
	}
	}


