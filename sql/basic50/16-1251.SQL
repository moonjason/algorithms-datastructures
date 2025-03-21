-- https://leetcode.com/problems/average-selling-price/?envType=study-plan-v2&envId=top-sql-50
SELECT
    p.product_id,
    CASE 
        WHEN SUM(us.units) IS NULL THEN 0
        ELSE ROUND(SUM(p.price * us.units)::DECIMAL / SUM(us.units)::DECIMAL ,2)
    END as average_price
FROM Prices p
LEFT JOIN UnitsSold us  -- LEFT JOIN TO HANDLE WHEN UNITS SOLD TABLE IS NULL AND WE WANT TO RETURN A 0 FOR AVG PRICE HENCE CASE STATEMENT
    ON p.product_id = us.product_id
    AND us.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY p.product_id
