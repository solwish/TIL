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
	<h2>회원 수정</h2>
	<form action="update" method="post" name="frm">
		<table>
			<tr>
				<td>이름</td>
				<td><input type="text" name="name" size="20"
					value="${member.name}" readonly></td>
			</tr>
			<tr>
				<td>아이디</td>
				<td>${member.userid} </td>
				<input type="hidden" name="userid" value="${member.userid}" />
			</tr>
			<tr>
				<td>암 &nbsp; 호</td>
				<td><input type="password" name="password" size="20">*</td>
			</tr>
			<tr height="30">
				<td width="80">암호 확인</td>
				<td></td>
			</tr>
			<tr>
				<td>이메일</td>
				<td><input type="text" name="email" size="20"
					value="${member.email}"></td>
			</tr>
			<tr>
				<td>전화번호</td>
				<td><input type="text" name="phone" size="20"
					value="${member.phone}"></td>
			</tr>
			<tr>
				<td>등급</td>
				<td><c:choose>
						<c:when test="${member.admin==0}">
							<input type="radio" name="admin" value="0" checked="checked"> 일반회원 <input
								type="radio" name="admin" value="1"> 관리자 </c:when>
						<c:otherwise>
							<input type="radio" name="admin" value="0"> 일반회원 <input
								type="radio" name="admin" value="1" checked="checked"> 관리자 </c:otherwise>
					</c:choose></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="submit" value="확인">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="reset" value="취소">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>