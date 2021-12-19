# Критерии приема

- Создан репозиторий `goit-react-hw-07-phonebook`
- Использована библиотека `Redux Toolkit`

## Телефонная книга

Выполни рефакторинг кода приложения
[«Телефонная книга»](https://github.com/Eduard-Konovka/goit-react-hw-06-phonebook).
Удали код отвечающий за хранение и чтение контактов из локального хранилища и
добавь работу с бекендом для хранения контактов.

Создай бекенд для разработки при помощи UI-сервиса
[mockapi.io](https://mockapi.io). Зарегистрируйся используя свой аккаунт GitHub.

Создай ресурс `contacts` чтобы получить ендпоинт `/contacts`. Используй
конструктор ресурса и опиши объект контакта как на иллюстрации.

<img src="https://github.com/goitacademy/react-homework/blob/master/homework-07/resource.png" alt="Contact schema" with="400" />

Используй функцию
[createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для
взаимодействия с бекендом и асинхронными запросами.
