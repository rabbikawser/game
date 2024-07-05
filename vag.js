function add(sc1){
     const asbe1=document.getElementById("sc1");
     asbe1.classList.add('hidden')
}
function remove(sc2){
    const asbe2=document.getElementById('sc2');
    asbe2.classList.remove('hidden')
}
 function random(ke){
     const alfa='abcdefgsijklmnopqrstuvwnyz'
     const spt=alfa.split('');
     console.log(spt);
     const mat=Math.random();
     console.log(mat);
     const num=mat*25;
     const int=parseInt(num);
     console.log(int);
     const scrn=spt[int];
     console.log(scrn);
     
     const doc=document.getElementById('spn').innerText=scrn;
     const colour=document.getElementById(scrn);
     colour.classList.add('bg-fuchsia-600')
     console.log(ke);

     if(ke===scrn){
        console.log('pres good');
     }
 }
 