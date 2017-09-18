<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>글 쓰기</h2>
	<form method="post">
		<table>
			<tr>
				<td>제목</td>
				<td><input type="text" name="title" value="${board.title}"></td>
			</tr>
			<tr>
				<td>작성자</td>
				<td><input type="text" name="writer" value="${board.writer}"></td>
			</tr>
			<tr>
				<td>내용</td>
				<td><textarea rows="10" name="content" style="width: 90%"
				>${board.content}</textarea></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="등록" /></td>
			</tr>
		</table>
	</form>
<h2 style="color: red;">${message}</h2>
</body>
</html>