
const timer = document.querySelector(".timer");
const btn6 = document.querySelector(".btn-6");
const btn4 = document.querySelector(".btn-4");
const btn3 = document.querySelector(".btn-3");
const btn1 = document.querySelector(".btn-1");
const starter = document.querySelector(".starter");


// 전역변수 세팅

let m_6 = 360; 
let m_4 = 240;
let m_3 = 180;
let m_1 = 60;

let min;
let sec;
let num;
let IntervalId;



const defaultMin = "00";
const defaultSec = "00";


// 시간 설정 버튼

btn6.addEventListener("click",click6);
btn4.addEventListener("click",click4);
btn3.addEventListener("click",click3);
btn1.addEventListener("click",click1);


// 시작버튼 누르면 시작
starter.addEventListener("click",timer_start);

// 전역변수 초기화

function reset() {
    let m_6 = 360; 
    let m_4 = 240;
    let m_3 = 180;
    let m_1 = 60;
    let min;
    let sec;
    let num;
    if(IntervalId){
        clearInterval(IntervalId)
    };
};

// 타이머시작

function timer_start() {

    if(num===undefined){
        alert('타이머 설정 필요')
        
    }else{
        IntervalId = setInterval(function(){
            num--
            min = parseInt((num)/60);
            sec = num%60;
            timer.innerHTML= write();
            if(num<0){
                clearInterval(IntervalId)
                alert('끝!!')
            }
        },1000)
    }
    
};



// 전역변수/html 세팅

function setting(number) {
    num = number
    min = parseInt((num)/60);
    sec = num%60;
    timer.innerHTML= write();
};



//시간 설정

function click6() {
    reset();
    setting(m_6);
};
function click4() {
    reset();
    setting(m_4);
};
function click3() {
    reset();
    setting(m_3);
};
function click1() {
    reset();
    setting(m_1);
};

// html 수정
function write() {
    return sec<10 ? `0${min} : 0${sec}` : `0${min} : ${sec}`
}
// 초기화면 설정

function init() {
    timer.innerHTML = `${defaultMin} : ${defaultSec}`
};

init();