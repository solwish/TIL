<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script type="text/javascript" src="script/member.js"></script>

</head>
<body>
	<h2>로그인</h2>
	<form method="post" name="frm">   <!-- 액션 생략 가능 디폴트가 현재 유알엘로 전송되기 때문에 -->
		<table>
			<tr>
				<td>아이디</td>
				<td><input type="text" name="userid" value="${userid}"></td>
			</tr>
			<tr>
				<td>암 호</td>
				<td><input type="password" name="pwd"></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="submit" value="로그인"
					onclick="return loginCheck()">&nbsp;&nbsp; <input
					type="reset" value="취소"> &nbsp;&nbsp; <input type="button"
					value="회원 가입" onclick="location.href='join.do'"></td>
			</tr>
			<tr>
				<td colspan="2" style="color:red">${message}</td>
			</tr>
		</table>
	</form>
</body>
</html>