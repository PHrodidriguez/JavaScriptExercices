const turnon = document.getElementById ( 'turnon' );
const turnoff = document.getElementById ( 'turnoff');
const lampada = document.getElementById ('lampada');
function lampaon(){
    lampada.src ='lampadaon.jpg';
} 

function lampaof(){
    lampada.src = 'lampadaoff.jpg';
}
function lampbroken(){
    lampada.src = 'lampquebrada.jpg';
}

    turnon.addEventListener ('click', lampaon);
    turnoff.addEventListener ('click',lampaof); 
    lampada.addEventListener ('mouseover', lampaon);
    lampada.addEventListener ('mouseleave', lampaof);
    lampada.addEventListener ('auxclick',lampbroken);

 