-- Followers
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | user_id     | int  |
-- | follower_id | int  |
-- +-------------+------+
-- (user_id, follower_id) is the primary key (combination of columns with unique values) for this table.
-- This table contains the IDs of a user and a follower in a social media app where the follower follows the user.

-- Write a solution that will, for each user, return the number of followers.
-- Return the result table ordered by user_id in ascending order.
-- The result format is in the following example.

-- MY NOTES:
-- THIS IS CONFUSING BECAUSE THE TABLE IS CALLED FOLLOWERS, BUT THE QUESTION IS ASKING FOR THE NUMBER OF FOLLOWERS FOR EACH USER
-- SO THE FOLLOWER_ID IS THE USER_ID AND THE USER_ID IS THE FOLLOWER_ID
-- SO WE NEED TO COUNT THE NUMBER OF FOLLOWERS FOR EACH USER_ID

-- BASICALLY EACH ROW DISPLAYS A FOLLOWER FOR A USER, SO WE NEED TO COUNT THE NUMBER OF ROWS FOR EACH USER_ID
-- THE QUESTION IS HARDER THAN IT LOOKS
SELECT
    user_id,
    COUNT(follower_id) as followers_count
FROM Followers f
GROUP BY user_id
ORDER BY user_id