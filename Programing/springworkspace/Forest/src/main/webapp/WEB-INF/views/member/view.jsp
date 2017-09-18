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


	<table>
		<tr>

			<td>ID</td>
			<td>사용자명</td>
			<td>password</td>
			<td>email</td>
			<td>phone</td>
			<td>등급</td>

		</tr>

		<tr>

			<td><a href="memberUpdate.do?userid=${member.userid}">
					${member.userid}</a></td>

			<td>${member.name}</td>
			<td>${member.password}</td>
			<td>${member.email}</td>
			<td>${member.phone }</td>
			<td><c:if test="${member.admin==1 }">관리자</c:if> <c:if
					test="${member.admin==0 }">일반인</c:if></td>
			

		</tr>

	</table>
	
	<p style="color: red;">${message}</p>


</body>
</html>