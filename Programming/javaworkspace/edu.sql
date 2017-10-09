create table Member (
id   varchar2(20),
name  varchar2(20), 
password  varchar2(20 char),
email varchar2(20 char)
);

insert into Member values ('test1', '�׽�Ʈ1', '1234', 'test1@naver.com');

insert into Member values ('test3', '�׽�Ʈ3', '3456', 'test3@naver.com');

insert into Member values ('test4', '�׽�Ʈ4', '4567', 'test4@naver.com');
insert into Member values ('test5', '�׽�Ʈ5', '5678', 'test5@naver.com');

alter table Member add constraints Member_ID_primary primary key (id);
alter table Member modify ID Not Null;
alter table Member add constraints Member_email_unique unique (email);

alter table Member drop constraints SYS_C007015;

alter table Member modify password Not Null;
