-- Given the Walmart transaction and product tables, write a query to determine the count of unique product combinations that are purchased together in the same transaction, 
-- considering that there must be a minimum of two products in the transaction. Display the output in ascending order of the product combinations.

-- For instance, if there are two transactions where apples and bananas are bought together, and another transaction where bananas and soy milk are bought together,
-- the total count of unique combinations would be 2.

-- transactions Table:
-- transaction_id	integer
-- product_id	integer
-- user_id	integer
-- transaction_date	datetime

-- products Table:
-- product_id	integer
-- product_name	string 

-- Example Output:
-- combination
-- 111","222","444

WITH array_table as (
  SELECT
    transaction_id,
    ARRAY_AGG(CAST(product_id AS TEXT) ORDER BY product_id) as combination
  FROM transactions
  GROUP BY transaction_id
) 


SELECT DISTINCT
  combination
FROM array_table
WHERE ARRAY_LENGTH(combination, 1) > 1
ORDER BY combination