--- Getting all registers from the table employees
select * from employees e 

--- Getting register filtering by id
select * from employees e where e.employee_id = 545

--- Getting register filtering by name
select * from employees e where e.first_name = 'Anna'

--- Getting register filtering by name starting with 'Anna'
select * from employees e where e.first_name like 'Anna%'

--- Getting register filtering by name containing 'Anna'
select * from employees e where e.first_name like '%Anna%'

--- Getting register filtering by id between 1 and 10
select * from employees e where e.employee_id between 1 and 10

--- Getting register filtering by id not between 1 and 100
select * from employees e where e.employee_id not between 1 and 100

--- Getting register filtering by email containing 'google'
select * from employees e where e.email like '%google%'

-- Getting register filtering by email containing 'google' or 'hotmail'
select * from employees e where e.email like '%google%' or e.email like '%hotmail%'

--- Getting employees and country desc
SELECT E.*, C.* 
FROM employees AS E
INNER JOIN countries AS C ON E.country_id = C.country_id 

--- Getting employee name and country name
SELECT E.first_name , E.last_name , C.country_desc 
FROM employees AS E
INNER JOIN countries AS C ON E.country_id = C.country_id 

--- Getting all data of employeees , country, evaluations


--- Getting employee name and country name and evaluation desc
SELECT E.first_name , E.last_name , C.country_desc , EV.evaluations_desc 
FROM employees AS E
INNER JOIN countries AS C ON E.country_id = C.country_id 
INNER JOIN evaluations AS EV ON E.evaluations_id = EV.evaluations_id 

--- Get deparment of employees that got a evaluation of 'good'
SELECT E.first_name , E.last_name , EV.evaluations_desc , D.department_name 
FROM employees AS E
INNER JOIN departments AS D ON E.department_id = D.department_id 
INNER JOIN evaluations AS EV 
ON E.evaluations_id = EV.evaluations_id 
AND EV.evaluations_number = 3

--- Getting count of employees that got a evaluation of 'good' by deparments
SELECT D.department_name , count(1)
FROM employees AS E
INNER JOIN departments AS D ON E.department_id = D.department_id 
INNER JOIN evaluations AS EV 
ON E.evaluations_id = EV.evaluations_id 
AND EV.evaluations_number = 3
GROUP BY 1

--- Get AVG evaluation by country
SELECT C.country_desc , AVG(EV.evaluations_number)
FROM employees AS E
INNER JOIN countries AS C ON E.country_id = C.country_id 
INNER JOIN evaluations AS EV ON E.evaluations_id = EV.evaluations_id
GROUP BY 1

--- Get AVG by gender 
SELECT G.gender_desc , AVG(EV.evaluations_number)
FROM employees AS E
INNER JOIN genders AS G ON E.gender_id = G.gender_id 
INNER JOIN evaluations AS EV ON E.evaluations_id = EV.evaluations_id
GROUP BY 1

---group salary by gender
SELECT  g.gender_desc , AVG(e.salary) 
FROM employees AS e
INNER JOIN genders AS g 
ON e.gender_id = g.gender_id 
GROUP BY  g.gender_desc 


---group salary by gender in portugal e indonesia
SELECT c.country_desc ,g.gender_desc , AVG(e.salary) 
FROM employees AS e
INNER JOIN genders AS g 
ON e.gender_id = g.gender_id 
INNER JOIN countries c ON e.country_id = c.country_id AND c.country_id BETWEEN 2 AND 4
GROUP BY  1,2 

-- get genders count from costarica an kazakhstan
SELECT c.country_desc , g.gender_desc , count(1)
FROM employees AS e
INNER JOIN genders AS g 
ON e.gender_id = g.gender_id 
INNER JOIN countries c ON e.country_id = c.country_id AND c.country_id BETWEEN 6 AND 7
GROUP BY  1

--- get data from kazakhstan an palestina group by department and gender  + count
SELECT c.country_desc , d.department_name ,g.gender_desc , count(1)
FROM employees AS e
INNER JOIN genders AS g 
ON e.gender_id = g.gender_id 
INNER JOIN countries c ON e.country_id = c.country_id AND c.country_id BETWEEN 5 AND 6
INNER  JOIN departments d ON e.department_id = d.department_id 
GROUP BY  1,2

--- get data to consume in python

SELECT e.first_name , e.last_name , 
		e.salary , c.company_name , 
		d.department_name , g.gender_desc , 
		j.job_desc , c2.country_desc ,
		e.date_hire
FROM employees AS e
INNER JOIN companies c ON e.company_id = c.company_id 
INNER JOIN departments d  ON e.department_id = d.department_id 
INNER JOIN genders g ON e.gender_id = g.gender_id 
INNER JOIN jobs j ON e.job_id = j.job_id 
INNER JOIN countries c2 ON e.country_id = c2.country_id 

--- creating table as select
CREATE TABLE data_to_python
SELECT e.first_name , e.last_name , 
		e.salary , c.company_name , 
		d.department_name , g.gender_desc , 
		j.job_desc , c2.country_desc ,
		e.date_hire
FROM employees AS e
INNER JOIN companies c ON e.company_id = c.company_id 
INNER JOIN departments d  ON e.department_id = d.department_id 
INNER JOIN genders g ON e.gender_id = g.gender_id 
INNER JOIN jobs j ON e.job_id = j.job_id 
INNER JOIN countries c2 ON e.country_id = c2.country_id 