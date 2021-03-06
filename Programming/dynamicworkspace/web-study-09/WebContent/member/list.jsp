<%@page import="edu.example.dto.MemberVO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="script/member.js"></script>
</head>
<body>

	<h2>회원목록</h2>
	
	<table>
		<tr>
			<td>#</td>
			<td>ID</td>
			<td>사용자명</td>
			<td>pwd</td>
			<td>email</td>
			<td>phone</td>
			<td>등급</td>
			<td></td>
		</tr>
		<c:forEach var="member" items="${list}" varStatus="status">
			<tr>
				<td>${status.index+1}</td>
				<td><a href="memberUpdate.do?userid=${member.userid}">
						${member.userid}</a></td>

				<td>${member.name }</td>
				<td>${member.pwd}</td>
				<td>${member.email}</td>
				<td>${member.phone }</td>
				<td><c:if test="${member.admin==1 }">관리자</c:if> <c:if
						test="${member.admin==0 }">일반인</c:if></td>
				<td>
				<a href="delete.do?userid=${member.userid}">삭제</a>
				<a href="javascript:deleteMember('${member.userid}')">삭제</a>
				</td>
			</tr>
		</c:forEach>
	</table>



</body>
</html>