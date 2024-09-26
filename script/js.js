var i = 0;
function cambiarIdioma(){
    var variable = document.getElementById("Texto");
    if(i == 0){
        i = 1;
        variable.innerHTML = ' Something Will Spawn Here ';
    }else{
        i = 0;
        variable.innerHTML = ' Algo Spawneara Aqui Tarde O Temprano ';
    }
}