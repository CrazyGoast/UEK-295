
const fs = require('fs/promises');

function leseDateiInhalt(dateiName) {
  return fs.readFile(dateiName, 'utf-8');
}

leseDateiInhalt('Aufgabe_2_2.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });
