    // alert("여기는 인덱스 페이지입니다.");
    // 1. 이벤트를 넣어줄 html element 찾고
    var btn = document.getElementById('change-title');
    // console.log(btn);

    // 2. 해당 element에 원하는 이벤트를 달아준다.
    btn.onclick = function() {
      // alert('버튼이 눌렸습니다.');
      var title = prompt('바꿀 제목을 입력하세요.');
      // console.log(title);

    // 버튼을 누르면 prompt 창이 떠서 입력메시지를 입력하고,
    // 해당 내용으로 모든 제목을 바꿔버립니다.
    // btn.ondblclick = function(){
    //   alert("버튼이 두 번 눌렸습니다.");
    // }
    // getElement는 내용물을 1개만 가지고 온다 -> 여러개 있어도 리턴값은 한개
    // getElements는 내용물을 여러개 가지고 온다. -> 1개만 있어도 리턴값은 배열
    // getElements 로 찾은 html element를 사용할 때에는 반목문, 혹은 index로 하나씩 조정.
    // console.log(document.getElementById('tt'));  #한개만 출력
      var titles = document.getElementsByClassName('title');
      for(var i=0; i<titles.length; i++){
        // console.log(title);
        // console.dir(titles[i]);
        titles[i].textContent = title;
      }
      // console.dir(titles);
    }
    // console.dir(btn);
    // 3. 이벤트가 발생했을 경우 실행하는 함수(function())를 만들어준다.
    // 바꿀 내용을(html element)가 어디에 있는지 찾아야지
