$(document).ready(function() {
  $('.color-btn').on('mouseover', function() {
    var color = $(this).attr('haha');
    $('table').toggleClass(color)
  })
  $('.color-btn').on('mouseout', function() {
    var color = $(this).attr('haha');
    $('table').toggleClass(color)
  })
})


// // console.log(document.querySelector('.color-btn')); #하나만 리턴
// var btns = document.querySelectorAll('.color-btn');
// // console.dir(btns);
// for(var i=0; i<btns.length; i++) {
//   // console.dir(btns[i]);
//   // 이벤트 리스너        //이벤트 핸들러
//   btns[i].onmouseover = function() {
//     // console.log(this);
//     var haha = this.getAttribute('haha');
//     var table = document.getElementsByTagName('table')[0];
//     // console.log(table)
//     table.setAttribute('class', "table table-hover " + haha);
//   }
// }
