function writeCheck() {
	if (document.frm.title.value.length == 0) {
		alert("제목을 입력해주세요.");
		frm.title.focus();
		frm.content.value = frm.content.value;
		return false;
	}

	if (document.frm.writer.value.length == 0) {
		alert("작성자는 필수로 입력해야합니다.");
		frm.writer.focus();
		frm.content.value = frm.content.value;
		return false;
	}
	
	return true;
}
