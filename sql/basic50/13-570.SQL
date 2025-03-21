-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50

-- Write your PostgreSQL query statement below

WITH cte as (
SELECT 
    managerId,
    COUNT(managerId) as direct_report_counts
FROM Employee
GROUP BY managerId
)

SELECT 
    name
FROM Employee e
JOIN cte
    ON e.id = cte.managerId
WHERE cte.direct_report_counts >= 5
