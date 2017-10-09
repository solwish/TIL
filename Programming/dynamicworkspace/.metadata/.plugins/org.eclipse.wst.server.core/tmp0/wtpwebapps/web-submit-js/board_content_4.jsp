<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
table {	width: 600px;
height: 600px;}
#title {width: 400px;
height: 50px;
text-align: center;}
#date {width: 200px;
text-align: center;}
#content {width: 600px;
height: 500px;
text-align: center;}
#option{border: none;}
</style>
</head>
<body>
	<table border="1">
		<tr>
			<th id="title" colspan="3">제목 4</th>
			<td id="date">"2017-06-18"</td>
		</tr>
		<tr>
			<th id="content" colspan="4">내용 테스트4</th>

		</tr>
		<tr id="option">
			<td align="right" colspan="4"><a href="board_list.jsp">목록</a>
			<a href="board_write.jsp">수정</a>
			<a href="board_list.jsp">삭제</a></td>
		</tr>
	</table>
</body>
</html>