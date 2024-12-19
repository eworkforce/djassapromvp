// JavaScript code for app.js
const recordBtn = document.getElementById('record-btn');
const status = document.getElementById('status');
const transcriptTextarea = document.getElementById('transcript');
const generateBtn = document.getElementById('generate-btn');
const adMessageParagraph = document.getElementById('ad-message');
const whatsappShareLink = document.getElementById('whatsapp-share');

let recognition;
let isRecording = false;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'fr-FR'; // Set language to French
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = function() {
    isRecording = true;
    status.textContent = 'Enregistrement en cours...';
    recordBtn.textContent = 'Arrêter l\'enregistrement';
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    transcriptTextarea.value = transcript;
  };

  recognition.onerror = function(event) {
    status.textContent = 'Une erreur est survenue: ' + event.error;
  };

  recognition.onend = function() {
    isRecording = false;
    status.textContent = 'Enregistrement terminé.';
    recordBtn.textContent = 'Commencer l\'enregistrement';
  };
} else {
  status.textContent = 'La reconnaissance vocale n\'est pas supportée par ce navigateur.';
  recordBtn.disabled = true;
}

recordBtn.addEventListener('click', () => {
  if (isRecording) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

generateBtn.addEventListener('click', () => {
  const userText = transcriptTextarea.value;
  const adMessage = `🎉 Découvrez notre nouveau produit : ${userText}! 🚀 Profitez-en dès maintenant! 🌟`;
  adMessageParagraph.textContent = adMessage;

  const encodedMessage = encodeURIComponent(adMessage);
  whatsappShareLink.href = `https://wa.me/?text=${encodedMessage}`;
});