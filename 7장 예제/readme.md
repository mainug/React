# 7장 예제

## useReducer 예시 1 (init 함수를 사용하지 않는 counter 예시)

### Counter.js

```jsx
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        default:
            throw new Error("unsupported action type: ", action.type);
    }
}

const Counter = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
                감소
            </button>
            <button onClick={() => dispatch({ type: "kkkkkkkkk", payload: 1 })}>
                에러
            </button>
        </>
    );
};

export default Counter;
```

### 결과

![Untitled](https://github.com/mainug/React/assets/48702167/f6e6e6fe-e1b9-4480-99a5-d898c71c0eea)


증가를 누른 만큼 1씩 값이 증가

감소를 누른 만큼 1씩 값이 감소

![Untitled 1](https://github.com/mainug/React/assets/48702167/3641c02d-d561-4fe1-87e8-ffe57442237c)


에러 버튼을 눌렀을 경우

reducer 함수 사용하여 현재 상태, 액션을 인자로 받고 액션 타입에 따라 새로운 상태를 반환

“INCREMENT” 액션 타입은 카운터 값을 증가시키고, “DECREMENT” 액션 타입은 카운터 값을 감소시킴

지원되지 않는 액션 타입의 경우 에러를 발생(위 코드의 경우 타입을 “kkkkkkkkk”로 명시)

## useReducer 예시 2 (init 함수를 사용하여 counter 예시)

### Counter.js

```jsx
import React, { useReducer } from "react";

function init(initialState) {
    //return { count: initialState };
    return { count: 0 };
}

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        case "RESET":
            return init(action.payload);
        default:
            throw new Error("unsupported action type: ", action.type);
    }
}

const Counter = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
                초기화
            </button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
                감소
            </button>
            <button onClick={() => dispatch({ type: "kkkkkkkkk", payload: 1 })}>
                에러
            </button>
        </>
    );
};

export default Counter;
```

### 결과

![Untitled 2](https://github.com/mainug/React/assets/48702167/c88e91f2-b280-4784-8ec5-f6b90444f3e7)


위 예제에 초기화 기능을 추가

init 함수로 초기 상태를 설정하여 {count: 0}을 반환하여 항상 카운터를 0으로 초기화

## useReducer 예시 3 (useState 사용)

### Counter.js

```jsx
import React, { useState } from "react";

const Counter = ({ initialCount }) => {
    const initial = initialCount ? initialCount : 0;
    const [count, setCount] = useState(initial);
    
    const onIncrease = () => {
        setCount((count) => count + 1);
    };

    const onDecrease = () => {
        setCount((count) => count - 1);
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(initial)}>초기화</button>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
        </>
    );
};

export default Counter;
```

### 결과

![Untitled 3](https://github.com/mainug/React/assets/48702167/520baba5-aad5-4cfd-9b06-4497ba319163)


initialCount라는 prop을 받아서, 이 값을 초기 카운터 값으로 사용

useState 훅을 사용, 카운터의 현재 값과 이 값을 업데이트하는 함수 생성

## useContext 예시 1 (state와 props만 사용해서 만든 웹사이트)

### Content.js

```jsx
const Content = ({ isDark }) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            <p>홍길동님, 좋은 하루 되세요 </p>
        </div>
    );
};

export default Content;
```

### Header.js

```jsx
import React from "react";

const Header = ({ isDark }) => {
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <h1>Welcome 홍길동</h1>
        </header>
    );
};

export default Header;
```

### Footer.js

```jsx
import React from "react";

const Footer = ({ isDark, setIsDark }) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className="footer"
            style={{ backgroundColor: isDark ? "black" : "lightgray" }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;
```

### Page.js

```jsx
// page 컴포넌트
import React, { useContext } from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({isDark, setIsDark}) => {
    return (
        <div className="page">
            <Header isDark={isDark}/>
            <Content isDark={isDark}/>
            <Footer isDark={isDark} setIsDark={setIsDark}/>
        </div>
    );
};

export default Page;
```

### App.js

```jsx
// 최상위 컴포넌트
import { useState } from "react";
import "./App.css";
import Page from "./Compopnents/Page";

function App() {
  // 현제 App이 다크모드인지 아닌지 true, false로 정보를 받고 있다. 
  const [isDark, setIsDark] = useState(false);

  // Page 자식 컴포넌트에게 해당 데이터를 props로 넘겨 주고 있다. 
  return <Page isDark={isDark} setIsDark={setIsDark}/>
}

export default App;
```

### 결과

![Untitled 4](https://github.com/mainug/React/assets/48702167/e64f9b11-fd9a-49b9-8bd8-54a0664ff7cd)


초기 상태

![Untitled 5](https://github.com/mainug/React/assets/48702167/6acb5241-5a18-48b3-a058-5a51e202b252)

“Dark Mode”버튼을 눌렀을 경우

## useContext 예시 2 (context를 사용해서 만든 웹사이트)

### Content.js

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
    // 📌
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            <p>홍길동님, 좋은 하루 되세요 </p>
        </div>
    );
};

export default Content;
```

### Header.js

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
const { isDark } = useContext(ThemeContext);
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <h1>Welcome 홍길동!</h1>
        </header>
    );
};

export default Header;
```

### Footer.js

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    // 📌
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className="footer"
            style={{ backgroundColor: isDark ? "black" : "lightgray" }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;
```

### Page.js

```jsx
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

// isDark 를 실질적으로 사용하지 않고, 자녀 컴포넌트들에게 전달하는 역할
// data 필요하지 않음 !
const Page = () => {
    return (
        <div className="page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Page;
```

### App.js

```jsx
import { useState } from "react";
import "./App.css";
import Page from "./Compopnents/Page";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    // 📌
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
export default App;
```

### ThemeContext.js

```jsx
import { createContext } from "react";

// 기본값으로는 null을 넣어준다.
export const ThemeContext = createContext(null);
```

### 결과

![Untitled 6](https://github.com/mainug/React/assets/48702167/8ab136ac-b46c-4313-ab06-8698868d6544)


![Untitled 7](https://github.com/mainug/React/assets/48702167/5918f394-2807-4cf0-b5d6-b2640fa7bfd8)


## useRef

### useRef 사용 예시 - DOM 요소 선택

```jsx
import React, { useState, useRef } from "react";
const InputSample = () => {
  const [inputs, setInputs] = useState({
    이름: "",
    nickname: "",
  });
  const nameFocus = useRef();
  const { 이름, nickname } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      이름: "",
      nickname: "",
    });
    nameFocus.current.focus();
  };
  return (
    <div>
      <input
        name="이름"
        placeholder="이름쓰세요"
        onChange={onChange}
        value={이름}
        ref={nameFocus}
      />
      <input
        name="nickname"
        placeholder="닉네임쓰세요"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {이름}({nickname})
      </div>
    </div>
  );
};
export default InputSample;
```

![Untitled 8](https://github.com/mainug/React/assets/48702167/3f2a12d0-f5c6-4e37-aa29-1ad828893cf0)

![Untitled 9](https://github.com/mainug/React/assets/48702167/a5d6d7dc-2900-494c-91c3-974de138d074)


## forwardRef

### 부모 컴포넌트에 DOM 노출하기

```jsx
import { forwardRef } from "react";
const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      <input {...otherProps} ref={ref} />
    </label>
  );
});
function Form() {
  const ref = useRef(null);
  function handleClick() {
    ref.current.focus();
  }
  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

export default Form;
```

## useEffect

### useEffect - 기본 사용법

```jsx
import { useEffect } from "react"; //useEffect를 사용하기 위해 import
export default function UseEffectTest() {
  console.log("useEffect 전");
  // useEffect도 함수기 때문에 함수 호출
  useEffect(() => {
    console.log("메롱으로 바꿀거지롱");
    const hi = document.getElementById("hi");
    hi.innerText = "메롱";
  });
  console.log("useEffect 후");
  return (
    <div className="App">
      <h1 id="hi">안녕하세요.</h1>
    </div>
  );
}
```

![Untitled 10](https://github.com/mainug/React/assets/48702167/2a8c9c86-647e-4fab-b12f-45d463dc2849)

## useLayoutEffect

```jsx
import { useEffect, useState } from "react";
const Practice = () => {
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    setLogoUrl("logo192.png");
  }, []);
  return (
    <>
      <img alt="test" src={logoUrl} />
    </>
  );
};
export default Practice;
```

![Untitled 11](https://github.com/mainug/React/assets/48702167/42c1d0af-9486-4afd-ab43-4a7198f22cc0)


## useInsertionEffect

```jsx
import { useInsertionEffect } from "react";
// 컴포넌트
function MyButton() {
  function useCSS(rule) {
    useInsertionEffect(() => {
      // ... <style> 태그를 여기에서 주입하세요 ...
    });
    return rule;
  }
  const className = useCSS("...");
  return <div className={className} />;
}
export default MyButton;
```

## useMemo

```jsx
import { useEffect, useState } from "react";
export default function Practice() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  // string 할당
  // const location = isKorea ? "한국" : "외국";
  // 📌Object 할당
  const location = {
    country: isKorea ? "한국" : "외국",
  };
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);
  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      {/* 📌 location.country 할당 */}
      <p>나라:{location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
      <p></p>
    </div>
  );
}
```

![Untitled 12](https://github.com/mainug/React/assets/48702167/f31968ab-0e0d-4da0-a4a8-206c5c74b0aa)


## useCallback

```jsx
// ./components/SmartHome.jsx
import React, { useState, useCallback } from "react";
import Light from "./Light";
function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);
  const toggleMaster = useCallback(() => {
    setMasterOn(!masterOn);
  }, [masterOn]);
  const toggleKitchen = useCallback(() => {
    setKitchenOn(!kitchenOn);
  }, [kitchenOn]);
  const toggleBath = useCallback(() => {
    setBathOn(!bathOn);
  }, [bathOn]);
  return (
    <div>
      <Light room="침실" on={masterOn} toggle={toggleMaster}></Light>
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen}></Light>
      <Light room="욕실" on={bathOn} toggle={toggleBath}></Light>
    </div>
  );
}
export default SmartHome;
```

```jsx
// ./components/Light.jsx
import React from "react";
function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <div>
      <button onClick={toggle}>
        {room}
        {on ? "💡" : "⬛"}
      </button>
    </div>
  );
}
export default React.memo(Light);
```

![Untitled 13](https://github.com/mainug/React/assets/48702167/8b195f0e-234e-4202-af64-3d2e59a43913)


![Untitled 14](https://github.com/mainug/React/assets/48702167/46088ab4-80f0-445d-9e58-995dd90e370a)


버튼을 누르면 전구 아이콘으로 바뀜

## useTransition

```jsx
import { useDeferredValue, useState } from "react";
export default function Home() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const deferredValue = useDeferredValue(count2);
  const onIncrease = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);
    setCount4(count4 + 1);
  };
  console.log({ count1 });
  console.log({ count2 });
  console.log({ count3 });
  console.log({ count4 });
  console.log({ deferredValue });
  return <button onClick={onIncrease}>클릭</button>;
}
```

![Untitled 15](https://github.com/mainug/React/assets/48702167/fe1c384a-c9c9-404f-94da-5d7ff30a93f7)


## use

```jsx
import { use } from "react";
function Note({ id, shouldIncludeAuthor }) {
  // fetching data asynchronously
  const note = use(fetchNote(id));
  let byline = null;
  if (shouldIncludeAuthor) {
    // can be used inside if statements
    // Because `use` is inside a conditional block, we avoid blocking
    // unncessarily when `shouldIncludeAuthor` is false.
    const author = use(fetchNoteAuthor(note.authorId));
    byline = <h2>{author.displayName}</h2>;
  }
  return (
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}
```
