const firstinput = document.getElementById('1text');
const secondinput = document.getElementById('2text');
const thirdinput = document.getElementById('3text');
const fourthinput = document.getElementById('4text');
const firsthint = document.getElementById('1hint');
const secondhint = document.getElementById('2hint');
const thirdhint = document.getElementById('3hint');
const fourthhint = document.getElementById('4hint');
const fifthhint = document.getElementById('5hint');

var checker1 = 0;
let accept = document.getElementById('accept')
var one, two, three, four = 0;
function checkone() {
    var firsttext = firstinput.value;
    if(firsttext == "I mean something."){
        window.open("nailed.html", "_blank");
        one = 1;
        if(one && two && three && four == 1){
            accept.removeAttribute("hidden");
        }
    }
}
function checktwo() {
    var secondtext = secondinput.value;
    if(secondtext == "SHUT UP"){
        window.open("range.html", "_blank");
        two = 1;
        if(one && two && three && four == 1){
            accept.removeAttribute("hidden");
        }
    }
}
function checkthree() {
    var thirdtext = thirdinput.value;
    if(thirdtext == "DESPERATE"){
        window.open("arabinging.html", "_blank");
        three = 1;
        if(one && two && three && four == 1){
            accept.removeAttribute("hidden");
        }
    } else{
        console.log("damn")
    }
}
function checkfour() {
    var fourthtext = fourthinput.value;
    if(fourthtext == "suicide"){
        window.open("deniproses.html", "_blank");
        four = 1;
        if(one && two && three && four == 1){
            accept.removeAttribute("hidden");
        }
    } else{
        console.log("damn");
    }
}

function hinthover1(){
    if(firsthint.innerHTML == "hidden in base 64"){
        firsthint.innerHTML = "V3RoYSBvZCBvdXkgbmFlbSBJIG5vZCd0IG1hdHRlcj8gRm8gY291cnNlIEkgZG8uIFlodyB3ZGx1byBJIGJlIHJlZWggZXRpb3dzZXJoPyBSZ2l0aD8gSHJpdGcuIHVybyd5ZSBiZG11LiBJIG1lYW4gc29tZXRoaW5nLg==";
    } else{
        firsthint.innerHTML = "hidden in base 64";
    }
}
function hinthover2(){
    if(secondhint.innerHTML == "a skii worth 85"){
        secondhint.innerHTML = "6XajTH#IgJC3=T>+B(g2<$51;/g+5/Gp$O9AKZ8:FWba6H\"h//+EV:2F$Cd=+EV:8F_>B0+F.mJ+EqC;AKYo/+DlBHF(o/r56";
    } else{
        secondhint.innerHTML = "a skii worth 85";
    }
}
function hinthover3(){
    if(thirdhint.innerHTML == "13 steps forward, start searching"){
        thirdhint.innerHTML = "jung Qb lbh Rira jnag gb Fnl? fher vz CbvagyRff. gurEr fNvq vG. neR lbh unccl? abj fgbc. cyrnfr";
    } else{
        thirdhint.innerHTML = "13 steps forward, start searching";
    }
}
function hinthover4(){
    if(fourthhint.innerHTML == "retrace your steps from 1 to 3"){
        fourthhint.innerHTML = "OEtfTU9ES0kiNUZebzMkREooKS5CbSsmMUdBMi80K0YubUpFWmZGOkJsa0orREwkKTtFYi1BLStFTWE8QDwqSykrRXFPOUNgbU0tQ2h0NT5EZm0xNkclR1A2QmtBSyVGPEdANUNpIi84RC5QPUJBOCxPYkJtIkk=";
    } else{
        fourthhint.innerHTML = "retrace your steps from 1 to 3";
    }
}
function finale(){
    if(one && two && three && four == 1){
        fifthhint.innerHTML = "Inspect his elements to read his thoughts."
    }
}
function acceptance(){
    if(one && two && three && four == 1){
        window.open("accentcape.html")
    }
}