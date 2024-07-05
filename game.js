  function evn(event){
    
    const ke=event.key;   
     const doc=document.getElementById("spn").innerText;
       random(ke);
       console.log(doc);
       console.log(ke);
       const remov=document.getElementById(doc);
        remov.classList.remove('bg-fuchsia-600')
        
        if(doc===ke){
       
        const val=document.getElementById('scor').innerText;
         
         const inte=parseInt(val);
        // console.log(typeof(inte));
        console.log("good press");
        const newscor=inte+1;
        console.log(newscor);
        const vali=document.getElementById('scor').innerText=newscor;
        document.getElementById('scr1').innerText=newscor;
         
       }
       else{

        console.log('bad press');
        const life=document.getElementById('life').innerText;
        const scor=document.getElementById('scor').innerText;
        const newlife=parseInt(life);
        const newscor=parseInt(scor);
        console.log(newlife,newscor);
        newnewlife=life-1;
        document.getElementById('life').innerText=newnewlife;
        const abar=document.getElementById('life').innerText;
        const prts=parseInt(abar)
        if(abar<1){
          console.log("gelo sob");


          function add(){
            const asbe1=document.getElementById("sc2");
            asbe1.classList.add('hidden')
       }
       function remove(){
           const asbe2=document.getElementById('sc3');
           asbe2.classList.remove('hidden')
          
          
        }

        add();
        remove();


       }
  }
}
 document.addEventListener('keyup',evn)
function section1(){
    // const sc1=document.getElementById('sc1');
    //  console.log(sc1);
    //  sc1.classList.add('hidden')
    //  const sc2=document.getElementById('sc2');
    // sc2.classList.remove('hidden');
    add(sc1);
    remove(sc2);
    random();
}
 function playagain(){

  const life=document.getElementById('life').innerText='5';
        const scor=document.getElementById('scor').innerText='0';
        console.log(life,scor);
  function add(){
    const asbe1=document.getElementById("sc3");
    asbe1.classList.add('hidden')

}
function remove(){
   const asbe2=document.getElementById('sc2');
   asbe2.classList.remove('hidden')
  
  
}

add();
remove();
        
 }
