import React, { useState } from 'react';
import $ from 'jquery';
import {size , size1 ,size2} from 'jquery';
import html2canvas from 'html2canvas';

import './App.css';


function App() {

  // crear estados para cambiar las valores de las variables
  const [linea1, setlinea1] = useState('');
  const [linea2, setlinea2] = useState('');
  const [image, setimage] = useState('');



  const linea1Cambio = function (evento) {
    setlinea1(evento.target.value);
  }
  const linea2Cambio = function (evento) {
    setlinea2(evento.target.value);
  }



  const imagenCambio = function (evento) {
    setimage(evento.target.value);
  }

  const exportarArchivo = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'filename.png';
      link.href = img;
      link.click();
    });
  }


  // ----------------CAMBIO DE MARGEN-----------
  /*let size;
  let size1;
*/
  function tamañoMargen() {
    size = $(".texto1").css("margin-top");
    size = parseInt(size, 10);
    $(".tamanioActual").text(size);
  }

  // Obtengo el tamaño de letra inicial de 16px 
  tamañoMargen();

  // Función para disminuir el tamaño del texto (fuente) 
  $(".disminuir").on("click", function () {
    if ((size - 2) >= 0) {
      $(".texto1").css("margin-top", "-=2");
      $(".tamanioActual").text(size -= 1);
    }
  });

  // Función para aumentar el tamaño del texto (fuente) 
  $(".aumentar").on("click", function () {
    if ((size + 2) <= 800) {
      $(".texto1").css("margin-top", "+=2");
      $(".tamanioActual").text(size += 1);
    }
  });
  function tamañoMargen1() {
    size1 = $(".texto2").css("margin-top");
    size1 = parseInt(size1, 10);
    $(".tamanioActual2").text(size1);
  }

  // Obtengo el tamaño de letra inicial de 16px 
  tamañoMargen1();

  // Función para disminuir el tamaño del texto (fuente) 
  $(".disminuir2").on("click", function () {
    if ((size1 - 2) >= 0) {
      $(".texto2").css("margin-top", "-=2");
      $(".tamanioActual2").text(size1 -= 1);
    }
  });

  // Función para aumentar el tamaño del texto (fuente) 
  $(".aumentar2").on("click", function () {
    if ((size1 + 2) <= 800) {
      $(".texto2").css("margin-top", "+=2");
      $(".tamanioActual2").text(size1 += 1);
    }
  });
  //----------------FIN  CAMBIO DE MARGEN -----------

  // ----------------- CAMBIAR COLOR DE TEXTO
  $(".cambiar").on('click', function () {
    $(".texto1").css("color", "black");
    $(".texto2").css("color", "black");
    $(".texto1").css("text-shadow", "2px 2px 4px white");
    $(".texto2").css("text-shadow", "2px 2px 4px white");
  })

  $(".restablecer").on("click", function () {
    $(".texto1").css("color", "white");
    $(".texto2").css("color", "white");
    $(".texto1").css("text-shadow", "2px 2px 4px black");
    $(".texto2").css("text-shadow", "2px 2px 4px black");
  })
  //--------------------------- fin cambiar color------------



  //---------------AUMENTAR FUENTE------------------------

  //let size2;
// Defino un tamaño de letra inicial de 16px
function tamañoLetra() {
  size2 = $(".texto1" ).css("font-size");
  size2 = parseInt(size2, 10);
  $( ".tamañoactual" ).text(size2);
}

tamañoLetra();

$(".disminuir-fuente").on("click", function() {
  if ((size2- 2) >= 0) {
    $(".texto1").css("font-size", "-=2");
    $(".tamañoactual").text(size2 -= 1);
  }
});

$(".aumentar-fuente").on("click", function() { 
  if ((size2 + 2) <= 52) {
    $(".texto1").css("font-size", "+=2");
    $(".tamañoactual").text(size2 += 1);
  }
});


 


  //-----------------------FIN AUMENTAR FUENTE--------------


  /*onchange  recibe una funcion o codigo js  , 
  que permite  ejecutar algun tipo de accion al componente
  */
  return (
    <div className="App">
      <select onChange={imagenCambio}>
        <option value="3" key="fry">Fry Enojado</option>
        <option value="1" key="dexter">Dexter</option>
        <option value="2" key="mordekay">Mordekay</option>
        <option value="4" key="dinopensante">Dino Pensante</option>
      </select><br />


      <input onChange={linea1Cambio} type="text" placeholder='linea 1' /><br />
      <input onChange={linea2Cambio} type="text" placeholder='linea 2' /><br />

      <div class="btn-toolbar" role="toolbar" aria-label="Botones">
        <button type="button" className="disminuir "> Mover arriba texto 1</button>
        <button type="button" className="aumentar ">Mover abajo texto 1</button> <br />
        <button type="button" className="disminuir2 "> Mover arriba texto 2</button>
        <button type="button" className="aumentar2 ">Mover abajo texto 2</button> <br />
        <button type='button' className='cambiar'   >Cambiar color</button>
        <button type='button' className='restablecer'   >restablecer color</button>
        <p> Margen1: <span className='tamanioActual'></span> <span className='tamanioActual2'></span></p>


        <span className='tamañoactual'></span> <br/>
      <button type='button' className='aumentar-fuente'   >aumentar fuente</button>
      <button type="button" className="disminuir-fuente "> disminuir fuente</button>
      </div>
      <button onClick={exportarArchivo}>Exportar</button>

      <div className='meme' id='meme'>
        <span className='texto1'>{linea1}<br /> </span> <br />
        <span className='texto2'>{linea2} </span>
        <img src={"/img/" + image + ".jpg"} />
      </div>


      
    </div>
  );
}

export default App;
