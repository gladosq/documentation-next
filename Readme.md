# Code Style JoyTech Frontend
<img src="title-flex.jpg" width="100px" title="Title-flex">

## Нейминг

1. Название переменных, параметров, свойств и методов начинается с заглавной буквы и записываются в нотации camelCase.

2. Названия констант (постоянных значений) написаны заглавными буквами. Слова разделяются подчёркиваниями (UPPER_SNAKE_CASE):
```jsx
const MAX_HEIGHT = 400;
const DEFAULT_TIME = 1000;
```

3. Массивы названы существительными во множественном числе:
```jsx
const frameworks = ['Next', 'Vue', 'JQuery'];
const evenNumbers = [2, 10, 44];
```

4. Название функции должно быть глаголом и соответствовать действию, которое она выполняет: 
*Исключения - функции-обработчики/колбэки*
```jsx
const getRandomNumber = () => Math.random();
const printNames = (names) => {
  names.forEach((name) => {
    console.log(name);
  });
};
```

# ...

### Структура react-компонентов .tsx

1. Порядок написания компонентов сверху-вниз: фыв
*стейты -> store -> api-запросы -> остальная логика -> содержимое компоненты*
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

