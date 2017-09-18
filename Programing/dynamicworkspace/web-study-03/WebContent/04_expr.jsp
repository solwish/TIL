<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%!String str = "안녕하세요!";
	int a = 5, b = -5;

	public int abs(int n) {
		if (n < 0) {
			n = -n;
		}
		return n;
	}%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<!-- "C:/Users/student/dynamicworkspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/work/Catalina/localhost/web-study-03/org/apache/jsp/_04_005fexpr_jsp.java" -->
<!-- 자바 서블릿로 변환된 파일 위치 -->
	<%=str%><br>
	<%=a%>
	의 절대값 :
	<%=abs(a)%><br>
	<%=b%>
	의 절대값 :
	<%=abs(b)%><br>
</body>
</html>