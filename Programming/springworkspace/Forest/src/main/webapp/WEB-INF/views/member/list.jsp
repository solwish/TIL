<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="resources/script/member.js"></script>
</head>
<body>

	<h2>회원목록</h2>

	<table>
		<tr>
			<td>#</td>
			<td>ID</td>
			<td>사용자명</td>
			<td>password</td>
			<td>email</td>
			<td>phone</td>
			<td>등급</td>
			<td></td>
		</tr>
		<c:forEach var="member" items="${list}" varStatus="status">
			<tr>
				<td>${status.index+1}</td>
				<td><a href="update?userid=${member.userid}">
						${member.userid}</a></td>

				<td>${member.name}</td>
				<td>${member.password}</td>
				<td>${member.email}</td>
				<td>${member.phone }</td>
				<td><c:if test="${member.admin==1 }">관리자</c:if> <c:if
						test="${member.admin==0 }">일반인</c:if></td>
				<td><a href="delete?userid=${member.userid}">삭제</a>  <a
					href="javascript:deleteMember('${member.userid}')">삭제</a></td>
			</tr> 
		</c:forEach>
	</table>
	<hr>
	<form action="view" method="get">
		<table>
			<tr>

				<td><label for="userid">검색할 유저 아이디</label> <input type="text"
					name="userid" id="userid"></td>
				<td><input type="submit" value="검색"></td>
			</tr>
		</table>
	</form>
	<a href="join">회원가입하기</a>
</body>
</html>