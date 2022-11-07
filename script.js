let btn = $('button');
$(btn).click(function (e) { 
    let txt = $('.enter_text').val();
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = txt;
    speech.rate = 1;
    speech.volume = 1;
    speechSynthesis.speak(speech);
});
