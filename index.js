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
    id: Date.now(),
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
    <h3 id="editar" class="mismo">${element.titulo}</h3>
    <p class="mismo">${element.descrip}</p>
    <input type="button" value="borrar"  onclick="eliminar(${element.id})" class="xddd">`
    
  })
  ocultar();
}

renderisar()

function eliminar(item){
  
let agregarcont = document.getElementById("contenido_tareas")
const getdata = JSON.parse(localStorage.getItem('escrito'))
let filterdata = getdata.filter(parametro => parametro.id!==Number(item))
console.log(filterdata)
localStorage.setItem("escrito", JSON.stringify(filterdata))
renderisar()

  //let formu = JSON.parse(localStorage.getItem('escrito')) ? JSON.parse(localStorage.getItem('escrito')) : 
  //[]
  //console.log(formu)
//
  //formu.splice(formu, 1)
//
  //localStorage.removeItem("escrito")
//
  //agregarcont.innerHTML = ''
  //console.log(formu)
}



function ocultar(){
  document.querySelector(".hijito").style.display = "none";
  document.getElementById("cud").reset()
  
}
const valor =  document.querySelector(".mismo")
console.log(valor)

function seteditable(element){

  edit.contentEditable = "true";
  edit.setAttribute("contenteditable", "true")
  console.log('editable')
}