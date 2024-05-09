# 6장 예제

## useState

### Basic use State examples

### Text field

MyInput.js

```jsx
import { useState } from "react";
export default function MyInput() {
  const [text, setText] = useState("hello");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}
```

![Untitled](https://github.com/mainug/React/assets/48702167/06fe04f3-0671-45c2-abaf-4f1837c11b4d)


### Checkbox

```jsx
import { useState } from "react";
export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);
  function handleChange(e) {
    setLiked(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I liked
        this
      </label>
      <p>You {liked ? "liked" : "did not like"} this.</p>
    </>
  );
}
```

![Untitled 1](https://github.com/mainug/React/assets/48702167/045002be-fe15-4d74-95be-94b50850b307)


![Untitled 2](https://github.com/mainug/React/assets/48702167/350d3f9c-7e92-4d5f-9b80-a339bf1de453)


### Form (two variables)

```jsx
import { useState } from "react";
export default function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}
```

![Untitled 3](https://github.com/mainug/React/assets/48702167/6b714bb4-ddb6-4186-940f-05a40de6d2d4)


![Untitled 4](https://github.com/mainug/React/assets/48702167/aa64e3ea-ad7b-4275-9923-0190cd69114d)


### The difference between passing an updater and passing the next state directly example

### passing the next state directly

```jsx
import { useState } from "react";
export default function Counter() {
  const [age, setAge] = useState(42);
  function increment() {
    setAge(age + 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
```

![Untitled 5](https://github.com/mainug/React/assets/48702167/c8b3bcc5-d8f9-4633-a78d-21a6038cdf4d)


updater function을 패스하지 못해 무슨 버튼을 누르든 1씩 증가

### Passing the updater function

```jsx
import { useState } from "react";
export default function Counter() {
  const [age, setAge] = useState(42);
  function increment() {
    setAge((a) => a + 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
```

![Untitled 6](https://github.com/mainug/React/assets/48702167/7fb4c8b7-82b0-413f-9cd4-ac940b9a67bb)


이제는 +3 버튼이 제대로 작동하는 모습

## Examples of objects and arrays in state

### Form (object)

```jsx
import { useState } from "react";
export default function Form() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
  });
  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
```

![Untitled 7](https://github.com/mainug/React/assets/48702167/ae7cc30b-a639-4931-ab66-f6c57d30ea05)


### Form (nested object)

```jsx
import { useState } from "react";
export default function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }
  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }
  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }
  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
```

![Untitled 8](https://github.com/mainug/React/assets/48702167/a38aedbf-f789-44ab-a1e7-9d4911426fa7)


### List (array)

```jsx
import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";
let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];
export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }
  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }
  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
```

```jsx
import { useState } from "react";
export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
```

```jsx
import { useState } from "react";
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
```

![Untitled 9](https://github.com/mainug/React/assets/48702167/12a4bbeb-9dc8-4724-841f-26c85fe76544)


## The difference between passing an initializer and passing the initial state directly example

### Passing the initializer function(이니셜라이저 함수 패싱)

```jsx
import { useState } from "react";
function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}
export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
```

![Untitled 10](https://github.com/mainug/React/assets/48702167/242f2c56-dfef-40cb-a446-3935d6580703)


![Untitled 11](https://github.com/mainug/React/assets/48702167/e8f44667-e6b5-47ce-b075-c1dca6cc26ff)


문자 입력 후 Add 누르면 리스트 추가

### Passing the initial state directly(초기 상태를 직접 패싱)

```jsx
import { useState } from "react";
function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}
export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
```

이니셜라이저 함수를 전달하지 않으므로 input에 입력할 때와 같은 모든 렌더에서 createInitialTodos 함수가 실행된다. 동작에서 눈에 띄는 차이는 없지만 이 코드는 효율성이 떨어진다

### Storing information from previous renders

```jsx
import { useState } from "react";
import CountLabel from "./CountLabel.js";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
}
```

```jsx
import { useState } from "react";
export default function CountLabel({ count }) {
  const [prevCount, setPrevCount] = useState(count);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}
```

![Untitled 12](https://github.com/mainug/React/assets/48702167/5be76582-d103-479c-83e2-d10840b583f6)


![Untitled 13](https://github.com/mainug/React/assets/48702167/4ef32e11-eab8-471c-8de8-1f8cbbd5d18c)


![Untitled 14](https://github.com/mainug/React/assets/48702167/dccc5974-755f-4946-a4c1-c0679ce0e199)


Increment, Decrement를 누르면 그에 맞춰 아래에 문구가 출력
