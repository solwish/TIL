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

	<table style="width: 100%;">
		<tr>
			<th style="width: 50px">#</th>
			<th style="text-align: left; width: 100px">제목</th>
			<th style="width: 80px">작성자</th>
		</tr>
		<c:forEach var="list" items="${articleList}" varStatus="status">
			<tr>
				<td style="text-align: center">${status.index+1}</td>
				
				<td><c:url value="article_view" var="link">
						<c:param name="num">${list.num}</c:param>
					</c:url><a href="${link}"> ${list.title}
					</a></td>
					
				<td style="text-align: center">${list.writer }</td>
			</tr>
		</c:forEach>
	</table>

	<%-- 	
	<% String input = null; %>
	<c:if test= "${empty input}"> 텅빔 </c:if>

 --%>
</body>
</html>