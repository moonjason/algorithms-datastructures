-- https://leetcode.com/problems/find-product-recommendation-pairs/description/

-- Table: ProductPurchases
-- +-------------+------+
-- | Column Name | Type | 
-- +-------------+------+
-- | user_id     | int  |
-- | product_id  | int  |
-- | quantity    | int  |
-- +-------------+------+
-- (user_id, product_id) is the unique key for this table.
-- Each row represents a purchase of a product by a user in a specific quantity.


-- Table: ProductInfo
-- +-------------+---------+
-- | Column Name | Type    | 
-- +-------------+---------+
-- | product_id  | int     |
-- | category    | varchar |
-- | price       | decimal |
-- +-------------+---------+
-- product_id is the primary key for this table.
-- Each row assigns a category and price to a product.

-- Amazon wants to implement the Customers who bought this also bought... feature based on co-purchase patterns. Write a solution to :
--     Identify distinct product pairs frequently purchased together by the same customers (where product1_id < product2_id)
--     For each product pair, determine how many customers purchased both products

-- A product pair is considered for recommendation if at least 3 different customers have purchased both products.
-- Return the result table ordered by customer_count in descending order, and in case of a tie, by product1_id in ascending order, and then by product2_id in ascending order.

 -- Weird ass problem, not my solution 

SELECT 
    pp1.product_id as product1_id, 
    pp2.product_id as product2_id, 
    pi1.category as product1_category,
    pi2.category as product2_category,
    COUNT(pp1.user_id) as customer_count 
FROM ProductPurchases pp1 
JOIN ProductPurchases pp2 
    on pp1.user_id = pp2.user_id
JOIN ProductInfo pi1 
    on pp1.product_id = pi1.product_id
JOIN ProductInfo pi2 
    on pp2.product_id = pi2.product_id
WHERE pp1.product_id != pp2.product_id 
    and pp1.product_id < pp2.product_id
GROUP BY pp1.product_id, pp2.product_id, pi1.category, pi2.category
HAVING COUNT(pp1.user_id) >= 3
ORDER BY customer_count DESC, pp1.product_id, pp2.product_id