var i = 0;
function cambiarIdioma(){
    var variable = document.getElementById("Texto");
    if(i == 0){
        i = 1;
        variable.innerHTML = ' something will be shown here somewhen ';
    }else{
        i = 0;
        variable.innerHTML = ' Algo Se Mostrara Aqui Tarde O Temprano ';
    }
}