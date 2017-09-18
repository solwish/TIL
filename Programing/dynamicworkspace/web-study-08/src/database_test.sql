select * from BOARD;

drop table board;
drop table member;

create table member(
name varchar2(10),
userid varchar2(10),
password varchar2(10),
email varchar2(20),
phone char(13),
admin number(1) default 0, --0:사용자, 1:관리자
primary key(userid)
);

insert into member values('이소미', 'somi', '1234', 'gmd@naver.com', '010-2362-5157', 0);
insert into member values('하상오', 'sang12', '1234', 'ha12@naver.com', '010-5629-8888', 0);
insert into member values('이석규', 'seck', '1234', 'sea@naver.com', '010-5474-4357', 0);
insert into member values('이수미', 's42f', '1234', 'gm12@naver.com', '010-2362-5157', 0);
insert into member values('오리진', 'sa3212', '1234', 'ha12@naver.com', '010-5629-8888', 0);
insert into member values('미사우', 's64k', '1234', 'sea@naver.com', '010-5474-4357', 0);

insert into member values('순가미', 'saeff', '1234', 'gmd@naver.com', '010-2362-5157', 0);
insert into member values('마카오', 'betmoney', '1234', 'ha12@naver.com', '010-5629-8888', 0);
insert into member values('돌하규', 'sda321', '1234', 'sea@naver.com', '010-5474-4357', 0);
insert into member values('이순신', '4elf9', '1234', 'gm12@naver.com', '010-2362-5157', 0);
insert into member values('거북목', 'ajse12', '1234', 'ha12@naver.com', '010-5629-8888', 0);
insert into member values('호랭이', 'ho32k', '1234', 'sea@naver.com', '010-5474-4357', 0);

commit

update member
set admin =1
where userid = 'sang12';

select * from member;