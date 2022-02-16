
import $ from 'jquery';
import {size} from 'jquery';


  function tamañoMargen() {
    size = $(".texto1" ).css("margin-top");
    size = parseInt(size, 10);
    $( ".tamanioActual" ).text(size);
  }
  
  // Obtengo el tamaño de letra inicial de 16px 
  tamañoMargen();
  
  // Función para disminuir el tamaño del texto (fuente) 
  $(".disminuir").on("click", function() {
    if ((size - 2) >= 13) {
      $(".texto1").css("margin-top", "-=2");
      $(".tamanioActual").text(size -= 1);
    }
  });
  
  // Función para aumentar el tamaño del texto (fuente) 
  $(".aumentar").on("click", function() { 
    if ((size + 2) <= 200) {
      $(".texto1").css("margin-top", "+=2");
      $(".tamanioActual").text(size += 1);
    }
  });
  
 
  