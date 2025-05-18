-- https://datalemur.com/questions/2nd-ride-delay
with ranked_rides as (
  SELECT 
    r.user_id,
    r.ride_date,
    u.registration_date,
    ROW_NUMBER() OVER(PARTITION BY r.user_id ORDER BY ride_date) as ride_num
  FROM users u 
  JOIN rides r 
    ON u.user_id = r.user_id
),valid_users as (
  SELECT DISTINCT
    user_id
  FROM ranked_rides
  WHERE ride_num = 1
    AND registration_date = ride_date
)



SELECT
  ROUND(AVG(EXTRACT(day fROM ride_date) - EXTRACT(day from registration_date)), 2) as average_delay
FROM ranked_rides
WHERE ride_num = 2
  AND user_id in (SELECT * FROM valid_users)