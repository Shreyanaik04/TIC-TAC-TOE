let buttons = document.querySelectorAll('.btn')
let msg = document.querySelector('.msg')
let reset = document.getElementById('reset')

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


buttons.forEach ((btn)=>{
    btn.addEventListener("click", () => {
        if(turn){
            btn.innerText = "X"
            turn = false;
        }else{
            btn.innerText = "O"
            turn = true;
        }
        btn.disabled=true; 
        
        checkwinners();
    });
})


const checkwinners=()=>{
    for(let pattern of winPatterns){
            let pos1 = buttons[pattern[0]].innerText;
            let pos2 = buttons[pattern[1]].innerText;
            let pos3 = buttons[pattern[2]].innerText ;
            if(pos1 != "" && pos2 !="" && pos3!=""){
                if(pos1==pos2 && pos2==pos3){
                    msg.innerText = "Winner is "+pos1;
                    msg.style.display = "block"
                }
            }
    }
}

reset.addEventListener("click",()=>{
    location.reload();
})