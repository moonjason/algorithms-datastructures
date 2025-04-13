-- https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/description/?envType=study-plan-v2&envId=top-sql-50

-- Table: RequestAccepted

-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | requester_id   | int     |
-- | accepter_id    | int     |
-- | accept_date    | date    |
-- +----------------+---------+
-- (requester_id, accepter_id) is the primary key (combination of columns with unique values) for this table.
-- This table contains the ID of the user who sent the request, the ID of the user who received the request, and the date when the request was accepted.

-- Write a solution to find the people who have the most friends and the most friends number.

-- The test cases are generated so that only one person has the most friends.

WITH requester_count as (
    SELECT
        requester_id,
        COUNT(DISTINCT accepter_id)
    FROM RequestAccepted
    GROUP BY requester_id
), accepter_count as (
    SELECT
        accepter_id,
        COUNT(DISTINCT requester_id)
    FROM RequestAccepted
    GROUP BY accepter_id
), totals as (
    SELECT
        COALESCE(r.requester_id, a.accepter_id) as id,
        COALESCE(r.count, 0) + COALESCE(a.count,0) as num
    FROM requester_count r
    FULL JOIN accepter_count a
        ON r.requester_id = a.accepter_id
)

SELECT 
    id,
    num
FROM totals
WHERE num IN (SELECT MAX(num) FROM totals)

-- NOT HAPPY WITH THIS, NOT A CLEAN SOLUTIOON IMO 

-- SOMEONE ELSE'S SOLUTION 

with cte(id) as (select requester_id from RequestAccepted 
UNION ALL 
select accepter_id from RequestAccepted
)

-- vvv this cte works because the questions logic really just counts the frequency in requester_id and accepter_id columns from the main table
| id |
| -- |
| 1  |
| 1  |
| 2  |
| 3  |
| 2  |
| 3  |
| 3  |
| 4  |


select distinct   
    id,
    count(id) over (partition by id) as num
from cte
order by num desc limit 1;