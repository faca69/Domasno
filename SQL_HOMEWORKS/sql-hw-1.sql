CREATE TABLE IF NOT EXISTS student (
id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	date_of_birth DATE NOT NULL,
	enrolled_date DATE NOT NULL,
	gender BOOL NULL,
	national_id_number integer NOT NULL,
	student_card_number integer NOT NULL
	
)

SELECT * FROM student

--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS teacher (

    id SERIAL PRIMARY KEY,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	date_of_birth DATE NOT NULL,
	academic_rank VARCHAR(100) NOT NULL,
	hire_date DATE NOT NULL
	
)

SELECT * FROM teacher

--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS grade_details (

id SERIAL PRIMARY KEY,
	grade_id integer NOT NULL,
	achievement_type_id integer NOT NULL,
	achievement_points integer NOT NULL,
	achievement_max_points integer NOT NULL,
	achievement_date DATE NOT NULL

)

SELECT * FROM grade_details

--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS course (

id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
	credit integer NOT NULL,
	academic_year DATE NOT NULL,
	semester integer NOT NULL
	

)


SELECT * FROM course


--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS grade (

id SERIAL PRIMARY KEY,
	student_id integer NOT NULL,
	course_id integer NOT NULL,
	teacher_id integer NOT NULL,
	grade integer NOT NULL,
	commment VARCHAR(300) NOT NULL,
	created_date TIMESTAMP NOT NULL
	
)

SELECT * FROM grade


--------------------------------------------------------------------------------


CREATE TABLE IF NOT EXISTS achievement_type (

id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(250) NOT NULL,
	participation_rate integer NOT NULL

)

SELECT * FROM achievement_type

--------------------------------------------------------------------------------


INSERT INTO student (first_name, last_name, date_of_birth, enrolled_date, gender, national_id_number, student_card_number)
VALUES
    ('John', 'Doe', '1995-03-15', '2022-09-01', TRUE, 1, 2),
    ('Jane', 'Smith', '1996-06-20', '2022-09-01', FALSE, 3, 4),
    ('Alex', 'Johnson', '1997-01-10', '2022-09-01', NULL, 5, 6);

INSERT INTO teacher (first_name, last_name, date_of_birth, academic_rank, hire_date)
VALUES
    ('Michael', 'Brown', '1980-05-25', 'Professor', '2015-09-01'),
    ('Emily', 'Davis', '1982-10-10', 'Associate Professor', '2018-01-15'),
    ('David', 'Wilson', '1975-12-30', 'Assistant Professor', '2020-03-20');

INSERT INTO grade_details (grade_id, achievement_type_id, achievement_points, achievement_max_points, achievement_date)
VALUES
    (1, 1, 90, 100, '2022-10-15'),
    (2, 2, 85, 100, '2022-10-20'),
    (3, 3, 95, 100, '2022-10-25');

INSERT INTO course (name, credit, academic_year, semester)
VALUES
    ('Mathematics', 3, '2022-09-01', 1),
    ('History', 4, '2023-04-05', 1),
    ('Biology', 3, '2021-09-21', 2);

INSERT INTO grade (student_id, course_id, teacher_id, grade, commment, created_date)
VALUES
    (1, 1, 1, 95, 'Excellent performance', '2022-10-15'),
    (2, 2, 2, 88, 'Good effort', '2022-10-20'),
    (3, 3, 3, 92, 'Impressive work', '2022-10-25');

INSERT INTO achievement_type (name, description, participation_rate)
VALUES
    ('Attendance', 'Attendance in class sessions', 5),
    ('Assignment', 'Grade for assignments', 10),
    ('Exam', 'Grade for exams', 85);






