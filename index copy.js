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
      document.querySelector(".hijito").style.display = "block";
}

function guardar(event)
{
  let titulo = document.getElementById("size_1").value;
  let entrada = document.getElementById("size_2").value;
  let headd = []
  let desc = []
  console.log(entrada)
  desc.push(entrada)
  headd.push(titulo)
  console.log(desc)
  localStorage.setItem("desc", JSON.stringify(desc))
  localStorage.setItem("headd", JSON.stringify(headd))
  renderisar()
}

function renderisar()
{
  let agregarcont = document.getElementById("contenido_tareas")
  let dc = JSON.parse(localStorage.getItem("desc"))
  let hed = JSON.parse(localStorage.getItem("headd"))

  hed.forEach(element =>{
    document.querySelector(".temp").style.display = "none"
    agregarcont.innerHTML += `
    <h3>${element}</h3>`
  })

  dc.forEach(element => {
    agregarcont.innerHTML += `
    <p>${element}</p>`
    agregarcont.innerHTML += `<input type="button" value="borrar" onclick="eliminar()">`
  });

  ocultar();
}

function eliminar(){
  let cd = document.getElementById("size_1").value
  let hed = JSON.parse(localStorage.getItem("headd"))
  let headd = []
  
  console.log(cd)
  dc.splice(0)
}

function ocultar(){
  document.querySelector(".hijito").style.display = "none";
  document.getElementById("cud").reset()
  
}