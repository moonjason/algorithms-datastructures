-- https://datalemur.com/questions/marketing-touch-streak

--refactored after original submission, reduced CTE amount from 5 to 3 by combining week extract and row numbering 


WITH valid_contacts as (
  SELECT 
    contact_id
  FROM marketing_touches
  WHERE event_type = 'trial_request'
), weeks_numbered as (
  SELECT
    *,
    EXTRACT(week FROM event_date) -ROW_NUMBER() OVER(PARTITION BY contact_id ORDER BY event_date) 
 as diff_key
  FROM marketing_touches
), streak_lengths as (
  SELECT 
    contact_id,
    diff_key,
    COUNT(*) as streak_length
  FROM weeks_numbered
  GROUP BY contact_id, diff_key
)

SELECT 
  cc.email
FROM streak_lengths sl
JOIN crm_contacts cc
  ON sl.contact_id = cc.contact_id
WHERE streak_length >= 3
  AND sl.contact_id IN (SELECT * FROM valid_contacts)
