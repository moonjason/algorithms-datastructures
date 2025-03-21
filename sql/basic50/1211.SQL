-- Write your PostgreSQL query statement below
WITH cte1 as (
    SELECT DISTINCT 
        query_name,
        ROUND(SUM(rating::decimal / position::decimal) / COUNT(query_name), 2) as quality
    FROM Queries
    GROUP BY query_name
), cte2 as (
    SELECT
        query_name,
        ROUND((COUNT(rating) FILTER(WHERE rating < 3)::decimal / COUNT(query_name)::decimal) * 100, 2) as poor_query_percentage
    FROM Queries
    GROUP BY query_name
)


SELECT cte1.query_name, cte1.quality, cte2.poor_query_percentage FROM cte1
JOIN cte2
    ON cte1.query_name = cte2.query_name