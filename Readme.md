# Фронтенд Code Style JoyTech. Критерии
<img src="title-flex.jpg" width="70px" title="Title-flex">&nbsp;<img src="title-flex.jpg" width="70px" title="Title-flex">&nbsp;<img src="title-flex.jpg" width="70px" title="Title-flex">

## Нейминг переменных/констант/функций

:page_with_curl: Н1. Название переменных, параметров, свойств и методов записываются в нотации camelCase.

:page_with_curl: Н2. Названия констант (постоянных значений) записываются в нотации UPPER_SNAKE_CASE:
```jsx
const MAX_HEIGHT = 400;
const DEFAULT_TIME = 1000;
```

:page_with_curl: Н3. Массивы названы существительными во множественном числе:
```jsx
const frameworks = ['Next', 'Vue', 'JQuery'];
const evenNumbers = [2, 10, 44];
```

:page_with_curl: Н4. Название функции должно быть глаголом и соответствовать действию, которое она выполняет *(исключения - функции-обработчики/колбэки)*: 
```jsx
const getRandomNumber = () => Math.random();
const printNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};
```

:page_with_curl: Н5. Сокращённые названия переменных можно использовать, только если такое название широко распространено. Допустимые сокращения:
  - `evt` или `e` для объектов Event и его производных (MouseEvent, KeyboardEvent и подобные)
  - `i`, `j`, `k`, `l`, `t` для счётчика в цикле
  - `cb` для единственного колбэка в параметрах функции
  - `btn` для `button`

[Текст ссылки](#hmm)
## Стили

:page_with_curl: C1. В названиях классов использованы английские слова и термины. Отсутствует транслит и сокращения. Названия классов понятны и должны кратко описывать её предназначение. Популярные названия:
```scss
/*--- Блоки ---*/
.block, .section, .sidebar, .content, .section, .card {}

/*--- Обёртки ---*/
.wrapper, .innerWrapper, .container, .innerContainer, .drawer {}

/*--- Текст---*/
.caption, .title, .subtitle, .text, .tag, .slogan, .lead, .description, .copyright {}

/*--- Списки ---*/
.list, .item {}

/*--- Элементы управления ---*/
.popup, .pagination, .modal, .tooltip, .breadcrumbs {}
```

:page_with_curl: C2. Стили текста задаются один раз в `body`, и они автоматом применятся ко всем элементам
```scss
body {
  background: url("images/cat.jpg");
  margin-bottom: 0;
  font-size: 14px;
}
```

:page_with_curl: С2. Перед открывающейся фигурной скобкой стоит пробел. После скобки запись идёт с новой строки. Во всех случаях в стилях использованы двойные кавычки.
<table>
  <tr>
    <td>:white_check_mark: Good</td>
    <td>:x: Bad</td>
  </tr>
  <tr>
    <td>
      
```scss
.block {
  background: url("images/cat.jpg");
  margin-bottom: 0;
  font-size: 14px;
}

.title {
  font-size: 10px;
}

```
</td>
<td>
    
```scss
.block {
  background-image: url('images/cat.jpg');
  margin-bottom: 0;
  font-size: 14px;
}
.title {
  font-size: 10px;
}
```

</td>
</tr>
</table>

:page_with_curl: С2. Ключевое слово `!important` не использовано для борьбы со специфичностью. Допустимо для переопределения библиотек.


## React

:page_with_curl: Р1. Структура каждого TSX-файла:
  - Импорты
  - Описание типа компонента (props)
  - Код компонента
  - Экспорты

:page_with_curl: Р2. Порядок написания кода компоненты: *стейты &rarr; store &rarr; api-запросы &rarr; остальная логика &rarr; содержимое компоненты*
```jsx
// Стейты
const [open, setOpen] = useState(false);
const [isVisible, setIsVisible] = useState(true);

// Store
const {name, setName} = useStore();

// API
const {mutate, isLoading} = useMutation(phoneCheckFetcher);
const {data} = useRegions();
const {data: dataProfile, isSuccess: isSuccessProfile} = useProfile();

// Остальная логика
// ...

// Содержимое компоненты
return (<MyComponent><MyComponent/>);
```

:page_with_curl: Р6. В компонентах отсутствует прямое обращение к DOM-элементам (например, document.querySelector). Если требуется получить доступ к DOM-элементу, применяются ссылки (ref).

## Next

:page_with_curl: E1. Чтение параметров из адресной строки проводится только через getServerSideProps:
```jsx
export async function getServerSideProps(params) {
  return {props: {...params.query}}
}

const MyPage = ({id}) => {
  console.log(id);
}

```
<a name="hmm"></a> 
