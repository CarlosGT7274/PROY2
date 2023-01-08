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

function guardar()
{
  let titulo = document.getElementById("size_1").value;
  let descrip = document.getElementById("size_2").value;

  let headd = ({
    "titulo": titulo,
    "descrip": descrip
  })

 let formu = JSON.parse(localStorage.getItem('escrito')) ? JSON.parse(localStorage.getItem('escrito')) : []
  console.log(headd)
  formu.push(headd)
  console.log(formu)
  console.log(JSON.stringify(formu))
  localStorage.setItem("escrito", JSON.stringify(formu))

  document.getElementById("size_2").value = ''
  document.getElementById("size_1").value = ''

  renderisar()
}

function renderisar()
{
  
  console.log(localStorage.getItem('usuarios'))
  let agregarcont = document.getElementById("contenido_tareas")
  let formu = JSON.parse(localStorage.getItem('escrito')) ? JSON.parse(localStorage.getItem('escrito')) : 
  []
  agregarcont.innerHTML = ''
  console.log(formu)

  formu.forEach(element =>{
    
    agregarcont.innerHTML += `
    <h3>${element.titulo}</h3>
    <p>${element.descrip}</p>
    <input type="button" value="borrar"  onclick="eliminar()" class="xddd">`
    
  })
  ocultar();
}

renderisar()

function eliminar(){
  let agregarcont = document.getElementById("contenido_tareas")
  let formu = JSON.parse(localStorage.getItem('escrito')) ? JSON.parse(localStorage.getItem('escrito')) : 
  []
  console.log(formu)
  let eliminado = formu.splice(0, 1, ' ')
 
 
  guardar()
  console.log(formu)
 

}



function ocultar(){
  document.querySelector(".hijito").style.display = "none";
  document.getElementById("cud").reset()
  
}

