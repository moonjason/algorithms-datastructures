-- https://datalemur.com/questions/fill-missing-product

-- When accessing Accenture's retailer client's database, you observe that the category column in products table contains null values.

-- Write a query that returns the updated product table with all the category values filled in, taking into consideration the assumption that the first product in each category will always have a defined category value.

-- Assumptions:

--     Each category is expected to be listed only once in the column and products within the same category should be grouped together based on sequential product IDs.
--     The first product in each category will always have a defined category value.
--         For instance, the category for product ID 1 is 'Shoes', then the subsequent product IDs 2 and 3 will be categorised as 'Shoes'.
--         Similarly, product ID 4 is 'Jeans', then the following product ID 5 is categorised as 'Jeans' category, and so forth.

-- products Table
-- product_id	integer
-- category	varchar
-- name	varchar


WITH CTE as (
    SELECT
        *,
        COUNT(category) OVER (ORDER BY product_id) AS numbered_category
    FROM products
)

SELECT
  product_id,
  CASE 
    WHEN category IS NOT NULL THEN category
    ELSE FIRST_VALUE(category) OVER(PARTITION BY numbered_category)
  END as category,
  name
FROM CTE 


-- DATA LEMUR SOLUTION 
-- COALESCE IS CLEANER and use of MAX() is a simpler solution but ultimately the same concept

-- WITH filled_category AS (
-- SELECT
--   *,
--   COUNT(category) OVER (
--     ORDER BY product_id) AS numbered_category
-- FROM products
-- )

-- SELECT
--   product_id,
--   COALESCE(
--     category, 
--     MAX(category) OVER (PARTITION BY numbered_category)) AS category,
--   name
-- FROM filled_category;