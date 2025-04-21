-- https://datalemur.com/questions/top-drugs-sold

-- CVS Health is trying to better understand its pharmacy sales, and how well different drugs are selling.

-- Write a query to find the top 2 drugs sold, in terms of units sold, for each manufacturer. List your results in alphabetical order by manufacturer.
-- pharmacy_sales Table:
-- product_id	integer
-- units_sold	integer
-- total_sales	decimal
-- cogs	decimal
-- manufacturer	varchar
-- drug	varchar

WITH ranked_units as (
  SELECT
    manufacturer, 
    drug,
    ROW_NUMBER() OVER(PARTITION BY manufacturer ORDER BY units_sold DESC)
  FROM pharmacy_sales 
)


SELECT
  manufacturer,
  drug
FROM ranked_units
WHERE row_number IN (1,2)
ORDER BY manufacturer