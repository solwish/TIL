## 20180102

#### model: user, board, comment

#### controller.boards, sessions

#### gem: bootstrap, faker, kaminari, bcrypt, font-awesome

이벤트: 마우스 오버(mouseover)

이벤트 리스너: onmouseover

이벤트 핸틀러: function()

목요일 오후 시간까지
- 좋아요(like) 넣다 뺏다
- 댓글 등록
- 댓글 삭제
- 댓글 수정
- 무한 스크롤
- 회원가입할 때 중복체크(id)
금요일에는?
- bootstrap template(asset_pipeline)
- 카카오봇(javascript)

## 20180103
### jQuery
- CSS Selector에 의한 DOM 탐색 및 조작
  - parent, sibling을 통해 형제, 부모 DOM을 넘나들 수 있음
- 이벤트
  - .click (.이벤트명)
  - .on('click', function(){}) .on('이벤트명', 이벤트 핸들러)
- AJAX
  - rails에서의 ajax
  $.ajax({
    // 1. ajax로 요청을 보냄 >> JS파일에 대한 요청
    url:, //요청 보내는 url
    method: //http method
    data: // data parameter
    })

    // 2. 요청 보내는 url에 대한 route설정
    // config/routes.rb에서 설정

    // 여기까지 404 error

    // 3. controller에서 route에서 설정한
    // controller#action 만들어줌
    // 500 error

    // 4. action명과 같은 파일명을 가진 js.erb파일 만들어줌

    // 정상

## 20180104
- 댓글 수정
  - 내용물을 클릭하면 input창으로 바뀜
- 무한스크롤
  - 스크롤을 끝까지 내리면 발생
- user email 체크
  - validation(유효성 검사), front에서 1번 (//, back에서 1번 둘 다 해줘야해 원래는)
- 과제
  - password와 password_confirmation 내용이 다를경우 form이 제출 안되게 함(실습)

1. 이미 가입된 이메일인 경우

2. password와 password_confirmation이 서로 다를경우
   - 비밀번호가 서로 button은 disabled 되어 있어야 함
   - 가입 가능한 이메일인 경우 && 비밀번호가 서로 같은 경우에만 button 사용할 수 있게 만들어줌

```javascript
$('input').on('change', function() {
  // 이벤트 핸들러로 이름이 없는 함수가 들어가있는 경우
})
// 자바스크립트에서 함수 선언하기
// 자바스크립트 함수를 선언할 때에는 jquery 코드인
// $(function() {}) 이전에 선언해주는 것이 통상적
1. function 함수명(매개변수) {} // 함수 선언식
// 선언하기 이전에도 사용할 수 있음
2. var 함수명 = function(매개변수) {} // 함수 표현식
// 선언하기 이전에 사용하면 undefined error 발생

1월 4일 실습 내용(힌트)
var email = false;
var password = false;
1. function validation() {}
// email과 password가 모두 true인지 확인
// 모두 true이면 button의 disabled를 삭제
// 하나라도 틀리면 button의 disabled를 추가

2. 우리가 만들어 놓은 on('change')의 결과로는 변수 email과
password를 true, 혹은 false 변경시킨 후에 함수 validation()을 실행 시킴

// ajax 안씁니다.
```
