<%@page import="org.apache.coyote.RequestGroupInfo"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%!//선언부는 첫 방문자에 의해서 단 한번 수행합니다. 
//필드 부분이라 한번만 실행됨 초기과 과정 그러므로 리퀘스트로 받는건 여기서 못받음 느낌표 없애거나
	
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String url = "jdbc:oracle:thin:@localhost:1521:XE";
	String uid = "edu";
	String pass = "1231";
	//String sql = "select * from member" + " where userid='" +idd+ "'";%>

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
		</tr>
		<%
			try {
				Class.forName("oracle.jdbc.driver.OracleDriver");
				conn = DriverManager.getConnection(url, uid, pass);
				stmt = conn.createStatement();
				
				String idd = request.getParameter("userid");
				String sql = "select * from member" + " where userid='" +idd + "'";
				
				//System.out.println(sql);
				
				rs = stmt.executeQuery(sql);
				if (rs.next()) { //데이터 없는 경우
					out.println("<tr>");
					out.println("<td>" + rs.getString("name") + "</td>");
					out.println("<td>" + rs.getString("userid") + "</td>");
					out.println("<td>" + rs.getString("password") + "</td>");
					out.println("<td>" + rs.getString("email") + "</td>");
					out.println("<td>" + rs.getString("phone") + "</td>");
					out.println("<td>" + rs.getInt("admin") + "</td>");
					out.println("</tr>");
				}else{
					out.println("<tr>");
					out.println("<td colspan=6>" +"해당 데이터가 없습니다."+ "</td>");
					out.println("</tr>");
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
	
</body>
</html>