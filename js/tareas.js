'use strict'

var tareas = [];
window.addEventListener("submit", function(e){
  e.preventDefault();
})
window.onload = function() {
  if (JSON.parse(localStorage.getItem("tareas")) != null && JSON.parse(localStorage.getItem("tareas")) != "" )
    tareas = JSON.parse(localStorage.getItem("tareas"));
  else{
    
  }
display()
};


function addElement() {

  if (document.querySelector("#tareaInput").value.trim() != "") {
    tareas.push(document.querySelector("#tareaInput").value.trim());

    if (localStorage.getItem("tareas") == null) {
      localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
      localStorage.setItem("tareas", JSON.stringify(tareas));
      CorrectoAgregado();
     
    }
    display();
   
  }

}



function display() {
  document.querySelector(".lista").innerHTML = "";
  for (var i = 0; i < tareas.length; i++)
    document.querySelector(".lista").innerHTML +=
     
       "<p class='borrar' onclick='eliminar("+i+")'>X</p>"+"<p class='check' onclick='strike("+i+")'>-</p>"+"<li>"+tareas[i]+"</li>"+"<br>" ;
}

function eliminar(index) {
  tareas.splice(index, 1);
  if (localStorage.getItem("tareas") == null) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    
  } else {
    localStorage.setItem("tareas", JSON.stringify(tareas));
    CorrectoBorrado();

  }

 display();
}

function strike(index) {
  if (tareas[index].includes("<strike>")) {
    tareas[index] = tareas[index].replace("<strike>", "");
    tareas[index] = tareas[index].replace("</strike>", "");
  } else{
    tareas[index] = "<strike>" + tareas[index] + "</strike>";
   
  }
   display();
}

  function CorrectoBorrado(){
    const contenedor=document.getElementById("agregar-tarea");

    const cajaBorrado = document.createElement('div');
    
    cajaBorrado.classList.add('alert'); 
    
    cajaBorrado.appendChild(document.createTextNode("Tarea borrada correctamente"));

    document.querySelector('.contenido-principal').insertBefore(cajaBorrado, contenedor);

    setTimeout(function(){

      document.querySelector('.contenido-principal .alert').remove();
      contenedor.reset();
    },1100)
}

 function CorrectoAgregado(){
      
    const contenedor=document.getElementById("agregar-tarea");

    const cajaAgregado = document.createElement('div');
    
    cajaAgregado.classList.add('alert-success'); 
    
    cajaAgregado.appendChild(document.createTextNode("¡Tarea agregada correctamente!"));

    document.querySelector('.contenido-principal').insertBefore(cajaAgregado, contenedor);

    setTimeout(function(){

      document.querySelector('.contenido-principal .alert-success').remove();
      contenedor.reset();
    },1100)
  }


  function validacion(){

  var validar = document.getElementById("tareaInput").value;

  if(validar === ""){
  
  var newvalidar=document.createElement("p");
  newvalidar.innerHTML="Ingrese su tarea por favor";
  newvalidar.classList.add("parrafo");
  document.getElementById("error").appendChild(newvalidar);

  return false;

}else{
  document.querySelector(".parrafo").remove();
}

  }