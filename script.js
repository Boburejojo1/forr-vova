$(document).ready(function () {
    $('.bbbb').click(function (e) { 
        let scor = 0
let srr = prompt(`хто твій кращий друг "Напиши ім'я з великої букви на укр"`)
if(srr == 'Боря'){
    alert('Da')
 scor++
} else{
    alert('no')
}
let ol = prompt(`якого числа в мене др "Напиши тільки число"`)
if(ol == 6){
    alert('Da')
 scor++
} else{
    alert('no')
}
let hleb = prompt(`що приносив в підвал чорний негр"з великої букви на укр"`)
if(hleb = 'Хліб'){
    alert('Da')
 scor++
} else{
    alert('no')
}
let ball = alert('це твої балли: ' + scor + ', 2 рівень:')

let comf = confirm(`ми познайомилися в першому класі ? 'типа да чи не'`)
 if (comf) {
    for(let i = 1;i < 12;i--){
        console.log('не, ще до нього')
    }
 } else{
    alert('як так')
    for(let i = 1;i < 12 ;i--){
        console.log('так ще до нього')
 }
 }
let rr = prompt('хто крім мене та тебе признавався Марті в відчуттях в 2 чи 1 класі')
    });
});