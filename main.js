// Crea una griglia 6x6 ad ogni click parte una richiesta ajax che prende un numero random da 1 a 9.
// Se il numero è minore di 5 il quadrato cliccato diventa giallo, se maggior di 5 diventa verde.
// Il numero ottenuto appare al centro del quadrato.


$(document).ready(function(){

// seleziona il quadrato all'interno dell'html ed esegui la funzione di callback al click
  $(".quadrato").click(function(){
// memorizza in una var lo stato del quadrato cliccato
    var squareClicked = $(this);
// memorizza in una var il valore testo iniziale del cubo selezionato
    var valoreIniziale = squareClicked.text()
    // console.log(valoreIniziale);
    // se il quadrato ha il valore iniziale nullo allora lancia la chiamata ajax
    if (valoreIniziale === "") {
      // al click del quadrato, parti con la richiesta ajax
      ajaxRequest();
    }

// funzione generica ajax
     function ajaxRequest() {
       $.ajax({

         url:"https://flynn.boolean.careers/exercises/api/random/int",
         method:"GET",
         success:function (data){
           // la richiesta è andata a buon fine, memorizza il valore in una var
           var ajaxNum = data.response;
            valoreIniziale = squareClicked.text(""+ajaxNum)
            // console.log(valoreIniziale);
           if (ajaxNum > 5) {
             squareClicked.addClass("yellow");
           } else {
             squareClicked.addClass("red");
           }

         }

       });
    }

});    // <-- fine della funzione che parte al click

});
