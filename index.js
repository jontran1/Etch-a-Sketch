const container = document.querySelector('#gridContainer');

function createGrid(n, m){
    let auto = ""
    for(let i = 0; i < n; i++){
        auto += "auto ";
    }
    container.style.gridTemplateColumns = auto;

    for(let i = 0; i < n; i++){
        var newOuterDiv = document.createElement("div");
        for(let j = 0; j < m; j++){
            var newInnerDiv =  document.createElement("div");
            newInnerDiv.className = "square";
            newOuterDiv.appendChild(newInnerDiv);
          
        }
        container.appendChild(newOuterDiv);
    }
}

createGrid(16,16);