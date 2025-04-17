console.log("Ciao, mondo!");

// Gestione della Tappa 1
const input = document.getElementById('risposta');
const button = document.getElementById('verifica');
const risultato = document.getElementById('risultato');
const congratulazioniDiv = document.getElementById('congratulazioni');

button.addEventListener('click', () => {
  const risposta = input.value.trim().toLowerCase();

  if (risposta === "piazza della signoria") {
    risultato.textContent = "Risposta corretta!";
    risultato.style.color = "lightgreen";
    congratulazioniDiv.style.display = "block";
  } else {
    risultato.textContent = "Riprova!";
    risultato.style.color = "crimson";
    congratulazioniDiv.style.display = "none";
  }
});

// Gestione della risposta per la Tappa 1
document.getElementById('submitAnswer').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value.trim().toLowerCase();
  const correctAnswer = 'Piazza della Signoria'; // Risposta corretta per Tappa 1

  if (userInput === correctAnswer.toLowerCase()) {
      document.getElementById('correctFeedback').style.display = 'block';
      document.getElementById('incorrectFeedback').style.display = 'none';
      document.getElementById('image').style.display = 'block';
      document.getElementById('congratulazioni').style.display = 'block'; // Congratulazioni Tappa 1
      document.getElementById('nextTappa').style.display = 'block'; // Mostra pulsante per la Tappa 2
  } else {
      document.getElementById('incorrectFeedback').style.display = 'block';
      document.getElementById('correctFeedback').style.display = 'none';
      document.getElementById('image').style.display = 'none';
  }
});

// Gestione del passaggio alla Tappa 2
document.getElementById('nextTappa').addEventListener('click', function() {
  document.getElementById('congratulazioni').style.display = 'none';
  document.getElementById('tappa2Section').style.display = 'block';
  document.getElementById('audioTappa2').play(); // Avvia l'audio Tappa 2
});

// Gestione della risposta per la Tappa 2
document.getElementById('submitAnswerTappa2').addEventListener('click', function() {
  const userInputTappa2 = document.getElementById('userInputTappa2').value.trim().toLowerCase();
  const correctAnswerTappa2 = 'Ponte Vecchio'; // Risposta corretta per Tappa 2

  // Nascondi sempre il pulsante di Tappa 3 inizialmente
  document.getElementById('nextTappa2').style.display = 'none'; 

  if (userInputTappa2 === correctAnswerTappa2.toLowerCase()) {
      document.getElementById('correctFeedbackTappa2').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa2').style.display = 'none';
      document.getElementById('imageTappa2').style.display = 'block';
      document.getElementById('congratulazioniTappa2').style.display = 'block'; // Congratulazioni Tappa 2

      // Mostra il pulsante per la Tappa 3 solo se la risposta è corretta
      document.getElementById('nextTappa2').style.display = 'block'; // Mostra il pulsante per la Tappa 3
  } else {
      document.getElementById('incorrectFeedbackTappa2').style.display = 'block';
      document.getElementById('correctFeedbackTappa2').style.display = 'none';
      document.getElementById('imageTappa2').style.display = 'none';
  }
});

// Aggiungi l'evento per passare alla Tappa 3 quando l'utente clicca su "Vai alla Tappa 3"
document.getElementById('nextTappa2').addEventListener('click', function() {
  document.getElementById('congratulazioniTappa2').style.display = 'none';
  document.getElementById('tappa3Section').style.display = 'block';
  document.getElementById('audioTappa3').play(); // Avvia l'audio Tappa 3
});

// Gestisce la risposta della Tappa 3 con risposte multiple
document.getElementById('nextTappa').addEventListener('click', function() {
  document.getElementById('congratulazioni').style.display = 'none';
  document.getElementById('tappa2Section').style.display = 'block';
  document.getElementById('audioTappa3').play(); // Avvia l'audio Tappa 2
});

// Gestione della risposta per la Tappa 2
document.getElementById('submitAnswerTappa3').addEventListener('click', function() {
  const userInputTappa2 = document.getElementById('userInputTappa2').value.trim().toLowerCase();
  const correctAnswerTappa2 = 'Duomo di Firenze'; // Risposta corretta per Tappa 2

  // Nascondi sempre il pulsante di Tappa 3 inizialmente
  document.getElementById('nextTappa3').style.display = 'none'; 

  if (userInputTappa2 === correctAnswerTappa2.toLowerCase()) {
      document.getElementById('correctFeedbackTappa2').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa2').style.display = 'none';
      document.getElementById('imageTappa3').style.display = 'block';
      document.getElementById('congratulazioniTappa3').style.display = 'block'; // Congratulazioni Tappa 2

      // Mostra il pulsante per la Tappa 3 solo se la risposta è corretta
      document.getElementById('nextTappa3').style.display = 'block'; // Mostra il pulsante per la Tappa 3
  } else {
      document.getElementById('incorrectFeedbackTappa3').style.display = 'block';
      document.getElementById('correctFeedbackTappa3').style.display = 'none';
      document.getElementById('imageTappa3').style.display = 'none';
  }
});

