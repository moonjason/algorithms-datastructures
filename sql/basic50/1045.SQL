-- https://leetcode.com/problems/customers-who-bought-all-products/description/?envType=study-plan-v2&envId=top-sql-50

SELECT
    c.customer_id
FROM Customer c
GROUP BY c.customer_id
HAVING COUNT(distinct c.product_key) = (SELECT COUNT(DISTINCT product_key) FROM Product)