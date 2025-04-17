-- https://datalemur.com/questions/consecutive-filing-years

-- Intuit, a company known for its tax filing products like TurboTax and QuickBooks, offers multiple versions of these products.

-- Write a query that identifies the user IDs of individuals who have filed their taxes using any version of TurboTax for three or more consecutive years. Each user is allowed to file taxes once a year using a specific product. Display the output in the ascending order of user IDs.

-- filed_taxes Table:
-- filing_id	integer
-- user_id	varchar
-- filing_date	datetime
-- product	varchar



-- IN year_counts
-- WE ARE NUMBERING THE ROWS FOR EACH USER_ID, ORDERING BY FILING_DATE
-- THEN WE SUBTRACT THE YEAR FROM THAT ROW_NUMBER 
-- IF THERE ARE CONSECUTIVE YEARS EACH ROW WILL HAVE THE SAME YEAR/VALUE AS DEMONSTRATED IN GROUP_KEY

-- WHEN THEN AGGREGATE THE COUNTS OF THE SAME GROUP_KEY 
-- AKA THESE USERS HAD 3 OR MORE IN A ROW OF DOING 'X' 

WITH valid_users as (
  SELECT
    user_id
  FROM filed_taxes ft
  WHERE product LIKE 'TurboTax%'
  GROUP BY user_id
  HAVING COUNT(user_id) >= 3
), year_counts as (
  SELECT 
    *,
    EXTRACT(YEAR from filing_date) - ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY filing_date) group_key
  FROM filed_taxes
  WHERE user_id IN (SELECT * FROM valid_users)
    AND product LIKE 'TurboTax%'
  ORDER BY user_id, filing_date
), consecutive_counts as (
  SELECT 
    user_id,
    group_key,
    COUNT(*) as streak_length
  FROM year_counts
  GROUP BY user_id, group_key
)


SELECT DISTINCT user_id FROM consecutive_counts
WHERE streak_length >= 3

