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

	<c:forEach var="fileNo1" items="${fileNo}">
	업로드한 파일 다운 받기 :
	<a href="download?fileNo=${fileNo1}">다운로드</a>
		<hr>
		<img src="download?fileNo=${fileNo1}" width="400" />
		<hr>
	</c:forEach>
</body>
</html>