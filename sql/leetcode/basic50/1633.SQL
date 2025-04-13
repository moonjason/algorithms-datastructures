-- Write your PostgreSQL query statement below


WITH user_total as (
    SELECT
        COUNT(user_id) as user_total_ct
    FROM Users
)

SELECT
    contest_id,
    ROUND((COUNT(user_id)::DECIMAL / user_total_ct::DECIMAL) * 100 , 2) as percentage
FROM Register
CROSS JOIN user_total
GROUP BY contest_id, user_total_ct
ORDER BY percentage desc, contest_id

