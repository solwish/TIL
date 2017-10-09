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
	<c:url value="images/Tulips.jpg" var="data"></c:url>
	<h3>${data}</h3>
	<img src="${data}" width='150' height='150'>

	<c:url value="search.jsp" var="data">
		<c:param name="keyword">사진</c:param>
		<c:param name="category">블러그</c:param>
	</c:url>
	<h3>${data}</h3>
	
</body>
</html>