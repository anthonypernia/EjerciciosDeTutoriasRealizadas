
create table evaluations (
	evaluations_id INT auto_increment PRIMARY KEY NOT NULL,
	evaluations_number INT,
	evaluations_desc VARCHAR(50)
);

insert into evaluations (evaluations_number, evaluations_desc) values (1, 'Bad');
insert into evaluations (evaluations_number, evaluations_desc) values (2, 'Regular');
insert into evaluations (evaluations_number, evaluations_desc) values (3, 'Good');
insert into evaluations (evaluations_number, evaluations_desc) values (4, 'Very good');
insert into evaluations (evaluations_number, evaluations_desc) values (5, 'Excellent');