1. 관리하고자 하는 프로젝트로 들어간다 (cd )
2. git으로 관리를 시작한다.
- git init
3. git으로 관리할 파일들을 더한다.
- git add [파일명]
- git add . (현재 폴더의 모든 파일을 더한다.)
4. git으로 저장포인트를 만든다.
- git commit -m "저장 메세지"
5.[원격저장소에 처음 추가할때만]git 원격저장소를 추가해주겠다.
- git commit add origin [본인의 repository 주소]
6.git 원격 저장소에 코드 밀어 넣기
-git push origin master
