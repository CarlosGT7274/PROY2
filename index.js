document.querySelector(".submit").addEventListener("mouseover", () => {
  document.querySelector(".submit").style.background = "#E6B90D";
});

document.querySelector(".submit").addEventListener("mouseout", () => {
  document.querySelector(".submit").style.background = "#67C1EC";
});

document.querySelector(".submit").addEventListener("mouseover", () => {
  document.querySelector(".imj").style.visibility = "visible";
});

document.querySelector(".submit").addEventListener("mouseout", () => {
  document.querySelector(".imj").style.visibility = "hidden";
});

const contenedor = document.querySelector(".cuerpo");

function formulario() {
  document.querySelector(".hijito").style.display = "block";
}

let titulo = document.getElementById("size_1");
let descrip = document.getElementById("size_2");

let verificacion = "";

function guardar() {
  if (verificacion !== "") {
    editar();
    verificacion = "";
    return;
  }

  let headd = {
    id: Date.now(),
    titulo: titulo.value,
    descrip: descrip.value,
  };

  let formu = JSON.parse(localStorage.getItem("escrito"))
    ? JSON.parse(localStorage.getItem("escrito"))
    : [];
  console.log(headd);
  formu.push(headd);
  console.log(formu);
  console.log(JSON.stringify(formu));
  localStorage.setItem("escrito", JSON.stringify(formu));

  document.getElementById("size_2").value = "";
  document.getElementById("size_1").value = "";

  renderisar();
}

let agregarcont = document.getElementById("contenido_tareas");

//DELEGACION DE EVENTOS

agregarcont.addEventListener("click", (e) => {
  console.log(e.target.dataset.id)
  if (e.target.matches(".editar")) {
    titulo.value = e.target.parentElement.children[0].textContent;
    descrip.value = e.target.parentElement.children[1].textContent;
    formulario();
    verificacion = e.target.dataset.id;
    return;
  }
});

function renderisar() {
  console.log(localStorage.getItem("usuarios"));
  let agregarcont = document.getElementById("contenido_tareas");
  let formu = JSON.parse(localStorage.getItem("escrito"))
    ? JSON.parse(localStorage.getItem("escrito"))
    : [];
  agregarcont.innerHTML = "";
  console.log(formu);

  formu.forEach((index) => {
    agregarcont.innerHTML += `
    <div>
    <h3 id="editar" class="mismo">${index.titulo}</h3>
    <p class="mismo">${index.descrip}</p>
    <button onclick="eliminar(${index.id})" class="xddd">eliminar</button>
    <button class="kk editar" data-id=${index.id}>editar</button>
    </div>`;
  });
  ocultar();
}

renderisar();

function eliminar(id) {
  //me trae los elementos del local storage
  const getdata = JSON.parse(localStorage.getItem("escrito"));
  //nos filtra, y devulve todos los elemetos del local storage que sean diferentes al id que le estoy enviando COMO TAL EXCLUYE DEJANDO TODO MENOS LO QUE COINCIDE
  let filterdata = getdata.filter((parametro) => parametro.id !== Number(id));
  console.log(filterdata);
  //INSErta el nuevo dato con los elemntos que ya excluyo
  localStorage.setItem("escrito", JSON.stringify(filterdata));
  //me muetra el html con las coassa
  renderisar();
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

function editar() {
  ///CREO UN NUEVO OBJETO
  let headd = {
    id: Date.now(),
    titulo: titulo.value, //CAPTURA EL VALOR DEL FORM
    descrip: descrip.value,
  };

  if (titulo.value === "" && descrip.value === "") {
    alert("campos vacios");
    return;
  }
  const getdata = JSON.parse(localStorage.getItem("escrito")); //INSERTANTO/RECUPERANDO LOS DATOS
  let ub = getdata.map((item) =>
    item.id === parseInt(verificacion) ? headd : item
  ); //SI CONINCIDE REMPLAZA EL OBJETO ENCONTARDO POR EL QUE TENGO
  localStorage.setItem("escrito", JSON.stringify(ub)); //INSERTA EL NUEVO DATO
  renderisar();
}

function ocultar() {
  document.querySelector(".hijito").style.display = "none";
  document.getElementById("cud").reset();
}
const valor = document.querySelector(".mismo");
console.log(valor);

/* function seteditable(element){

  edit.contentEditable = "true";
  edit.setAttribute("contenteditable", "true")
  console.log('editable')
} */
