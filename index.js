/**
 * Pass in a div container and it creates a div inside a div
 * n * m divs
 * @param {div} mainDiv 
 * @param {*} n 
 * @param {*} m 
 */
function createGrid(mainDiv, n, m){
    let auto = ""
    for(let i = 0; i < n; i++){
        auto += "auto ";
    }
    mainDiv.style.gridTemplateColumns = auto;

    for(let i = 0; i < n; i++){
        var newOuterDiv = document.createElement("div");
        for(let j = 0; j < m; j++){
            var newInnerDiv =  document.createElement("div");
            newInnerDiv.className = "black-square";
            newInnerDiv.addEventListener("mouseover", hover);
            newOuterDiv.appendChild(newInnerDiv);
          
        }
        mainDiv.appendChild(newOuterDiv);
    }
}

function hover(event){
    console.log(event.target);
    var cell = event.target;
    if(cell.className == "black-square"){
        cell.className = "white-square";
    }
}

function destoryGrid(){
    var childNodes = container.childNodes;
    console.log(childNodes);
    for(let i = childNodes.length-1; i >= 0; i--){
        container.removeChild(childNodes[i]);
    }
}

function resetGrid(){
    var cells = container.getElementsByClassName("white-square");
    console.log(cells.length)
    for(let i = cells.length-1 ; i >= 0; i--){
        cells[i].className = "black-square";
    }
    var n = prompt("Please enter new column number", "16");
    var m = prompt("Please enter new row number", "16");
    destoryGrid();
    createGrid(container, n, m);

}

const container = document.querySelector('#gridContainer');
var n = 5;
var m = 5;
createGrid(container, n,m);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener("click", resetGrid);
