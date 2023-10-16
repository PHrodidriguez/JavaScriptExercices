

var span = document.querySelector('.conteudo span');

span.addEventListener('click', function(){
      var conteudo =  document.querySelector('.conteudo p'); 

      if(conteudo.classList.contains('mostrar')){
        span.innerHTML = 'Leia Mais...';
        conteudo.classList.remove('mostrar');
      }else{
        span.innerHTML = 'Ver Menos...';
        conteudo.classList.add('mostrar');
      }

    });

