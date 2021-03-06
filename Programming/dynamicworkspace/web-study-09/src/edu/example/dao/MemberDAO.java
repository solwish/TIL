package edu.example.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import edu.example.dto.MemberVO;

public class MemberDAO {

	private MemberDAO() {
	}

	private static MemberDAO instance = new MemberDAO();

	public static MemberDAO getInstance() {
		return instance;

	};

	public Connection getConnection() throws Exception {
		Connection conn = null;
		Context initContext = new InitialContext();
		Context envContext = (Context) initContext.lookup("java:/comp/env");
		DataSource ds = (DataSource) envContext.lookup("jdbc/myoracle");
		conn = ds.getConnection();
		return conn;
	};

	// 아이디 버번 체크
	public int userCheck(String userid, String pwd) {
		int result = -1;
		String sql = "select password from member where userid=?";

		try (Connection conn = getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, userid);
			try (ResultSet rs = pstmt.executeQuery();) {
				result = pwdCheck(pwd, rs);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	private int pwdCheck(String pwd, ResultSet rs) throws SQLException {
		int result;
		if (rs.next()) {
			if (rs.getString("password") != null && rs.getString("password").equals(pwd)) {
				result = 1;
			} else {
				result = 0;
			}
		} else {
			result = -1;
		}
		return result;
	}

	// 로그인 후 회원 정보 가져옴
	public MemberVO getMember(String userid) {
		MemberVO mVo = null;
		String sql = "select * from member where userid=?";

		try (Connection conn = getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, userid);
			try (ResultSet rs = pstmt.executeQuery();) {
				if (rs.next()) {

					mVo = map(rs);

				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mVo;
	}

	// 익셉션뜨로우 해주는 이유는 겟 스트링해줄때 오류가 발생할 수 있기 때문
	private MemberVO map(ResultSet rs) throws SQLException {
		MemberVO mVo;
		mVo = new MemberVO();
		mVo.setName(rs.getString("name"));
		mVo.setUserid(rs.getString("userid"));
		mVo.setPwd(rs.getString("password"));
		mVo.setEmail(rs.getString("email"));
		mVo.setPhone(rs.getString("phone"));
		mVo.setAdmin(rs.getInt("admin"));
		return mVo;
	}

	// 아이디 중복 체크
	public int confirmID(String userid) {
		int result = -1;
		String sql = "select userid from member where userid=?";
		try (Connection conn = getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, userid);
			try (ResultSet rs = pstmt.executeQuery();) {
				if (rs.next()) {
					result = 1; // 중복 찾았을 경우
				} else {
					result = -1; // 중복 없을 경우
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public int insertMember(MemberVO mVo) {
		int result = -1;
		String sql = "insert into member values(?, ?, ?, ?, ?, ?)";
		try (Connection conn = getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, mVo.getName());
			pstmt.setString(2, mVo.getUserid());
			pstmt.setString(3, mVo.getPwd());
			pstmt.setString(4, mVo.getEmail());
			pstmt.setString(5, mVo.getPhone());
			pstmt.setInt(6, mVo.getAdmin());
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public int updateMember(MemberVO mVo) {
		int result = -1;
		String sql = "update member " + "set password=?, email=?," + "phone=?, admin=? where userid=?";

		try (Connection conn = getConnection(); PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, mVo.getPwd());
			pstmt.setString(2, mVo.getEmail());
			pstmt.setString(3, mVo.getPhone());
			pstmt.setInt(4, mVo.getAdmin());
			pstmt.setString(5, mVo.getUserid());
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	public ArrayList<MemberVO> getMemberList() {
		ArrayList<MemberVO> list = new ArrayList<>();
		String sql = "select * from member order by name";
		try (Connection conn = getConnection();
				Statement stmt = conn.createStatement();
				ResultSet rs = stmt.executeQuery(sql);) {
			while (rs.next()) {
				MemberVO mVo = map(rs);
				list.add(mVo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	public int deleteMember(String userid) {
		int result = -1;
		String sql = "delete member where userid=?";
		try (Connection conn = getConnection(); 
				PreparedStatement pstmt = conn.prepareStatement(sql);) {
			pstmt.setString(1, userid);
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;

	}
}
