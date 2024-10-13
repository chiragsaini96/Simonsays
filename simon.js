let box = document.querySelectorAll('.box');
let container = document.querySelector('.box_container');
let red=document.querySelector('#red');
let green=document.querySelector('#green');
let yellow=document.querySelector('#yellow');
let blue=document.querySelector('#blue');
let start = document.querySelector('.heading button');
let change = document.querySelector('.heading h2');
let played = document.querySelector('.heading h4')

start.addEventListener('click',start_the_game);
start.addEventListener('click',()=>{
    start.remove();
})
function start_the_game(){
    let str_first=[];
    let str_second=[];
    container.addEventListener('click',know_about);
    function know_about(event){
        let box_or_not=event.target.nodeName;
        if(box_or_not=='BUTTON'){
            let which_box=[event.target.id];
            str_second=str_second.concat(which_box);
            console.dir(str_second);
            played.innerHTML=`you have choosen ${str_second.length}/${str_first.length}` 
        }
    }
    repeat();
    function repeat(){
            played.innerHTML=`you have choosen ${str_second.length}/${str_first.length}` 
            console.log(str_first.length)
            console.dir(str_first);
            console.log(str_second.length)
            console.dir(str_second);
            setTimeout( ()=>{            
                if(str_first.length!=str_second.length){
                    if(str_first.length>str_second.length){
                        repeat();
                    }
                    else{
                        change.innerHTML="you clicked more than the desired number so the game restarted <br> Level 1";
                        str_first=[];
                        str_second=[];
                        repeat();
                    }
                }
                else {
                    function compare(){
                        let count=0;
                        for(let i=0;i<str_first.length;i++){
                            if(str_first[i]===str_second[i]){
                                count++;
                            }
                        }
                        if(count==str_first.length){
                            return false;
                        }
                        else{
                            return true;
                        }
                        
                    }
                    if(compare()){
                        change.innerHTML="incorrect! the game restarted <br> Level 1"
                        str_first=[];
                        str_second=[];
                        repeat();
                    }
                    else{
                        if(str_first.length>=1){
                            change.innerHTML="correct! \n you are in <br> level "+ (str_first.length+1);
                        }
                        str_second=[];
                        which_one();
                        repeat();
                    }
                } 
            },2000)
            function which_one(){
                console.log("yes");
                let ran_num= Number(Math.floor(Math.random()*4+1));
                if(ran_num==1){
                    let color=red;
                    glow(color);
                    str_first=str_first.concat(['red']);
                }
                else if(ran_num==2){
                    let color=green;
                    glow(color);
                    str_first=str_first.concat(['green']);
                }
                else if(ran_num==3){
                    let color=yellow;
                    glow(color);
                    str_first=str_first.concat(['yellow']);  
                }
                else if(ran_num==4){
                    let color=blue;
                    glow(color);
                    str_first=str_first.concat(['blue']);  
                }
                function glow(color){
                    let sparkel=setInterval(()=>{
                        color.classList.toggle('opacity');
                    },500)
                    setTimeout(()=>{
                        clearInterval(sparkel)
                    },1000)
                }
            }
    }
        
}
