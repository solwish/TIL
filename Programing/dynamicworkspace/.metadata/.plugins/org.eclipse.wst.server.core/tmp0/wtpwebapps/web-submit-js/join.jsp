<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>회원 가입</h2>
	<form method="post">
		<table>
			<tr>
				<td>이름</td>
				<td><input type="text" name="name" size="20"></td>
			</tr>
			<tr>
				<td>아이디</td>
				<td><input type="text" name="userid" size="20" id="userid">
				</td>
			</tr>
			<tr>
				<td>암 호</td>
				<td><input type="password" name="password" size="20"></td>
			</tr>
			<tr height="30">
				<td width="80">암호 확인</td>
				<td><input type="password" name="password_check" size="20">
				</td>
			</tr>
			<tr>
				<td>성별</td>
				<td><input id="man" type="radio" name="gender" value="m" /> <label
					for="man">남자</label> <input id="woman" type="radio" name="gender"
					value="w" /> <label for="woman">여자</label></td>
			</tr>
			<tr>
				<td>나이</td>
				<td><input type="text" name="age" size="3"></td>
			</tr>
			<tr>
				<td>전화번호</td>
				<td><input type="text" name="phone" size="20"></td>
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