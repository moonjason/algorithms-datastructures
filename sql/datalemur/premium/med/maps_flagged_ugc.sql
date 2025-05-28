-- https://datalemur.com/questions/off-topic-maps-ugc

-- As a Data Analyst on the Google Maps User Generated Content team, you and your Product Manager are investigating user-generated content (UGC) – photos and reviews that independent users upload to Google Maps.

-- Write a query to determine which type of place (place_category) attracts the most UGC tagged as "off-topic". In the case of a tie, show the output in ascending order of place_category.

-- Assumptions:

--     Some places may not have any tags.
--     Each UGC upload with the "off-topic" tag will be counted separately.

-- place_info Table:
-- Column Name	Type
-- place_id	integer
-- place_name	varchar
-- place_category	varchar
-- place_info Example Input:
-- place_id	place_name	place_category
-- 1	Baar Baar	Restaurant
-- 2	Rubirosa	Restaurant
-- 3	Mr. Purple	Bar
-- 4	La Caverna	Bar

-- maps_ugc_review Table:
-- Column Name	Type
-- content_id	integer
-- place_id	integer
-- content_tag	varchar

-- Example Output:
-- off_topic_places
-- Restaurant

WITH counts as (
  SELECT 
    pi.place_category,
    COUNT(content_tag) FILTER(WHERE content_tag='Off-topic') as ct
  FROM place_info pi
  JOIN maps_ugc_review mur
    ON pi.place_id = mur.place_id
  GROUP BY pi.place_category
  ORDER BY ct DESC
)

SELECT 
  place_category AS off_topic_places
FROM counts
WHERE ct = (SELECT MAX(ct) FROM counts)
