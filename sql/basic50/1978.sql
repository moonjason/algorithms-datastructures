-- https://leetcode.com/problems/employees-whose-manager-left-the-company/?envType=study-plan-v2&envId=top-sql-50

-- Employees
-- +-------------+----------+
-- | Column Name | Type     |
-- +-------------+----------+
-- | employee_id | int      |
-- | name        | varchar  |
-- | manager_id  | int      |
-- | salary      | int      |
-- +-------------+----------+
-- In SQL, employee_id is the primary key for this table.
-- This table contains information about the employees, their salary, and the ID of their manager. Some employees do not have a manager (manager_id is null). 

-- Find the IDs of the employees whose salary is strictly less than $30000 and whose manager left the company. 
-- When a manager leaves the company, their information is deleted from the Employees table, but the reports still have their manager_id set to the manager that left.

-- Return the result table ordered by employee_id.

-- Write your PostgreSQL query statement below
SELECT
    e1.employee_id
FROM Employees e1
LEFT JOIN Employees e2
    ON e1.manager_id = e2.employee_id
WHERE e2.employee_id IS NULL 
    AND e1.manager_id IS NOT NULL 
    AND e1.salary < 30000
ORDER BY e1.employee_id