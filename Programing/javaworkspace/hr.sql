create table Member AS
select employee_id, LAST_NAME, EMAIL, PHONE_NUMBER
from EMPLOYEES;

create table Member1 AS
select employee_id, LAST_NAME as NAME, EMAIL, PHONE_NUMBER
from EMPLOYEES;
