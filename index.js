document.addEventListener('DOMContentLoaded', function() {
    const colorChangeTrigger = document.getElementById('colorChangeTrigger');
    //klickhändelse
    colorChangeTrigger.addEventListener('click', function() {
        const currentColor = document.body.style.backgroundColor;

        // Om nuvarande färg är lightblue, ändra tillbaka till den ursprungliga färgen
        if (currentColor === 'lightblue') {
            document.body.style.backgroundColor = ''; // Återställ bakgrundsfärgen
        } else {
            // Annars, ändra till lightblue
            document.body.style.backgroundColor = 'lightblue';
        }
    });
});
//Påskägg #2
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const closeModal = modal.querySelector('.close');
    const modalContent = modal.querySelector('.modal-content');

    let typedKeys = '';

    // Lyssna på tangenttryckningar
    document.addEventListener('keydown', function(event) {
        // Lägg till det nedtryckta tecknet till typedKeys
        typedKeys += event.key;

        // Kontrollera om den inmatade kombinationen är "1337"
        if (typedKeys === '1337') {
            // Visa modal
            modal.style.display = 'block';
            // Återställ typedKeys för att förbereda för nästa inmatning
            typedKeys = '';
        }
    });

    // Stäng modal när användaren klickar på "X"
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Stäng modal när användaren klickar utanför modalen
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});