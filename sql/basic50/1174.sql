-- https://leetcode.com/problems/immediate-food-delivery-ii/description/?envType=study-plan-v2&envId=top-sql-50

-- Table: Delivery

-- +-----------------------------+---------+
-- | Column Name                 | Type    |
-- +-----------------------------+---------+
-- | delivery_id                 | int     |
-- | customer_id                 | int     |
-- | order_date                  | date    |
-- | customer_pref_delivery_date | date    |
-- +-----------------------------+---------+
-- delivery_id is the column of unique values of this table.
-- The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).

 

-- If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.
-- The first order of a customer is the order with the earliest order date that the customer made. It is guaranteed that a customer has precisely one first order.
-- Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.


-- My jank solution
WITH customer_first_orders as (
    SELECT
        customer_id,
        MIN(order_date) first_order_date
    FROM Delivery 
    GROUP BY customer_id
)


SELECT 
    ROUND((COUNT(d.customer_id) FILTER(WHERE d.order_date = d.customer_pref_delivery_date)::decimal / COUNT(d.customer_id)::decimal ) * 100,2)immediate_percentage
FROM Delivery d
JOIN customer_first_orders cfo 
    ON d.customer_id = cfo.customer_id
    AND d.order_date = cfo.first_order_date


-- Slick solution

SELECT ROUND(AVG(CASE WHEN order_date = customer_pref_delivery_date THEN 1
                ELSE 0 END)*100, 2) AS immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (
                SELECT customer_id,
                    MIN(order_date)
                    FROM Delivery
                    GROUP BY customer_id
)