<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="javascript/qwer.js"></script>
</head>
<body>
	<form method="post" action="LoginServlet" name="frm">
		<label for="userid"> 아이디 : </label> <input type="text" name="id"
			id="userid"><br> <label for="userpwd"> 암 &nbsp;
			호 &nbsp;: </label> <input type="password" name="pwd" id="userpwd"><br>
		<input type="submit" value="로그인" onclick="return check()">
	</form>
</body>
</html>