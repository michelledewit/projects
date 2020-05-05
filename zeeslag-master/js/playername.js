console.log(localStorage);

var inpKey = document.getElementById("inpName");

var intName = document.getElementById("inpName");

var btnInsert = document.getElementById("btnInsert");

var lsOutput = document.getElementById("outputName");

var clean = document.getElementById("clean");

console.log(btnInsert)



function handleClick() {
    var key = inpKey.value;
    var name= intName.value;
    
    console.log(key);
    
    console.log(name);
    
    if(key && name) {
        localStorage.setItem(key, name);
        location.reload();
        location.href = "../zeeslag.html";}
        
        else {
            alert("Enter player name")
        }
    };
    
    for(let i = 0; i < localStorage.length; i++){
        
        var key = localStorage.key(i);
        var name = localStorage.getItem(key);
        
        lsOutput.innerHTML += `${name} - `;
    }  
    