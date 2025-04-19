-- https://datalemur.com/questions/spotify-streaming-history

-- You're given two tables containing data on Spotify users' streaming activity: songs_history which has historical streaming data, and songs_weekly which has data from the current week.

-- Write a query that outputs the user ID, song ID, and cumulative count of song plays up to August 4th, 2022, sorted in descending order.

-- Assume that there may be new users or songs in the songs_weekly table that are not present in the songs_history table.

-- Definitions:
--     song_weeklytable only contains data for the week of August 1st to August 7th, 2022.
--     songs_history table contains data up to July 31st, 2022. The query should include historical data from this table.


-- songs_history Table:
-- history_id	integer
-- user_id	integer
-- song_id	integer
-- song_plays	integer

-- songs_weekly Table:
-- user_id	integer
-- song_id	integer
-- listen_time	datetime

-- this problem sucks


WITH weekly_counts as (
  SELECT
    user_id,
    song_id,
    COUNT(song_id)
  FROM songs_weekly
  WHERE listen_time < '8-05-2022'
  GROUP BY user_id,song_id
)

SELECT 
  COALESCE(wc.user_id, sh.user_id),
  COALESCE(wc.song_id, sh.song_id),
  COALESCE(sh.song_plays, 0) + COALESCE(wc.count,0) as song_plays
FROM weekly_counts wc
FULL OUTER JOIN songs_history sh
  ON wc.user_id = sh.user_id
    AND wc.song_id = sh.song_id
ORDER BY song_plays desc
