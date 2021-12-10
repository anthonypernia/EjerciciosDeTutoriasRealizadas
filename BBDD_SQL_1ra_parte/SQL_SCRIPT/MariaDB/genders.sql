

create table genders (
    gender_id INT auto_increment PRIMARY KEY NOT NULL,
	gender_desc VARCHAR(50),
	gender_abbrev VARCHAR(50)
);

insert into genders (gender_desc, gender_abbrev) values ('Non-binary', 'NB');
insert into genders (gender_desc, gender_abbrev) values ('Female', 'F');
insert into genders (gender_desc, gender_abbrev) values ('Male', 'M');
