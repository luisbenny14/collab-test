function calzones(){
    var pregunta = {
      question: '¿Que calzon traigo hoy?',
      answers: ['calzon rojo', 'calzon azul','calzon rosa'],
      correct: 1
    }
      caracoles(pregunta);
      $('button').on('click', function(){
         var selection = $('input[name=answer]:checked').val();
    var correcto = false;
    if(selection === "calzon azul"){
      correcto = true;
    }
        $('p').html(correcto ? "Correcto":"Perdedoorrr")
    });
    }   
    function caracoles(pregunta){
      $('label').text(pregunta.question);
      $('#text1').text(pregunta.answers[0])
      $('#input1').val(pregunta.answers[0])
        $('#text2').text(pregunta.answers[1])
      $('#input2').val(pregunta.answers[1]) 
      $('#text3').text(pregunta.answers[2])
      $('#input3').val(pregunta.answers[2])
    }
    
    $(calzones)