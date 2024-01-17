# Write your MySQL query statement below
DELETE FROM person
WHERE id NOT IN (
  SELECT sub.min_id
  FROM (
    SELECT MIN(id) AS min_id, email
    FROM person
    GROUP BY email
  ) sub
)