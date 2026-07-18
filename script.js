const btn=document.querySelectorAll('.func');
const head=document.querySelector('#idk')
const pscore=document.querySelector('#pscore')
const bscore=document.querySelector('#bscore')
const reset=document.querySelector('.reset')

arr=['Stone','Paper','Scissor']
let game=true;
let presult=0;
let bresult=0;

if(game===true){
btn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        let ran=Math.floor(Math.random()*3);
        if(arr[ran]===e.target.innerHTML){
            head.innerHTML='You Tied'
        }
        if(arr[ran]==='Stone'&&e.target.innerHTML==='Scissor'){
            head.innerHTML='You Lose'
            bresult++
            bscore.innerHTML=bresult
        }
        if(arr[ran]==='Paper'&&e.target.innerHTML==='Stone'){
            head.innerHTML='You Lose'
            bresult++
            bscore.innerHTML=bresult
        }
        if(arr[ran]==='Scissor'&&e.target.innerHTML==='Paper'){
            head.innerHTML='You Lose'
            bresult++
            bscore.innerHTML=bresult
        }
        if(arr[ran]==='Paper'&&e.target.innerHTML==='Scissor'){
            head.innerHTML='You Win'
            presult++
            pscore.innerHTML=presult
        }
        if(arr[ran]==='Stone'&&e.target.innerHTML==='Paper'){
            head.innerHTML='You Win'
            presult++
            pscore.innerHTML=presult
        }
        if(arr[ran]==='Scissor'&&e.target.innerHTML==='Stone'){
            head.innerHTML='You Win'
            presult++
            pscore.innerHTML=presult
        }
        })
})
}
reset.addEventListener('click',function(){
    pscore.innerHTML=0;
    bscore.innerHTML=0;
    head.innerHTML="";
    presult=0;
    bresult=0;
})
