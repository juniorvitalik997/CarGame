let minRange = 0;
let maxRange = 2800;
function runCar(){
    $('.runRight').click(function(){
        minRange += 100
        if(minRange <= maxRange){
            let carRight = $('.car').css('margin-left',`${minRange}px`)
        }else{
            alert('кінець траси')
        }
    })
    $('.runLeft').click(function(){
        if(minRange > 0){
            minRange -= 100
            $('.car').css('margin-left',`${minRange}px`)
        }
    })
}
runCar()
let rotateCar = 0;
$('.rotateCar').click(function(){

    rotateCar += 180

    $('.car').css('transform',`rotateY(${rotateCar}deg)`)
})
function onofLight(){
        $('.onLight').click(function(){
            let allLight = $('.backLight').toggle() && $('.frontLight').toggle()
        }) 
}
onofLight()

function choseCar(){
    $('.choseCare').click(function(){
        $('.carContainer').toggle()
    })
}
choseCar()
$('.car5').click(function(){
    $('.car1').css('display','flex')
    $('.car3').css('display','none')
})
$('.car7').click(function(){
    $('.car1').css('display','none')
    $('.car3').css('display','flex')
})



let intervalId;  

$('.avarika').click(function () {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = 0
  } else {
    intervalId = setInterval(toggleBlink, 500)
  }
});


function toggleBlink() {
  $('.frontLight').toggle();
  $('.backLight').toggle();
}

