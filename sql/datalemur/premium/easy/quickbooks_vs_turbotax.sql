-- https://datalemur.com/questions/quickbooks-vs-turbotax

-- Intuit provides a range of tax filing products, including TurboTax and QuickBooks, available in various versions.

-- Write a query to determine the total number of tax filings made using TurboTax and QuickBooks. Each user can file taxes once a year using only one product.

-- filed_taxes Table:
-- filing_id	integer
-- user_id	varchar
-- filing_date	datetime
-- product	varchar

SELECT
  COUNT(filing_id) FILTER(WHERE product LIKE 'TurboTax%') as turbotax_total,
  COUNT(filing_id) FILTER(WHERE product LIKE 'QuickBooks%') as quickbooks_total
FROM filed_taxes
