// Funktion för att läsa JSON-filer
function läsJSON(filnamn, callback) {
  fetch(filnamn)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Fel vid inläsning av JSON-fil:', error));
}

// Funktion för att generera CV
function genereraCV(utbildningar, arbeten) {
  const cvContainer = document.getElementById('main'); // Uppdatera denna rad

  // Kontrollera om cvContainer är null innan du fortsätter
  if (!cvContainer) {
      console.error("Kunde inte hitta cvContainer-elementet i DOM:en");
      return;
  }

  // Generera utbildningssektion
  const utbildningsHtml = '<div class="left">' +
    '<h2>Utbildning</h2>' +
    utbildningar.map(utbildning =>
      `<div class="education">
         <h3><strong>${utbildning.namn}</strong> på ${utbildning.skola}</h3>
         <p><strong>Varaktighet:</strong> ${utbildning.startdatum} - ${utbildning.slutdatum}</p>
      </div>`
    ).join('') +
    '</div>';

  // Generera arbetessektion
  const arbetenHtml = '<div class="right">' +
  '<h2>Arbetserfarenhet</h2>' +
  arbeten.map(arbete =>
    `<div class="job">
       <h3>${arbete.titel}</h3>
       <p><strong>Företag:</strong> ${arbete.företag}</p>
       <p><strong>Varaktighet:</strong> ${arbete.varaktighet}</p>
       <p>${arbete.beskrivning}</p> <!-- Uppdaterad här -->
     </div>`
  ).join('') +
  '</div>';

  // Lägg till CV-sektioner till container
  cvContainer.innerHTML = utbildningsHtml + arbetenHtml;
}

// Läs och generera CV när sidan laddas
document.addEventListener('DOMContentLoaded', function() {
  läsJSON('utbildningar.json', function(utbildningar) {
      läsJSON('arbete.json', function(arbeten) { // Uppdatera filnamnet här om det är fel
          genereraCV(utbildningar, arbeten);
      });
  });
});
