<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<jsp:useBean id="member" class="edu.example.beans.MemberBean" />
	이름 :
	<jsp:getProperty property="name" name="member" />
	<br> 아이디 :
	<jsp:getProperty property="userid" name="member" />
	<hr>


	<jsp:setProperty property="name" name="member" value="수빈이" />

	<jsp:setProperty property="userid" name="member" value="pink" />
	이름 :
	<jsp:getProperty property="name" name="member" />
	<br> 아이디 :
	<jsp:getProperty property="userid" name="member" />
</body>
</html>