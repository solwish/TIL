<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<%
	String id = request.getParameter("userid");
	if (id == null)
		id = "";
%>
</head>
<body>
	<form method="post" action="04_testLogin.jsp">
		<label for="userid"> 아이디 : </label> <input type="text" name="id"
			id="userid" value=<%=id%>><br> <label for="userpwd">
			암 &nbsp; 호 : </label> <input type="password" name="pwd" id="userpwd"><br>
		<input type="submit" value="로그인">
	</form>

	<%
		String error = request.getParameter("error");
		if (error != null) {
	%>
	<script>
	alert("<%=error%>");
	</script>
	<div style="color: red">
		에러 :
		<%=error%>
	</div>
	<%
		}
	%>
</body>
</html>