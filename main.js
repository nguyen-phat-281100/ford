let navs = document.getElementsByClassName('list__item')
let lists = document.getElementsByClassName('listCar')
let show = false
let lastNav 
$('.list__item').on('click', (event)=>{
    for(var i = 0; i < navs.length; i ++){
        if(navs[i] == event.target){
            navs[i].classList.add('listActive')
        }else{
            navs[i].classList.remove('listActive')
        }
    }
    if(lastNav && $(lastNav).data('id') == $(event.target).data('id') && show){
        let list__listCar = document.querySelector('.list__listCar')
        $(list__listCar).css({
            'transform': "translateY(-100%)"
        })
        show = false
        event.target.classList.remove('listActive')
    }else{
        let id = $(event.target).data('id')
        // console.log(id)
        let list__listCar = document.querySelector('.list__listCar')
        $(list__listCar).css({
            'transform': "translateY(0%)"
        })
        
        for(var i = 0; i < lists.length ;i++){
            if(lists[i].id == id){
                $(lists[i]).css({
                    'transform': "translateY(0%)",
                    "z-index" : 2,
                    "display": "flex"
                })
            }else{
                $(lists[i]).css({
                    'transform': "translateY(-100%)",
                    "z-index" : 1,
                    "display": "none"
                })
            }
        }
        show = true
    }
    lastNav = event.target
})

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st < lastScrollTop && st >= ($(window).height())/2) {
    let header = document.getElementsByTagName('header')
    $(header).css({
        "transform":"translateY(-100%)"
    })
  } else {
    let header = document.getElementsByTagName('header')
    $(header).css({
        "transform":"translateY(0%)"
    })
  }
  lastScrollTop = st;
});