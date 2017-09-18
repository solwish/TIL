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
	<form method="post">
		<table>
			<tr>
				<td>제품명</td>
				<td><input type="text" name="name"></td>
			</tr>
			<tr>
				<td>생산일</td>
				<td><input type="text" name="productDate"
					placeholder="yyyy-MM-dd 형태로 입력"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="확인" /> <input type="reset"
					value="취소" /></td>
			</tr>
		</table>
	</form>
</body>
</html>