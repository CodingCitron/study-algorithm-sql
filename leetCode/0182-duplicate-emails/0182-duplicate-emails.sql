# Write your MySQL query statement below
SELECT email Email
FROM Person
GROUP BY email
HAVING count(Email) > 1