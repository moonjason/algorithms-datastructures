-- https://datalemur.com/questions/booking-referral-source
WITH ranked_bookings as (
  SELECT
    *,
    ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY booking_date) as booking_rank
  FROM bookings b
  JOIN booking_attribution ba 
    ON b.booking_id = ba.booking_id 
), first_booking_counts as (
  SELECT 
    channel, 
    COUNT(booking_rank) FILTER(WHERE booking_rank = 1) as ct
  FROM ranked_bookings
  GROUP BY channel
), percentages as (
  SELECT 
    channel,
    ct,
    ROUND(100.0 * ct / SUM(ct) OVER(), 2) AS percentage
  FROM first_booking_counts
)

SELECT 
  channel,
  percentage::INTEGER as first_booking_pct
FROM percentages 
order by percentage desc
LIMIT 1