<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%!//선언부는 첫 방문자에 의해서 단 한번 수행합니다.
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	String uid = "edu";
	String pass = "1231";
	String sql = "select * from member";%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>

	<table width='800' border='1'>
		<tr>
			<th>이름</th>
			<th>아이디</th>
			<th>암호</th>
			<th>이메일</th>
			<th>전화번호</th>
			<th>권한(1:관리자, 2:일반회원)</th>
			<th></th>
		</tr>
		<%
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver");
				conn = DriverManager.getConnection(url, uid, pass);
				stmt = conn.createStatement();
				rs = stmt.executeQuery(sql);
				while (rs.next()) {
		%>

		<tr>
			<td><%=rs.getString("name")%></td>
			<td><%=rs.getString("userid")%></td>
			<td><%=rs.getString("password")%></td>
			<td><%=rs.getString("email")%></td>
			<td><%=rs.getString("phone")%></td>
			<td><%=rs.getInt("admin")%></td>
			<td><a href="02_updateMemberForm.jsp?userid=<%=rs.getString("userid")%>">수정</a>
				<a href="02_deleteMember.jsp?userid=<%=rs.getString("userid")%>">삭제</a>
			</td>
		</tr>
		<%
			}
				//while의 끝 
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					if (rs != null)
						rs.close();
					if (stmt != null)
						stmt.close();
					if (conn != null)
						conn.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
			} //finally의 끝
		%>
	</table>

	<a href="02_addMemberForm.jsp">추가</a>

</body>
</html>