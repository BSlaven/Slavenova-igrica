const reset = document.querySelector('#reset');
const lakše = document.querySelector('#easy');
const harder = document.querySelector('#harder');
const boxes = document.querySelectorAll('#main div');
const mainColorBar = document.querySelector('#main-color');
let kliknuoLakše = false;
let kliknuoTeže = false;
let samoTriKutije = [];

lakše.addEventListener('click', function() {
  kliknuoLakše = true;
  kliknuoTeže = false;
  kutije.forEach(kutija => kutija.style.display = 'none');
  kreirajTriKutije();
});

teže.addEventListener('click', function() {
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
  const boja = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  return boja;
}

function pogodiBoju(traženiNiz, traženaBoja) {
  traženiNiz.forEach(novaKutija => {
    novaKutija.addEventListener('click', function(e) {
      if(e.target.style.backgroundColor !== traženaBoja) {
        novaKutija.style.display = 'none';
      } else {
        console.log('pogodak');
        traka.style.backgroundColor = traženaBoja
        traženiNiz.forEach(novaKutija => {
          novaKutija.style.backgroundColor = traženaBoja;
          novaKutija.style.display = '';
        });    
      }
    });
  });
}

function kreirajTriKutije() {
  kutije.forEach(kutija => {
    if(samoTriKutije.length < 3) samoTriKutije.push(kutija)
  });
  samoTriKutije.forEach(novaKutija => {
    novaKutija.style.backgroundColor = brojZaBoju();
    novaKutija.style.display = '';
  });
  let rand = findRandomElement(samoTriKutije);
  traka.textContent = rand.style.backgroundColor;
  pogodiBoju(samoTriKutije, traka.textContent)
}


function urediSveKutije() {
  kutije.forEach(kutija => {
    kutija.style.backgroundColor = brojZaBoju();
    kutija.style.display = '';
  });
  let randomElement = findRandomElement(kutije);
  traka.textContent = randomElement.style.backgroundColor;
  pogodiBoju(kutije, traka.textContent);
}

reset.addEventListener('click', function() {
  (kliknuoLakše) ? kreirajTriKutije() : urediSveKutije();
});
