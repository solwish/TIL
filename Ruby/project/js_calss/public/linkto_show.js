$(document).ready(function() {
  // == $(function() {})
  $('.board').click(function() {
    location.href = '/boards/' + $(this).data('id');
  })
})


// tr에 해당되는 부분을 클릭하면
// '현재' click 한 부분의 id가 몇인지 파악해야함
// var trs = document.getElementsByClassName('board');
// for(var i=0; i<trs.length; i++){
//   trs[i].style.cursor = "pointer"
//   trs[i].onclick = function() {
//     var id = this.getAttribute('data-id')
//     location.href = "http://localhost:3000/boards/" + id
//     $(this).addClass("clicked");
//   }
// }
