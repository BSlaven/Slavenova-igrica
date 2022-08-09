const reset = document.querySelector('#reset');
const easy = document.querySelector('#easy');
const harder = document.querySelector('#harder');
const boxes = document.querySelectorAll('#main div');
const boxesContainer = document.querySelector('#main');
const mainColorBar = document.querySelector('#main-color');

easy.addEventListener('click', () => {
  boxes.forEach(box => box.style.display = 'none');
  arangeBoxes('easy');
});

harder.addEventListener('click', () => {
  arangeBoxes('hard');
});

function findRandomElement (elements) {
  if(elements.length < 1) return;
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomElement = elements[randomIndex];
  return randomElement;
}

function getRandomBoxColor() {
  const color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
  return color;
}

function pogodiBoju(traženiNiz, traženaBoja) {
  traženiNiz.forEach(novaKutija => {
    novaKutija.addEventListener('click', function(e) {
      if(e.target.style.backgroundColor !== traženaBoja) {
        novaKutija.style.display = 'none';
      } else {
        mainColorBar.style.backgroundColor = traženaBoja
        traženiNiz.forEach(novaKutija => {
          novaKutija.style.backgroundColor = traženaBoja;
          novaKutija.style.display = '';
        });    
      }
    });
  });
}

reset.addEventListener('click', () => {
  arangeBoxes('easy');
});

function arangeBoxes(level) {
  boxesContainer.innerHTML = '';
  if(level === 'easy') {
    loopForBoxes(3)
  } else {
    loopForBoxes(6)
  }
  let randomElement = findRandomElement(main.children);
  mainColorBar.textContent = randomElement.style.backgroundColor;
  pogodiBoju(boxes, mainColorBar.textContent);
}

function loopForBoxes(number) {
  for(let i = 1; i <= number; i++) {
    const box = createBox(i);
    const boxBackgroundColor = getRandomBoxColor();
    box.style.backgroundColor = boxBackgroundColor;
    box.addEventListener('click', () => {
      boxClickHandler(box, boxBackgroundColor, boxesContainer.children);
    })
    boxesContainer.appendChild(box);
  }
}

function createBox(index) {
  const box = document.createElement('div');
  box.classList.add('box', `box${index}`);
  return box;
}

function boxClickHandler(box, color, boxes) {
  const colorToFind = mainColorBar.textContent;
  if(color === colorToFind) {
    mainColorBar.style.backgroundColor = color;
    [...boxes].forEach(myBox => {
      myBox.style.display = '';
      myBox.style.backgroundColor = 'color';
    })
  } else {
    box.style.display = 'none'
  }
}

arangeBoxes('easy')