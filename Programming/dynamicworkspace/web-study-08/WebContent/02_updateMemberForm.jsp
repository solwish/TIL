<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%!//선언부는 첫 방문자에 의해서 단 한번 수행합니다.
	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	String uid = "edu";
	String pass = "1231";%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%
		request.setCharacterEncoding("UTF-8");
		String userid = request.getParameter("userid");
	  //  out.print(userid);
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, uid, pass);
			String sql = "select * from member where userid = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userid);
			pstmt.executeQuery();
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
	%>

	<h2>회원의 정보 입력 폼</h2>
	<form method="post" action="02_updateMember.jsp">
		<table>
			<tr>
				<td>이름</td>
				<td><input type="text" name="name" size="20"
					value="<%=rs.getString("name")%>"></td>
			</tr>
			<tr>
				<td>아이디</td>
				<td><%=rs.getString("userid")%> <input type="hidden"
					name="userid" value="<%=rs.getString("userid")%>"></td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" name="pwd" size="20"
					value="<%=rs.getString("password")%>"></td>
			</tr>
			<tr>
				<td>이메일</td>
				<td><input type="text" name="email" size="20"
					value="<%=rs.getString("email")%>"></td>
			</tr>
			<tr>
				<td>전화번호</td>
				<td><input type="text" name="phone" size="11"
					value="<%=rs.getString("phone")%>"></td>
			</tr>
			<tr>
				<td>등급</td>
				<td>
					<%
						if (rs.getInt("admin") == 1) {
					%> <input type="radio" name="admin" value="1" checked="checked">
					관리자 <%
 	} else {
 %> <input type="radio" name="admin" value="1"> 관리자 <%
 	}
 %> <%
 	if (rs.getInt("admin") == 0) {
 %> <input type="radio" name="admin" value="0" checked="checked">
					일반회원 <%
 	} else {
 %> <input type="radio" name="admin" value="0"> 일반회원 <%
 	}
 %>
				</td>
			</tr>
			<tr>
				<td><input type="submit" value="전송"></td>
				<td><input type="reset" value="취소"></td>
			</tr>
		</table>
	</form>

	<%
		}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			//(6단계) 사용한 리소스 해제
			try {
				if (pstmt != null)
					pstmt.close();
				if (conn != null)
					conn.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		} //finally의 끝
	%>


</body>
</html>