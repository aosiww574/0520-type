// var swiper = new Swiper('.swiper-container .s1', {
var ss = new Swiper('.ss', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  clickable: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination 的style

  pagination: {
    el: '.ss .swiper-pagination',
    clickable: true,
    // bulletClass: 'my-bullet',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// 滑鼠覆蓋停止自動切換
// swiper.el.onmouseover = function () {
//   swiper.autoplay.stop()
// }

// // 滑鼠離開開始自動切換
// swiper.el.onmouseout = function () {
//   swiper.autoplay.start()
// }

// pagination 點選設定
// for (i = 0; i < swiper.pagination.bullets.length; i++) {
//   swiper.pagination.bullets[i].onmouseover = function () {
//     this.click()
//   }
// }

var swiperdd = new Swiper('.dd', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  clickable: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  // pagination 的style

  pagination: {
    el: '.dd .swiper-pagination',
    clickable: true,
    // bulletClass: 'my-bullet',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

// 滑鼠覆蓋停止自動切換
swiperdd.el.onmouseover = function () {
  swiperd.autoplay.stop()
}

// 滑鼠離開開始自動切換
swiperdd.el.onmouseout = function () {
  swiperd.autoplay.start()
}

// pagination 點選設定
// for (i = 0; i < swiper.pagination.bullets.length; i++) {
//   swiper.pagination.bullets[i].onmouseover = function () {
//     this.click()
//   }
// }

// 全畫面
var x = document.querySelector('.x')
x.addEventListener('click', function () {
  var as = document.querySelector('.all-screen')
  as.parentNode.removeChild(as)
})

// 計數器
var numberOfbouns = 1687368
setInterval(() => {
  //   Calculation()
  var million = document.getElementById('million')
  var hThousand = document.getElementById('hThousand')
  var tenThousand = document.getElementById('tenThousand')
  var thousand = document.getElementById('thousand')
  var hundreds = document.getElementById('hundreds')
  var tens = document.getElementById('tens')
  var digits = document.getElementById('digits')

  let random = getRandomNumber(0, 3000)
  numberOfbouns += random

  Nmillion = Math.floor(numberOfbouns / 1000000)
  NhThousand = Math.floor((numberOfbouns - Nmillion * 1000000) / 100000)
  NtenThousand = Math.floor(
    (numberOfbouns - Nmillion * 1000000 - NhThousand * 100000) / 10000
  )
  Nthousand = Math.floor(
    (numberOfbouns -
      Nmillion * 1000000 -
      NhThousand * 100000 -
      NtenThousand * 10000) /
      1000
  )

  Nhundreds = Math.floor(
    (numberOfbouns -
      Nmillion * 1000000 -
      NhThousand * 100000 -
      NtenThousand * 10000 -
      Nthousand * 1000) /
      100
  )

  Ntens = Math.floor(
    (numberOfbouns -
      Nmillion * 1000000 -
      NhThousand * 100000 -
      NtenThousand * 10000 -
      Nthousand * 1000 -
      Nhundreds * 100) /
      10
  )

  Ndigits = parseInt(numberOfbouns % 10)

  digits.style.transform = `translate(-50%, -${Ndigits * 10}%)`
  tens.style.transform = `translate(-50%, -${Ntens * 10}%)`
  hundreds.style.transform = `translate(-50%, -${Nhundreds * 10}%)`
  thousand.style.transform = `translate(-50%, -${Nthousand * 10}%)`
  tenThousand.style.transform = `translate(-50%, -${NtenThousand * 10}%)`
  hThousand.style.transform = `translate(-50%, -${NhThousand * 10}%)`
  million.style.transform = `translate(-50%, -${Nmillion * 10}%)`
}, 2000)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


$('#slideshow > div:gt(0)').hide()

setInterval(function () {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow')
}, 3000)