# Write your MySQL query statement below
SELECT MAX(e.salary) SecondHighestSalary
FROM Employee e
WHERE e.salary < (SELECT MAX(salary) FROM Employee)