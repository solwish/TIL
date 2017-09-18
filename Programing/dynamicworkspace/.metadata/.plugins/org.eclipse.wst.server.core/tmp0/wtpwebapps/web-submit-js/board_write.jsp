<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="board.js"></script>

<style>

</style>
</head>
<body>
	<form name="frm">
		<table>
			<tr>
				<td><input type="text" name="title" placeholder="제목 입력" 	size="60" /></td>
				<td><input type="text" name="writer" placeholder="작성자 입력" size="20"/></td>
			</tr>
			<tr>
				<td colspan="2"><textarea cols="90" rows="30" name="content"
					placeholder="내용입력" required></textarea></td>
			</tr>
			<tr>
				<td><a href="board_list.jsp">목록</a></td>
				<td><input type="submit" value="완료"
					onclick="return writeCheck()"></td>
			</tr>
		</table>
	</form>
</body>
</html>