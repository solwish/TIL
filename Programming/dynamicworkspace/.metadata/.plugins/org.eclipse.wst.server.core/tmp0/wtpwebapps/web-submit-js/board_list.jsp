<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
#dump1 {
	height: 200px;
}
#dump2 {
	width: 730px;
	height: 600px;
}
table { text-align:center;
}
.content{width: 500px;}

</style>
</head>
<body>
	<div id="dump1"></div>
	<div id="dump2">
	<div id="table">
		<table style="border-style: solid;">
			<thead>
				<tr>
					<td>No</td>
					<td class="content">제목</td>
					<td>작성자</td>
					<td>조회수</td>
					<td>작성일</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td><a class="content" href="board_content_1.jsp">테스트 1</a></td>
					<td>홍길동</td>
					<td>0</td>
					<td>2016-06-18</td>
				</tr>
				<tr>
					<td>2</td>
					<td><a class="content" href="board_content_2.jsp">테스트 2</a></td>
					<td>홍길동</td>
					<td>0</td>
					<td>2016-06-18</td>
				</tr>
				<tr>
					<td>3</td>
					<td><a class="content" href="board_content_3.jsp">테스트 3</a></td>
					<td>홍길동</td>
					<td>0</td>
					<td>2016-06-18</td>
				</tr>
				<tr>
					<td>4</td>
					<td><a class="content" href="board_content_4.jsp">테스트 4</a></td>
					<td>홍길동</td>
					<td>0</td>
					<td>2016-06-18</td>
				</tr>
				<tr>
					<td>5</td>
					<td><a class="content" href="board_content_5.jsp">테스트 5</a></td>
					<td>홍길동</td>
					<td>0</td>
					<td>2016-06-18</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div style="text-align: right">
		<a href="board_write.jsp">글쓰기</a>
	</div>
</div>
</body>
</html>