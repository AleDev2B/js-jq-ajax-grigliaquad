// Crea una griglia 6x6 ad ogni click parte una richiesta ajax che prende un numero random da 1 a 9.
// Se il numero è minore di 5 il quadrato cliccato diventa giallo, se maggior di 5 diventa verde.
// Il numero ottenuto appare al centro del quadrato.


$(document).ready(function(){
// seleziona il quadrato all'interno dell'html e attiva il monitoraggio al click
  $(".quadrato").click(function(){

    var squareClicked = $(this);
// al click del quadrato, parti con la richiesta ajax
      $.ajax({

        url:"https://flynn.boolean.careers/exercises/api/random/int",
        method:"GET",
        success:function (data){
          // la richiesta è andata a buon fine, memorizza il valore in una var
          var ajaxNum = data.response;
          squareClicked.text(""+ajaxNum)
          if (ajaxNum > 5) {
            squareClicked.addClass("yellow");
          } else {
            squareClicked.addClass("red");
          }
          // console.log(ajaxNum);
        }

      });



  });

});
