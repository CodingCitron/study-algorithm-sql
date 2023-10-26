# Write your MySQL query statement below
select *
from Cinema
where id%2 != 0 and description NOT LIKE 'boring'
order by rating desc
