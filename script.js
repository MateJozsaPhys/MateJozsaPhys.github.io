document.addEventListener("DOMContentLoaded", function() {
  const gridSize = 75;
  const gridS = 30;
  const bunnyGrid = document.getElementById("bunny-grid");
  const grid = document.getElementById("grid");
  const slider = document.getElementById("mySlider");
  const minValue = parseFloat(slider.min);
  const maxValue = parseFloat(slider.max);
  const yearContainer = document.getElementById("years");
  let r = parseFloat(slider.value);
  let dbclicked = 0;
  let db = 0;
  let x = 0.01;
  let time = 0;
  let roundX = 0;
  let roundX2 = 0;

  for (let i = 0; i < gridS*gridS; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
  }

  for (let i = 0; i < gridSize; i++) {
    let bunnyCell = document.createElement("div");
    bunnyCell.classList.add("no-bunny-cell");
    bunnyGrid.appendChild(bunnyCell);
  }

  slider.addEventListener("input", clearRabbitField);

  setInterval(function() {
    if (r >= minValue && r <= maxValue && db == 0) {
      x = r * x * (1 - x);
      roundX = Math.round(x * (gridSize));
      for (let i = 0; i< gridSize+1; i++){
        if (typeof bunnyGrid.childNodes[i].classList === 'object'){
          bunnyGrid.childNodes[i].classList.remove("bunny-cell");
        }
      }
      for (let i = 0; i < roundX+1; i++){
        if (typeof bunnyGrid.childNodes[i].classList === 'object'){
          bunnyGrid.childNodes[i].classList.add("bunny-cell");
        }
      }
      roundX2 = (gridS-1) - Math.round(x * (gridS-1));
      cellIndex = time + roundX2 * gridS;
      cellToHighlight = grid.childNodes[cellIndex];
      cellToHighlight.classList.add("highlighted");
      yearContainer.innerHTML = `${time+1}. an`;
      if (time < 29){
        time = time + 1;
      } else {
        db = 1;
      }
    }
  }, 200);


function clearRabbitField() {
    r = parseFloat(slider.value);
    time = 0;
    db = 0;
    x = 0.01;
    for (let i = 0; i < gridS*gridS; i++){
      grid.childNodes[i].classList.remove("highlighted");
    }
  };
 
});