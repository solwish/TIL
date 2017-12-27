# Watcha colne app
fake 왓챠 based on rails

## 0. 영화 평점 주기
- 로그인 된 유저 : 점수를 줄 수 있다, 댓글도 달 수 있다.
- 평점 - rating, integer
- 리뷰 - comment, string
- user_id, movie_id
- Movie has_many :reviews
- Revie belongs_to :movie
- User has_many :reviews
- Review belongs_to :user

## 1. 영화 정보(Movie)
- model : Movie(title, poster, genre, nation, director)
- controller : movies
- movies#index (root)
- movies#show (하나의 영화를 상세히 보여줌)
- 관리자: CRUD
- 로그인 된 유저 : 점수를 줄 수 있다. 댓글도 달 수 있다.
- 댓글 (Comment)

## 2. 게시판(Post -> Scaffold)
- title:string, content:text, user_id:integer
- User has_many :posts
- Post belongs_to :user

- 로그인 안된 유저: R
- 로그인 된 유저: CRUD(본인의 글)
- 관리자: CRUD (모든 글)
- 댓글 (Comment)

## 3. 유저(User -> Devise)
- signup, login, ...
- 관리자/일반유저
- 한글 버전
- view 수정 가능
- nickname이라는 컬럼을 추가함
  * db에 컬럼 추가해주고 devise 설명서 보고 어플리케이션 컨트롤러에 넣어주면 돼
