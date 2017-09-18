<%@page import="java.net.URLEncoder"%>
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
		String id = "pink";
		String pwd = "1234";
		String name = "성윤정";
		request.setCharacterEncoding("UTF-8");
		if (id.equals(request.getParameter("id")) && pwd.equals(request.getParameter("pwd"))) {
			response.sendRedirect("04_main.jsp?name=" + URLEncoder.encode(name, "UTF-8"));
		} else {
			response.sendRedirect("04_loginForm.jsp?userid=" + request.getParameter("id") + "&error="
					+ URLEncoder.encode("id 또는 비밀번호가 틀렸습니다", "UTF-8"));

		}
	%>
</body>
</html>