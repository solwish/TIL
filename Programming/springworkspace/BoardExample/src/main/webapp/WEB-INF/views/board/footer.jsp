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
	<tr><td>실시간 검색어</td></tr>
		<c:forEach var="key" items="${keywords}" varStatus="status">
			<tr>
			<td> ${status.index+1}</td>
			<td> ${key} <c:if test="${!status.last}">...</c:if></td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>