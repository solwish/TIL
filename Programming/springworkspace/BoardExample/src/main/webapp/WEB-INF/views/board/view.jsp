<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table>
		<tr>
			<td style="width:60px">제목</td>
			<td>${board.title}</td>
		</tr>
		<tr>
			<td>작성자</td>
			<td>${board.writer}</td>
		</tr>
		<tr>
			<td>작성일</td>
			<td><fmt:formatDate value="${board.regDate}"
				pattern="yyyy-MM-dd" /></td>
		</tr>
			<tr>
			<td>수정일</td>
			<td><fmt:formatDate value="${board.updateDate}"
				pattern="yyyy-MM-dd a hh:mm:ss" /></td>
		</tr>
		<tr>
			<td>내용</td>
			<td><pre>${board.content}</pre></td>
		</tr>
		<tr>
			<td></td>
			<td><a href="list">목록</a> / <a href="update?num=${board.num}">수정</a> /
			<a href="delete?num=${board.num}">삭제</a></td>
		</tr>
	</table>
</body>
</html>