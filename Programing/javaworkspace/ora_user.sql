insert into ex2_9_1 values(8, '');
CREATE TABLE EX2_9_1(
NUM1  number
constraints check1 check ( num1 between 1 and 9 ),
gender varchar2(10)
constraints check2 check (gender IN('male', 'female'))
);
insert into ex2_9_1 values(8, '');
insert into ex2_9_1 values(5.5, 'male');
CREATE TABLE EX2_9_1(
NUM1  number
constraints check1 check ( num1 between 1 and 9 ),
gender varchar2(10)
constraints check2 check (gender IN('male', 'female'))
);
insert into ex2_9 values ('BB', 'AA');
insert into ex2_9 values ('AA', 'AA');
CREATE TABLE ex2_9 (
col1    VARCHAR2(10),
col2    VARCHAR2(10),
constraint pk_EX2_9 primary key(col1, col2)
);
insert into ex2_8 values ('AA', 'AA');
CREATE TABLE ex2_8 (
col1    VARCHAR2(10) PRIMARY KEY,
col2    VARCHAR2(10)
);
insert into ex2_7 values ('', 'CC', 'CC');
insert into ex2_7 values ('', 'BB', 'BB');
insert into ex2_7 values ('AA', 'AA', 'AA');
select constraint_name, constraint_type, table_name, search_condition
  from user_constraints
  where table_name = 'EX2_7';
desc ex2_7;
create table ex2_7(
    col_unique_null   varchar2(10) unique,
    col_unique_nnull   varchar2(10) unique not null,
    col_unique   varchar2(10),
    constraints unique_shit unique (col_unique)
    );
select constraint_name, constraint_type, table_name, search_condition
  from user_constraints
  where table_name = 'EX2_6';
desc ex2_6;
create table ex2_6 (
    col_null  varchar2(10),
    col_not_null  varchar2(10) not null
    );
desc ex2_5;
select * from ex2_5;
insert into ex2_5 VALUES(sysdate, systimestamp);
create table ex2_5(
  col_date date,
  col_timestamp timestamp
  );
select column_id, column_name, data_type, data_length
  From user_tab_cols
  where table_name = 'EX2_3';
create table ex2_3(
  col_int integer,
  col_dec decimal,
  col_num number
  );
select column3, length(column3) As len3, lengthb(column3) as bytelen
  from ex2_2;
select
    column1, length(column1) as len1,
    column2, length(column2) as len2,
    column3, length(column2) as len3
    FROM ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
  
  select column3, length(column3) As len3, lengthb(column3) 
  from ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
  
  select column3, length(column3) As len3, lengthb(column3) as bytelen
  from ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  from ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
insert into ex2_2 values ('abc', 'abc', 'abc');
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
drop table ex2_1;
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
drop table ex2_1;
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
insert into ex2_2 values ('abc', 'abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  from ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
  
  select column3, length(column3) As len3, lengthb(column3) as bytelen
  from ex2_2;
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
  
  INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
  
  select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
select User FROM dual;
create table ex2_1 (
  column1     CHAR(10),
  colume2     varchar2(10),
  colume3     nvarchar2(10),
  colume4     number
  );
create table ex2_11 (
  column1     CHAR(10),
  column2     varchar2(10),
  column3     nvarchar2(10),
  column4     number
  );
INSERT into ex2_11 (COLUMN1, COLUMN2) VALUES ('abc', 'abc');
select
    column1, length(column1) as len1,
    column2, length(column2) as len2
    FROM ex2_11;
   
    drop table ex2_1;
  
  
  
  
create table ex2_2(
  column1   varchar2(3),
  column2   varchar2(3 byte),
  column3   varchar2(3 char)
  );
  
  insert into ex2_2 values ('abc', 'abc', 'abc');
  
  Insert into ex2_2 VALUES ('ȫ�浿', 'ȫ�浿', 'ȫ�浿');
  
  insert into ex2_2 (column3) VALUES ('ȫ�浿');
  
  select column3, length(column3) As len3, lengthb(column3) 
  from ex2_2;
select
    column1, length(column1) as len1,
    column2, length(column2) as len2,
    column3, length(column2) as len3
    FROM ex2_2;
select column3, length(column3) As len3, lengthb(column3) as bytelen
  from ex2_2;
create table ex2_3(
  col_int integer,
  col_dec decimal,
  col_num number
  );
select column_id, column_name, data_type, data_length
  From user_tab_cols
  where table_name = 'EX2_3';
create table ex2_5(
  col_date date,
  col_timestamp timestamp
  );
insert into ex2_5 VALUES(sysdate, systimestamp);
select * from ex2_5;
desc ex2_5;
create table ex2_6 (
    col_null  varchar2(10),
    col_not_null  varchar2(10) not null
    );
desc ex2_6;
select constraint_name, constraint_type, table_name, search_condition
  from user_constraints
  where table_name = 'EX2_6';
create table ex2_7(
    col_unique_null   varchar2(10) unique,
    col_unique_nnull   varchar2(10) unique not null,
    col_unique   varchar2(10),
    constraints unique_shit unique (col_unique)
    );
desc ex2_7;
select constraint_name, constraint_type, table_name, search_condition
  from user_constraints
  where table_name = 'EX2_7';
insert into ex2_7 values ('AA', 'AA', 'AA');
insert into ex2_7 values ('', 'BB', 'BB');
insert into ex2_7 values ('', 'CC', 'CC');
CREATE TABLE ex2_8 (
col1    VARCHAR2(10) PRIMARY KEY,
col2    VARCHAR2(10)
);
insert into ex2_8 values ('AA', 'AA');
CREATE TABLE ex2_9 (
col1    VARCHAR2(10),
col2    VARCHAR2(10),
constraint pk_EX2_9 primary key(col1, col2)
);
insert into ex2_9 values ('AA', 'AA');
insert into ex2_9 values ('BB', 'AA');
CREATE TABLE EX2_9_1(
NUM1  number
constraints check1 check ( num1 between 1 and 9 ),
gender varchar2(10)
constraints check2 check (gender IN('male', 'female'))
);
insert into ex2_9_1 values(8, '');
insert into ex2_9_1 values(5.5, 'male');

create table ex2_10_1 (
col1 varchar2(10) not null,
col2 varchar2(10) null,
create_date DATE DEFAULT SYSDATE);

insert into ex2_10_1(COL1, COL2) values ('AA', 'AA');
select * from ex2_10_1;
drop table ex2_10;
alter table ex2_10_1 rename column col1 to col11;
desc ex2_10_1;

alter table ex2_10_1 modify col2 varchar2(30);

alter table ex2_10_1 add col3 number;

alter table ex2_10_1 drop column col3 ;

alter table ex2_10_1 add constraints shit primary key (col11);

alter table ex2_10_1 drop constraints shit;

create table ex2_9_2 as
select *
from ex2_9;