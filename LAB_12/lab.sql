CREATE DATABASE university;

 SHOW DATABASES;

 USE university;

 CREATE TABLE faculty
 (
    id                INT AUTO_INCREMENT NOT NULL,
    faculty_name      VARCHAR(255),
    PRIMARY KEY (id)
  ) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB
 ;
 INSERT INTO faculty (faculty_name) VALUES ('ФИиВТ'), ('ИСА'), ('ЭФ');
 

 CREATE TABLE class
 (
    id                INT AUTO_INCREMENT NOT NULL,
    class_name      VARCHAR(255),
    faculty_id INT,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id),
    PRIMARY KEY (id)
  ) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB
 ;

INSERT INTO class (class_name, faculty_id) 
VALUES 
  ('ПС-11', 1), 
  ('ПС-12', 1),
  ('ПС-13', 1),
  ('АРХ-11', 2),
  ('АРХ-12', 2),
  ('АРХ-13', 2),
  ('ЭКО-11', 3),
  ('ЭКО-12', 3),
  ('ЭКО-13', 3)
;
  

 CREATE TABLE stydent
 (
    id                INT AUTO_INCREMENT NOT NULL,
    stydent_name      VARCHAR(255),
    stydent_surname   VARCHAR(255),
    patronymic        VARCHAR(255),
    age               INT,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES class(id),
    PRIMARY KEY (id)
  ) DEFAULT CHARACTER SET utf8mb4
    COLLATE 'utf8mb4_unicode_ci'
    ENGINE = InnoDB
 ;

INSERT INTO stydent (stydent_name, stydent_surname, patronymic, age, class_id) 
VALUES 
  ('Данил', 'Аламбаев', 'Алексеевич', 18, 1),
  ('Дмитрий', 'Александров', 'Владимирович', 18, 1),
  ('Анна', 'Александрова', 'Алексеевна', 19, 1),
  ('Николай', 'Аникин', 'Николаевич', 18, 1),
  ('Артём', 'Арсибеков', 'Артурович', 18, 1),
  ('Павел', 'Архипов', 'Дмитриевич', 18, 2),
  ('Андрей', 'Ахметов', 'Алексеевич', 18, 2),
  ('Антон', 'Баранов', 'Сергеевич', 18, 2),
  ('Екатерина', 'Бахтина', 'Александровна', 19, 2),
  ('Олег', 'Безносюк', 'Николаевич', 18, 2),
  ('Ксения', 'Большакова', 'Валерьевна', 18, 3),
  ('Ольга', 'Васильева', 'Александровна', 18, 3),
  ('Егор', 'Видякин', 'Дмитриевич', 19, 3),
  ('Ростислав', 'Глизерин', 'Михайлович', 18, 3),
  ('Илья', 'Головин', 'Владимирович', 18, 3),
  ('Александра', 'Голомидова', 'Дмитриевна', 18, 4),
  ('Мария', 'Горник', 'Юрьевна', 19, 4),
  ('Владимир', 'Данилов', 'Владимирович', 18, 4),
  ('Павел', 'Данилов', 'Андреевич', 18, 4),
  ('Георгий', 'Дмитриев', 'Максимович', 18, 4),
  ('Денис', 'Желаев', 'Владимирович', 18, 5),
  ('Татьяна', 'Журавлёва', 'Олеговна', 18, 5),
  ('Андрей', 'Иванов', 'Владимирович', 18, 5),
  ('Дмитрий', 'Кирилов', 'Александрович', 18, 5),
  ('Арина', 'Комиссарова', 'Григорьевна', 18, 5),
  ('Дмитрий', 'Крюков', 'Александрович', 18, 6),
  ('Вадим', 'Кузнецов', 'Алексеевич', 18, 6),
  ('Роман', 'Куликов', 'Андреевич', 18, 6),
  ('Данила', 'Никифоров', 'Вячеславович', 18, 6),
  ('Дарья', 'Пащенко', 'Дмитриевна', 18, 6),
  ('Подоплелов', 'Дмитрий', 'Алексеевич', 18, 7),
  ('Белов', 'Никита', 'Васильевич', 18, 7),
  ('Алексей', 'Бусыгин', 'Александрович', 18, 7),
  ('Семён', 'Волков', 'Александрович', 18, 7),
  ('Алексей', 'Зыкин', 'Андреевич', 18, 7),
  ('Артем', 'Иванов', 'Александрович', 18, 8),
  ('Дмитрий', 'Иванов', 'Юрьевич', 18, 8),
  ('Владислав', 'Игнатьев', 'Дмитриевич', 18, 8),
  ('Дмитрий', 'Ильдюков', 'Юрьевич', 18, 8),
  ('Анастасия', 'Каплунова', 'Владимировна', 18, 8),
  ('Роман', 'Кармазанов', 'Сергеевич', 18, 9),
  ('Александр', 'Катеров', 'Дмитриевич', 18, 9),
  ('Владислав', 'Кашин', 'Сергеевич', 18, 9),
  ('Александр', 'Клочко', 'Александрович', 18, 9),
  ('Илья', 'Кожевников', 'Александрович', 18, 9)
;
  SELECT*
  FROM
     stydent
  WHERE
    age = 19;

SELECT*
  FROM
     stydent
  WHERE
    class_id = 1;


 SELECT
    stydent.id,
    stydent_name,
    stydent_surname,
    age,
    class_name,
    faculty_name
 FROM
     stydent
 LEFT JOIN class 
 ON
    stydent.class_id = class.id 
 LEFT JOIN faculty
 ON
     faculty.id = class.faculty_id
 WHERE 
    class.faculty_id = 1;


SELECT
    stydent.id,
    stydent_name,
    stydent_surname,
    age,
    class_name,
    faculty_name
 FROM
     stydent 
 LEFT JOIN class 
 ON 
     stydent.class_id = class.id
 LEFT JOIN faculty
 ON
     faculty.id = class.faculty_id
 WHERE
     stydent.id = 13;