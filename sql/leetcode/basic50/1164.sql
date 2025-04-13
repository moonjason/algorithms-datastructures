-- https://leetcode.com/problems/product-price-at-a-given-date/description/?envType=study-plan-v2&envId=top-sql-50

SELECT DISTINCT product_id, 10 AS price -- ASSIGN 10 AS THE PRICE FOR PRODUCT IDS/VALUES THAT DONT EXIST BEFORE THE DATE 2019-08-16
FROM Products 
WHERE product_id NOT IN (
    SELECT DISTINCT product_id 
    FROM Products 
    WHERE change_date <= '2019-08-16'
)
UNION 
SELECT product_id, new_price AS price 
FROM Products 
WHERE (product_id, change_date) IN (  -- GET THE VALUES OF PRICES THAT EXIST BEFORE THE DATE 2019-08-16
    SELECT product_id, MAX(change_date) -- GET THE PRICE OF THE MAXIMUM DATE IF ITS BEFORE 2019-08-16 AND GET THE EXACT PRICE IF THAT DATE IS THERE 
    FROM Products 
    WHERE change_date <= '2019-08-16' 
    GROUP BY product_id
);


-- My solution attempted after several days 

SELECT product_id, new_price as price
FROM Products 
WHERE (product_id, change_date) IN (
    SELECT
        product_id,
        MAX(change_date)
    FROM Products
    WHERE change_date <= '2019-08-16'
    GROUP BY product_id
)
UNION 
SELECT product_id, 10 as price
FROM Products
WHERE product_id NOT IN (
    SELECT
        product_id
    FROM Products
    WHERE change_date <= '2019-08-16'
)