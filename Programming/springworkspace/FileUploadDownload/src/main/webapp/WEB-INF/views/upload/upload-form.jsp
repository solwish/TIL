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

	<form action="upload" method="post" enctype="multipart/form-data">
		<h3>업로드할 파일을 선택하세요</h3>
		<!-- 학번 : <input type="text" name="studentNumber"> --> <br>
		파일 : <input type="file" name="file" multiple="multiple" accept="image/*"> <br /> 
		<input
			type="submit" value="확인">
	</form>

</body>
</html>