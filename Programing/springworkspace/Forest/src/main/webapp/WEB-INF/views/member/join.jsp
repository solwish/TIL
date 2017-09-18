<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
th { text-align:left}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function () {
	$('#idcheck').click(function(){
		var userid = $('#userid').val();
		if(userid == '') {
			alert('사용자 ID를 입력하세요');
			$('#userid').focus();
			return;
		}
		
		$.get('idcheck', {userid:userid}, function(data){
			console.log(data)
			if(data=='ok') {
				$('#idcheck-message').css('color', 'black')
				.text('사용가능한 아이디 입니다.');
				$('#submitBtn').prop('disabled', false);
			} else {
				$('#idcheck-message').css('color', 'red')
					.text('이미 사용중인 아이디 입니다.');
				$('#submitBtn').prop('disabled', true);
			}	
		});
	});	
});
</script>
</head>
<body>
	<h2>회원 가입</h2>
	<form method="post">
	<table style="width:80%">
		<tr>
			<th>사용자 ID</th>
			<td>
				<input type="text" name="userid" id="userid"
							value="${member.userid}">
				<input type="button" id="idcheck" value="id 중복확인">
				<span id="idcheck-message"></span>
			</td>
		</tr>
		<tr>
			<th>이름</th>
			<td><input type="text" name="name" value="${member.name}"></td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td><input type="text" name="password" value="${member.password}"></td>
		</tr>		
		<tr>
			<th>전화번호</th>
			<td><input type="text" name="phone" value="${member.phone}"></td>
		</tr>		
		<tr>
			<th>email</th>
			<td><input type="text" name="email" value="${member.email}"></td>
		</tr>

		<tr>
			<th>회원레벨</th>
			<td>
				<input type="radio" name="admin" value="1"> 관리자
				<input type="radio" name="admin" value="0"> 일반회원
			</td>
		</tr>
		<tr>
			<td></td>
			<td>
				<input type="submit" disabled id="submitBtn"
					value="확인">
				<input type="button" value="취소" onclick="history.back()">
			</td>
		</tr>				
	</table>
	</form>




</body>
</html>