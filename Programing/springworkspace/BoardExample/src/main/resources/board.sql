

create table board(
	num number,
	title varchar2(100),
	writer varchar2(50),
	readCnt number,
	Content varchar2(3000),
	regDate date,
	updateDate date
	)

	drop table board;
	
	
select * from board;

create sequence board_seq
increment by 1
