-- You're given a list of numbers representing the number of emails in the inbox of Microsoft Outlook users. Before the Product Management team can start developing features related to bulk-deleting email or achieving inbox zero, they simply want to find the mean, median, and mode for the emails.

-- Display the output of mean, median and mode (in this order), with the mean rounded to the nearest integer. It should be assumed that there are no ties for the mode.

-- inbox_stats Table:
-- user_id	integer
-- email_count	integer

SELECT
  SUM(email_count)/COUNT(email_count) as mean,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY email_count) as median,
  MODE() WITHIN GROUP (ORDER BY email_count) as mode
FROM inbox_stats