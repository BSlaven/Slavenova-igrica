const reset = document.querySelector('#reset');
const easy = document.querySelector('#easy');
const harder = document.querySelector('#harder');
const boxes = document.querySelectorAll('#main div');
const mainColorBar = document.querySelector('#main-color');
let kliknuoLakše = false;
let kliknuoTeže = false;
let samoTriKutije = [];

easy.addEventListener('click', function() {
  kliknuoLakše = true;
  kliknuoTeže = false;
  boxes.forEach(box => box.style.display = 'none');
  kreirajTriKutije();
});

harder.addEventListener('click', function() {
  samoTriKutije = [];
  kliknuoTeže = true;
  kliknuoLakše = false;
  urediSveKutije();
});

function findRandomElement (arr) {
  if (arr && arr.length) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

function brojZaBoju() {
  const color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  return color;
}

function pogodiBoju(traženiNiz, traženaBoja) {
  traženiNiz.forEach(novaKutija => {
    novaKutija.addEventListener('click', function(e) {
      if(e.target.style.backgroundColor !== traženaBoja) {
        novaKutija.style.display = 'none';
      } else {
        console.log('pogodak');
        mainColorBar.style.backgroundColor = traženaBoja
        traženiNiz.forEach(novaKutija => {
          novaKutija.style.backgroundColor = traženaBoja;
          novaKutija.style.display = '';
        });    
      }
    });
  });
}

function kreirajTriKutije() {
  boxes.forEach(box => {
    if(samoTriKutije.length < 3) samoTriKutije.push(box)
  });
  samoTriKutije.forEach(novaKutija => {
    novaKutija.style.backgroundColor = brojZaBoju();
    novaKutija.style.display = '';
  });
  let randomElement = findRandomElement(samoTriKutije);
  mainColorBar.textContent = randomElement.style.backgroundColor;
  pogodiBoju(samoTriKutije, mainColorBar.textContent)
}


function urediSveKutije() {
  boxes.forEach(box => {
    box.style.backgroundColor = brojZaBoju();
    box.style.display = '';
  });
  let randomElement = findRandomElement(boxes);
  mainColorBar.textContent = randomElement.style.backgroundColor;
  pogodiBoju(boxes, mainColorBar.textContent);
}

reset.addEventListener('click', function() {
  (kliknuoLakše) ? kreirajTriKutije() : urediSveKutije();
});

function arangeBoxes(level) {
  if(level === 'hard') {
    // boxes
  }
}

function createBox(index) {
  const box = document.createElement('div');
  box.classList.add('box');
}