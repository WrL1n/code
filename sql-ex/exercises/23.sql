-- Схема БД состоит из четырех таблиц:
-- Product(maker, model, type)
-- PC(code, model, speed, ram, hd, cd, price)
-- Laptop(code, model, speed, ram, hd, price, screen)
-- Printer(code, model, color, type, price)

-- Таблица Product представляет производителя (maker), номер модели (model) и тип
-- ('PC' - ПК, 'Laptop' - ПК-блокнот или 'Printer' - принтер).

-- Предполагается, что номера моделей в таблице Product уникальны для всех производителей и типов продуктов.
-- В таблице PC для каждого ПК, однозначно определяемого уникальным кодом – code,
-- указаны модель – model (внешний ключ к таблице Product),
-- скорость - speed (процессора в мегагерцах),
-- объем памяти - ram (в мегабайтах), размер диска - hd (в гигабайтах),
-- скорость считывающего устройства - cd (например, '4x') и цена - price (в долларах).

-- Таблица Laptop аналогична таблице РС за исключением того, что вместо скорости CD содержит размер экрана -screen (в дюймах).
-- В таблице Printer для каждой модели принтера указывается, является ли он цветным - color ('y', если цветной),
-- тип принтера - type (лазерный – 'Laser', струйный – 'Jet' или матричный – 'Matrix') и цена - price.



-- Найдите производителей, которые производили бы как ПК
-- со скоростью не менее 750 МГц, так и ПК-блокноты со скоростью не менее 750 МГц.
-- Вывести: Maker

Select distinct maker from Product
where type='pc' and
      model IN(select model from PC
               where speed >= 750)
INTERSECT
select distinct maker from Product
where type='Laptop' and
      model IN(select model from Laptop
               where speed >= 750)
