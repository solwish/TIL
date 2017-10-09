<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		session.setAttribute("id", "pinksung");
		session.setAttribute("pwd", "test1234");
		session.setAttribute("age", 20);
	%>
	<h3>세션 설정</h3>
</body>
</html>