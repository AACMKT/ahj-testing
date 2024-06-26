# Tests arranging

[![Build status](https://ci.appveyor.com/api/projects/status/7pbqkaumrlr35vkh?svg=true)](https://ci.appveyor.com/project/AACMKT/ahj-testing)


[Ссылка на публикацию приложения на GitHub Pages](https://aacmkt.github.io/ahj-testing/)

---

## Описание

Создано приложение для валидации номеров банковских карт и обеспечено покрытие тестами методов, отвечающих за "логику" приложения.

Приложение представляет собой простой микросервис для валидации номеров банковских карт которое обеспечивает следующий функционал:

- проверка, что введенный номер состоит из только из цифр
- проверка, что овведенный номер длиннее 12 цифр
- проверка валидности номера карты согласно алгоритму Луна
- проверка на принадлежность номера карты платежному сервису.

Структура приложения:

- реализация интерфейса в классе [Interface](./src/js/interface.js)
- реализация методов валидации карты в классе [Validator](./src/js/validator.js)
- реализация общей логики в модуле [app](./src/js/app.js)

---

Обеспечено покрытие тестами класса Validator.
