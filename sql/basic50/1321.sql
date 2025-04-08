-- https://leetcode.com/problems/restaurant-growth/description/?envType=study-plan-v2&envId=top-sql-50
-- Table: Customer

-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | customer_id   | int     |
-- | name          | varchar |
-- | visited_on    | date    |
-- | amount        | int     |
-- +---------------+---------+
-- In SQL,(customer_id, visited_on) is the primary key for this table.
-- This table contains data about customer transactions in a restaurant.
-- visited_on is the date on which the customer with ID (customer_id) has visited the restaurant.
-- amount is the total paid by a customer.

 

-- You are the restaurant owner and you want to analyze a possible expansion (there will be at least one customer every day).

-- Compute the moving average of how much the customer paid in a seven days window (i.e., current day + 6 days before). average_amount should be rounded to two decimal places.

-- Return the result table ordered by visited_on in ascending order.

With daily_sums as (
    SELECT
        visited_on,
        SUM(amount) as amount
    FROM Customer
    GROUP BY visited_on
), lags as (
    SELECT 
        visited_on,
        amount,
        LAG(amount, 1) OVER(ORDER BY visited_on) lag1,
        LAG(amount, 2) OVER(ORDER BY visited_on) lag2,
        LAG(amount, 3) OVER(ORDER BY visited_on) lag3,
        LAG(amount, 4) OVER(ORDER BY visited_on) lag4,
        LAG(amount, 5) OVER(ORDER BY visited_on) lag5,
        LAG(amount, 6) OVER(ORDER BY visited_on) lag6
    FROM daily_sums
)

SELECT 
    visited_on,
    lag1 + lag2 + lag3 + lag4+ lag5 + lag6 + amount as amount,
    ROUND(((lag1+lag2+lag3+lag4+lag5+lag6+amount)::DECIMAL / 7) , 2) as average_amount
FROM lags
WHERE lag6 IS NOT NULL 

-- ^^ MY SOLUTION

-- OPTIMIZED SOLUTION NOT MINE
-- ESSENTIALLY YOU GRAB THE LEFT SIDE OF THE JOIN ONLY CONTAINS DATES WHERE THE ROLLING SUM WINDOW STARTS ( 7 DAYS ) (IN THIS PROBLEM ITS 2019-01-07) 
-- THEN THE RIGHT SIDE JOIN OF ALL PREVIOUS DAYS GETS COMES IN WHERE YOU DO ALL THE CALCULATIONS
-- YOU STILL WANT TO GROUP WITH THE DATE FROM THE 1st JOIN BECAUSE THATS WHERE WE SOLIDIFIED THE MINIMUM 7 DAY ROLLING SUM WINDOW OR WHATEVER YOU WANNA CALL IT

WITH last_6_days AS (
    SELECT DISTINCT visited_on
    FROM Customer
    ORDER BY visited_on ASC
    OFFSET 6
)

SELECT c1.visited_on,
        SUM(c2.amount) AS amount,
        ROUND(SUM(c2.amount) / 7., 2)  AS average_amount
FROM last_6_days AS c1
INNER JOIN Customer AS c2
ON c2.visited_on BETWEEN c1.visited_on - 6 AND c1.visited_on
GROUP BY c1.visited_on;