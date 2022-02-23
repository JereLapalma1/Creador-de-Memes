import React, { useState } from 'react';
import $ from 'jquery';
import html2canvas from 'html2canvas';
import { Button, Form, FloatingLabel, Image, Container } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'


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
  $(".disminuir").on("click", function () {$(".texto1").css("margin-top", "-=1");});

  $(".aumentar").on("click", function () {$(".texto1").css("margin-top", "+=1");});
  $(".disminuir2").on("click", function () {$(".texto2").css("margin-top", "-=1");});

  $(".aumentar2").on("click", function () {$(".texto2").css("margin-top", "+=1");});
  //----------------FIN  CAMBIO DE MARGEN -----------

  // ----------------- CAMBIAR COLOR DE TEXTO
  $(".cambiar").on('click', function () {$(".texto1").css("color", "black");$(".texto2").css("color", "black");$(".texto1").css("text-shadow", "2px 2px 4px white");$(".texto2").css("text-shadow", "2px 2px 4px white");})

  $(".restablecer").on("click", function () {$(".texto1").css("color", "white");$(".texto2").css("color", "white");$(".texto1").css("text-shadow", "2px 2px 4px black");$(".texto2").css("text-shadow", "2px 2px 4px black");})
  //--------------------------- fin cambiar color------------



  //---------------AUMENTAR FUENTE------------------------
  $(".disminuir-fuente").on("click", function () {$(".texto1").css("font-size", "-=1");});

  $(".aumentar-fuente").on("click", function () {$(".texto1").css("font-size", "+=1");});

  $(".disminuir-fuente2").on("click", function () {$(".texto2").css("font-size", "-=1");});

  $(".aumentar-fuente2").on("click", function () {$(".texto2").css("font-size", "+=1"); });
  //-----------------------FIN AUMENTAR FUENTE--------------
/*onchange  recibe una funcion o codigo js  , 
que permite  ejecutar algun tipo de accion al componente
*/
  return (

    <Container fluid className='pe-2 ps-2 pt-2 pb-2 shadow-lg'>

      <div className="App bg-dark pt-4">
        <div className='container mt-4 p-0'>
          <Form.Select size="sm" className='bg-light' onChange={imagenCambio}>
            <option value="3" key="fry">Fry Enojado</option>
            <option value="1" key="dexter">Dexter</option>
            <option value="2" key="mordekay">Mordekay</option>
            <option value="4" key="dinopensante">Dino Pensante</option>
          </Form.Select><br />



          <FloatingLabel controlId="floatingTextarea" label="Linea 1" className="linea1 mb-3">
            <Form.Control as="textarea" onChange={linea1Cambio} placeholder="linea 1" />
            <div className='row' >
              <div className='col-lg-2  col-md-2 col-sm-2 p-0'>
                <Button type="button" variant="danger" className="disminuir mt-2 me-2 btn-sm "  ><box-icon name='up-arrow-alt'></box-icon></Button>
                <Button type="button" variant="danger" className="aumentar mt-2 btn-sm "><box-icon name='down-arrow-alt' ></box-icon></Button> <br />
              </div>
              <div className='col-lg-2  col-md-2 col-sm-2'>
                <Button type='button' variant="danger" className='aumentar-fuente btn-sm mt-2 ps-1 text-dark fw-bold'   ><box-icon name='font-size'></box-icon>+</Button>
                <Button type="button" variant="danger" className="disminuir-fuente btn-sm mt-2 text-dark fw-bold"><box-icon name='font-size'></box-icon>-</Button>
              </div>
              <div className='col-lg-2  col-md-2 col-sm-2'>
               <Button type='button' variant="danger" className='cambiar btn-sm mt-2 ps-1 ms-3 me-4'   ><box-icon name='font-color'></box-icon></Button>
               <Button type='button' variant="danger" className='restablecer btn-sm mt-2 '   ><box-icon name='font-color'></box-icon></Button>
              </div>
            </div>

          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea" label="Linea 2" className="mb-3">
            <Form.Control as="textarea" onChange={linea2Cambio} placeholder="linea 2" />

            <div className='row' >
              <div className='col-lg-2  col-md-2 col-sm-2'>
                <Button type="button" variant="danger" className="disminuir2 mt-2 me-2 btn-sm " ><box-icon name='up-arrow-alt'></box-icon></Button>
                <Button type="button" variant="danger" className="aumentar2 mt-2 btn-sm "><box-icon name='down-arrow-alt' ></box-icon></Button> <br />
              </div>
              <div className='col-lg-2  col-md-2 col-sm-2'>
                <Button type='button' variant="danger" className='aumentar-fuente2 btn-sm mt-2 ps-1 ms-3 me-4 text-dark fw-bold'   ><box-icon name='font-size'></box-icon>+</Button>
                <Button type="button" variant="danger" className="disminuir-fuente2 btn-sm mt-2 text-dark fw-bold"><box-icon name='font-size'></box-icon>-</Button>

              </div>
              <div className='col-lg-2  col-md-2 col-sm-2'>
               <Button type='button' variant="danger" className='cambiar btn-sm mt-2 ps-1 ms-3 me-4'   ><box-icon name='font-color'></box-icon></Button>
               <Button type='button' variant="danger" className='restablecer btn-sm mt-2 '   ><box-icon name='font-color'></box-icon></Button>
              </div>
            </div>

          </FloatingLabel>

        </div>


        <Button variant="success" onClick={exportarArchivo} className="mt-2 ">Exportar</Button>

        <div className='meme' id='meme'>
          <span className='texto1'>{linea1}<br /> </span> <br />
          <span className='texto2'>{linea2} </span>
          <Image className='thumbnail border border-2  mb-3 ' src={"/img/" + image + ".jpg"} />
        </div>



      </div>
    </Container>

  );
}

export default App;