// Aggiungi l'evento per passare alla Tappa 3 quando l'utente clicca su "Vai alla Tappa 3"
document.getElementById('nextTappa3').addEventListener('click', function() {
  document.getElementById('congratulazioniTappa3').style.display = 'none';
  document.getElementById('tappa4Section').style.display = 'block';
  document.getElementById('audioTappa4').play(); // Avvia l'audio Tappa 3
});

document.getElementById('submitAnswerTappa4').addEventListener('click', function () {
  const userInput = document.getElementById('userInputTappa4').value.trim().toLowerCase();
  const correctAnswer = 'palazzo pitti';

  if (userInput === correctAnswer) {
    document.getElementById('correctFeedbackTappa4').style.display = 'block';
    document.getElementById('incorrectFeedbackTappa4').style.display = 'none';
    document.getElementById('imageTappa4').style.display = 'block';
    document.getElementById('nextTappa4').style.display = 'block';
  } else {
    document.getElementById('incorrectFeedbackTappa4').style.display = 'block';
    document.getElementById('correctFeedbackTappa4').style.display = 'none';
    document.getElementById('imageTappa4').style.display = 'none';
    document.getElementById('nextTappa4').style.display = 'none';
  }
});

document.getElementById('nextTappa4').addEventListener('click', function () {
  document.getElementById('tappa4Section').style.display = 'none';
  document.getElementById('tappa5Section').style.display = 'block';
  document.getElementById('audioSectionTappa5').style.display = 'block';
  document.getElementById('audioTappa5').play();
});

document.getElementById('submitAnswerTappa5').addEventListener('click', function() {
  const userInputTappa5 = document.getElementById('userInputTappa5').value.trim().toLowerCase();
  const correctAnswerTappa5 = 'Il Porcellino';

  if (userInputTappa5 === correctAnswerTappa5.toLowerCase()) {
      document.getElementById('correctFeedbackTappa5').style.display = 'block';
      document.getElementById('incorrectFeedbackTappa5').style.display = 'none';
      document.getElementById('imageTappa5').style.display = 'block';
      document.getElementById('nextTappa5').style.display = 'block';
  } else {
      document.getElementById('incorrectFeedbackTappa5').style.display = 'block';
      document.getElementById('correctFeedbackTappa5').style.display = 'none';
      document.getElementById('imageTappa5').style.display = 'none';
  }
});


      document.getElementById('nextTappa5').addEventListener('click', function() {
          document.getElementById('tappa5Section').style.display = 'block';  // Tappa 2 non nasconde più
          document.getElementById('tappa6Section').style.display = 'block';
          document.getElementById('audioSectionTappa6').style.display = 'block';
          document.getElementById('audioTappa6').play();
      });


      document.getElementById('submitAnswerTappa6').addEventListener('click', function() {
        const userInputTappa6 = document.getElementById('userInputTappa6').value.trim().toLowerCase();
        const correctAnswerTappa6 = 'Piazza Santa Croce';
    
        if (userInputTappa6 === correctAnswerTappa6.toLowerCase()) {
            document.getElementById('correctFeedbackTappa6').style.display = 'block';
            document.getElementById('incorrectFeedbackTappa6').style.display = 'none';
            document.getElementById('imageTappa6').style.display = 'block';
            document.getElementById('nextTappa6').style.display = 'block';
        } else {
            document.getElementById('incorrectFeedbackTappa6').style.display = 'block';
            document.getElementById('correctFeedbackTappa6').style.display = 'none';
            document.getElementById('imageTappa6').style.display = 'none';
        }
    });
    
    
            document.getElementById('nextTappa6').addEventListener('click', function() {
                document.getElementById('tappa6Section').style.display = 'block';  // Tappa 2 non nasconde più
                document.getElementById('tappa7Section').style.display = 'block';
                document.getElementById('audioSectionTappa7').style.display = 'block';
                document.getElementById('audioTappa7').play();
       });

    

       document.getElementById('submitAnswerTappa7').addEventListener('click', function() {
        const userInputTappa7 = document.getElementById('userInputTappa7').value.trim().toLowerCase();
        const correctAnswerTappa7 = 'Piazzale Michelangelo';
    
        if (userInputTappa7 === correctAnswerTappa7.toLowerCase()) {
            document.getElementById('correctFeedbackTappa7').style.display = 'block';
            document.getElementById('incorrectFeedbackTappa7').style.display = 'none';
            document.getElementById('imageTappa7').style.display = 'block';
            document.getElementById('nextTappa7').style.display = 'block';
        } else {
            document.getElementById('incorrectFeedbackTappa7').style.display = 'block';
            document.getElementById('correctFeedbackTappa7').style.display = 'none';
            document.getElementById('imageTappa7').style.display = 'none';
        }
    });

