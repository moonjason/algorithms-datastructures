-- Table: Sales
-- +-------------+-------+
-- | Column Name | Type  |
-- +-------------+-------+
-- | sale_id     | int   |
-- | product_id  | int   |
-- | year        | int   |
-- | quantity    | int   |
-- | price       | int   |
-- +-------------+-------+
-- (sale_id, year) is the primary key (combination of columns with unique values) of this table.
-- product_id is a foreign key (reference column) to Product table.
-- Each row of this table shows a sale on the product product_id in a certain year.
-- Note that the price is per unit.


-- Table: Product
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | product_id   | int     |
-- | product_name | varchar |
-- +--------------+---------+
-- product_id is the primary key (column with unique values) of this table.
-- Each row of this table indicates the product name of each product.


-- Write a solution to select the product id, year, quantity, and price for the first year of every product sold.
-- Return the resulting table in any order.

WITH first_years as (
    SELECT product_id, MIN(year) as first_year FROM Sales GROUP BY product_id
)

SELECT
    s.product_id,
    s.year as first_year,
    s.quantity,
    s.price
FROM Sales s
JOIN Product p
    ON s.product_id = p.product_id
JOIN first_years fy
    ON fy.product_id = s.product_id
WHERE fy.first_year = s.year
