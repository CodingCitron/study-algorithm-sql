# Write your MySQL query statement below
select a.actor_id, a.director_id
from (
select actor_id, director_id, count(*) cnt
from ActorDirector
group by actor_id, director_id
) a
where a.cnt > 2