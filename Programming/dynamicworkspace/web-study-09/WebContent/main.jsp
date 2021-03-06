<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<c:if test="${empty loginUser }">
	<jsp:forward page="login.do" />
</c:if>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>회원 전용 페이지</h2>
<%-- 	<% out.println(session.getAttribute("today"));  %> --%>
	<form action="logout.do">
		<table>
			<tr>
				<td>안녕하세요. ${loginUser.name}(${loginUser.userid})님</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="로그아웃"> &nbsp;&nbsp; 
						<c:url value="memberUpdate.do" var="link">
							<c:param name="userid">${loginUser.userid}</c:param>
						</c:url> 
					<input type="button" value="회원정보변경"
							onclick="location.href='${link}'"> &nbsp;&nbsp;
						<c:if test="${loginUser.admin == 1}">
							<input type="button" value="회원 목록 보기" onclick="location.href='list.do'">
						</c:if>
				</td>
			</tr>
			<tr>
			<td colspan="2" align="center">
			<fmt:formatDate value="${today}"
				pattern="yyyy-MM-dd (E) a hh:mm:ss"/>  <!-- HH는 24시간제 -->
			</td>
			</tr>
		</table>
</body>
</html>