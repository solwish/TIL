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
		Object obj = null;
		int aa = 4;
		String str1 = new String("string1");
		Object i = null;
	 %>
	정수형 : ${10}
	<br> 실수형 : ${5.6}
	<br> 문자열형: ${"성윤정"}
	<br> 논리형: ${true}
	<br> null : ${null}
	<br> null :
	<%=obj%>
	<hr>
	\${empty obj} : ${empty obj} <br>
	\${empty aa} : ${empty i} <br>
	\${empty str1} : ${empty str1}
	<br>
</body>
</html>