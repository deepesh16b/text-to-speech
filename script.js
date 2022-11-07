let btn = $('button');
$(btn).click(function (e) { 
    let txt = $('.enter_text').val();
    var synth = window.speechSynthesis;
    var voiceOptions = speechSynthesis.getVoices();
    console.log(voiceOptions);
    var voice = voiceOptions[3];
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = txt;
    speech.rate = 1;
    speech.volume = 1;
    speech.voice = voice;
    speechSynthesis.speak(speech);
});