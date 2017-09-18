<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="param.js"></script>
</head>
<body>
	<form method="post" action="ParamServlet" name="frm">
		아이디 : <input type="text" name="id"><br> 나 &nbsp; 이 &nbsp;: <input
			type="text" name="age"><br> <input type="submit"
			value="전송" onclick="return check()">
	</form>
</body>
</html>