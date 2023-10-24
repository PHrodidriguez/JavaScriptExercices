function teste(){
   return new Promise(function(resolve,reject){
setTimeout(function(){
    const erro =false;
    if(erro){
        reject('Erro..');
    }else{
        resolve("A promise foi resolvida cm sucesso!!!")
    }
   },2000 )
})};



   teste().then(function(res){
    alert(res);    
   }).catch(function(err){
    alert(err);
   });


   async function teste2(){
    await teste();
    alert('oi');

   };

   teste2();
