-- https://leetcode.com/problems/students-and-examinations/submissions/1579974265/?envType=study-plan-v2&envId=top-sql-50
-- Write your PostgreSQL query statement below
SELECT
    s.student_id,
    s.student_name,
    su.subject_name,
    COUNT(e.subject_name) attended_exams
FROM Students s
CROSS JOIN Subjects su -- needed because we want to see 0 values for subjects they didn't attend
LEFT JOIN Examinations e
    ON s.student_id = e.student_id
    AND su.subject_name = e.subject_name -- needed so we don't count duplicate subjects since subject_name also exists in su table
GROUP BY s.student_id, s.student_name, su.subject_name
ORDER BY s.student_id, su.subject_name

-- WHEN YOU DO A CROSS JOIN... YOU NEED USUALLY NEED TO DO AN EXTRA CHECK SO YOUR AGGREGATES ARE ACCURATE (DON'T COUNT DUPES)