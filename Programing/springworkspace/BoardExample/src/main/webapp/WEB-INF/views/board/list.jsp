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
	<%@ include file="footer.jsp"%>
	<%-- <jsp:include page="footer.jsp" /> --%>
	<h2>글 목록</h2>
	<table style="width: 65%;">
		<tr>
			<th>#</th>
			<th style="text-align: left;">제목</th>
			<th>작성자</th>
			<th>조회수</th>
			<th>등록일</th>
		</tr>
		<c:forEach var="board" items="${list}">
			<tr>
				<td style="text-align: center">${board.num}</td>
				<td><a href="view?num=${board.num}">${board.title}</a></td>
				<td style="text-align: center">${board.writer}</td>
				<td style="text-align: center">${board.readCnt}</td>
				<td style="text-align: center"><fmt:formatDate
						value="${board.regDate}" pattern="yyyy-MM-dd" /></td>
			</tr>
		</c:forEach>
	</table>
	<div style="text-align: center">
		<a href="write">글쓰기</a>
	</div>

</body>
</html>