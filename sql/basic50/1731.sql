-- https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/description/?envType=study-plan-v2&envId=top-sql-50

-- Employees

-- +-------------+----------+
-- | Column Name | Type     |
-- +-------------+----------+
-- | employee_id | int      |
-- | name        | varchar  |
-- | reports_to  | int      |
-- | age         | int      |
-- +-------------+----------+
-- employee_id is the column with unique values for this table.
-- This table contains information about the employees and the id of the manager they report to. Some employees do not report to anyone (reports_to is null). 

 

-- For this problem, we will consider a manager an employee who has at least 1 other employee reporting to them.

-- Write a solution to report the ids and the names of all managers, the number of employees who report directly to them, and the average age of the reports rounded to the nearest integer.

-- Return the result table ordered by employee_id.


WITH direct_reports as (
    SELECT
        e.employee_id,
        e.name,
        COUNT(e.employee_id) as reports_count,
        ROUND(AVG(e2.age)) as average_age
    FROM Employees e
    JOIN Employees e2 
        ON e.employee_id = e2.reports_to
    GROUP BY e.employee_id, e.name
    ORDER BY e.employee_id
)


SELECT * FROM direct_reports