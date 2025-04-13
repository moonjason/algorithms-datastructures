-- https://leetcode.com/problems/last-person-to-fit-in-the-bus/description/?envType=study-plan-v2&envId=top-sql-50

-- Table: Queue

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | person_id   | int     |
-- | person_name | varchar |
-- | weight      | int     |
-- | turn        | int     |
-- +-------------+---------+
-- person_id column contains unique values.
-- This table has the information about all people waiting for a bus.
-- The person_id and turn columns will contain all numbers from 1 to n, where n is the number of rows in the table.
-- turn determines the order of which the people will board the bus, where turn=1 denotes the first person to board and turn=n denotes the last person to board.
-- weight is the weight of the person in kilograms.

-- There is a queue of people waiting to board a bus. However, the bus has a weight limit of 1000 kilograms, so there may be some people who cannot board.
-- Write a solution to find the person_name of the last person that can fit on the bus without exceeding the weight limit. The test cases are generated such that the first person does not exceed the weight limit.
-- Note that only one person can board the bus at any given turn.

WITH rolling_sum as (
    SELECT 
        *,
        SUM(weight) OVER(order by turn) as rolling_sum
    FROM Queue 
    ORDER BY turn 
), leads as (
    SELECT 
        *,
        LEAD(rolling_sum) OVER(order by turn) as lead_sum
    FROM rolling_sum
)

SELECT 
    person_name
FROM leads
WHERE rolling_sum <= 1000
    AND (lead_sum > 1000 OR lead_sum IS NULL)