-- https://leetcode.com/problems/investments-in-2016/description/?envType=study-plan-v2&envId=top-sql-50

-- Table: Insurance

-- +-------------+-------+
-- | Column Name | Type  |
-- +-------------+-------+
-- | pid         | int   |
-- | tiv_2015    | float |
-- | tiv_2016    | float |
-- | lat         | float |
-- | lon         | float |
-- +-------------+-------+
-- pid is the primary key (column with unique values) for this table.
-- Each row of this table contains information about one policy where:
-- pid is the policyholder's policy ID.
-- tiv_2015 is the total investment value in 2015 and tiv_2016 is the total investment value in 2016.
-- lat is the latitude of the policy holder's city. It's guaranteed that lat is not NULL.
-- lon is the longitude of the policy holder's city. It's guaranteed that lon is not NULL.

-- Write a solution to report the sum of all total investment values in 2016 tiv_2016, for all policyholders who:
--     have the same tiv_2015 value as one or more other policyholders, and
--     are not located in the same city as any other policyholder (i.e., the (lat, lon) attribute pairs must be unique).

-- Round tiv_2016 to two decimal places.

WITH distinct_loc as (
    SELECT DISTINCT
        pid,
        lat,
        lon
    FROM Insurance
), tiv_2015_values as (
    SELECT DISTINCT
        pid,
        tiv_2015
    FROM Insurance
)

SELECT
    ROUND(SUM(tiv_2016)::decimal, 2) as tiv_2016
FROM Insurance i
WHERE tiv_2015 IN (SELECT tiv_2015 FROM tiv_2015_values t WHERE i.pid != t.pid )
    AND (lat, lon) NOT IN (SELECT lat,lon FROM distinct_loc dl WHERE i.pid != dl.pid)

-- OPTIMAL

    -- Use window functions to count:
    --     Number of policies with same tiv_2015 (tiv_count)
    --     Number of policies with same location (loc_count)
    -- Filter for records where:
    --     tiv_count > 1 (shared tiv_2015 values)
    --     loc_count = 1 (unique locations)
    -- Sum the tiv_2016 values for matching records
    -- Round to 2 decimal places

SELECT ROUND(SUM(tiv_2016)::DECIMAL,2) AS tiv_2016 FROM
(
    SELECT *,
        COUNT(*) OVER (PARTITION BY tiv_2015) as tiv_count,
        COUNT(*) OVER (PARTITION BY lat, lon) as loc_count
    FROM Insurance
) sub
WHERE sub.tiv_count >1 AND loc_count = 1