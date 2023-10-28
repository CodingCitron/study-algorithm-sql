# Write your MySQL query statement below
select id, 
CASE
WHEN p_id is null THEN "Root"
WHEN id in (select p_id from tree) Then "Inner"
ELSE "Leaf"
END as "type"
from tree
order by 1
