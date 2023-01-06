document.querySelector(".submit").addEventListener("mouseover",()=> {
   document.querySelector(".submit").style.background = "#E6B90D";
});

document.querySelector(".submit").addEventListener("mouseout",()=> {
    document.querySelector(".submit").style.background = "#67C1EC";
 });

 document.querySelector(".submit").addEventListener("mouseover",()=> {
    document.querySelector(".imj").style.visibility = "visible";
 });
 
document.querySelector(".submit").addEventListener("mouseout",()=> {
     document.querySelector(".imj").style.visibility = "hidden";
  });

const contenedor = document.querySelector(".cuerpo")

function formulario()
{
      contenedor.innerHTML += `<div class="hijito">
      <form class="cuerpo">
      <fieldset>
        <legend>Agregar recordatorio o tarea</legend>
        <p>
          <label for="size_1">titulo: <br></label>
          <input type="text" id="size_1" placeholder="Max. 50 caracteres." maxlength="50" size="45">
        </p>
        <p>
          <label for="size_1">Descripcion: <br></label>
          <input type="text" id="size_2" placeholder="Max. 500 caracteres." maxlength="500" size="45">
        </p>
        <p>
          <input type="button" id="juan" value="Agregar" id="botoncito" onclick="guardar()">
        </p>
      </fieldset>
  </form>
  </div>`
}

function guardar()
{
  let entrada = document.getElementById("size_2").value;
  
  let desc = []
  console.log(entrada)
  desc.push(entrada)
  console.log(desc)
  localStorage.setItem("desc", JSON.stringify(desc))
  renderisar()
}

function renderisar()
{
  let agregarcont = document.getElementById("contenido_tareas")
  let dc = JSON.parse(localStorage.getItem("desc"))

  dc.forEach(element => {
    document.querySelector(".temp").style.display = "none";
    document.querySelector(".cuerpo").style.display ="none";
    agregarcont.innerHTML += `
    <p>${element}</p>`
  });
}

