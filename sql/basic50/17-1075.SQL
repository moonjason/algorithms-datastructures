-- https://leetcode.com/problems/project-employees-i/submissions/1581045118/?envType=study-plan-v2&envId=top-sql-50
-- Write your PostgreSQL query statement below
SELECT
    p.project_id,
    ROUND ( SUM(e.experience_years)::DECIMAL / COUNT(e.name)::DECIMAL , 2) as average_years
FROM Project p
JOIN  Employee e
    ON p.employee_id = e.employee_id
GROUP BY p.project_id