# 5장 예제

## State를 사용하는 이유

### 일반 변수를 사용하는 경우

Counter.js

```jsx
import React from "react";
const Counter = () => {
  let count = 0;
  const plus = () => {
    count = count + 1;
    console.log(count); // 제대로 증가함
  };
  const minus = () => {
    count = count - 1;
    console.log(count); // 제대로 감소함
  };
  return (
    <div className="container" style={{ margin: 15 }}>
      <h2 className="int">{count}</h2>
      <button className="plus" onClick={plus}>
        +
      </button>
      <button className="minus" onClick={minus}>
        -
      </button>
    </div>
  );
};
export default Counter;
```

결과

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled.png)

### state를 사용하는 경우

Counter.js

```jsx
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h2 className="int">{count}</h2>
      <button className="plus" onClick={plus}>
        +
      </button>
      <button className="minus" onClick={minus}>
        -
      </button>
    </div>
  );
};
export default Counter;
```

결과

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%201.png)

## setState

### setState는 비동기적으로 작동한다

Counter.js

```jsx
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
    console.log(count);
    // setCount로 count를 변경한 후 바로 콘솔에 찍었다
  };
  const minus = () => {
    setCount(count - 1);
    console.log(count);
    // setCount로 count를 변경한 후 바로 콘솔에 찍었다
  };
  return (
    <div className="container">
      <h2 className="int">{count}</h2>
      <button className="plus" onClick={plus}>
        +
      </button>
      <button className="minus" onClick={minus}>
        -
      </button>
    </div>
  );
};
export default Counter;
```

결과

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%202.png)

현재 값은 15로 표기되어 있지만 콘솔의 마지막 log는 16으로 표기

setState는 비동기적으로 처리함을 의미

이유는 크게 2가지로 성능 최적화, 컴포넌트 상태의 일관성 유지

Counter.js

```jsx
import { useState } from "react";
export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          console.log(number);
          setNumber(number + 2);
          console.log(number);
          setNumber(number + 3);
          console.log(number);
        }}
      >
        +3
      </button>
    </>
  );
}
```

결과

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%203.png)

+1, +2, +3이 순차적으로 실행되지 않고 마지막 setNumber만 실행되어 log에는 명령어 개수만큼 표기되지만 실제 실행되는건 마지막 setNumber

적어놓은 setNumber를 모두 실행하고 싶다면

```jsx
import { useState } from "react";
export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((number) => number + 1);
          console.log(number);
          setNumber((number) => number + 2);
          console.log(number);
          setNumber((number) => number + 3);
          console.log(number);
        }}
      >
        +3
      </button>
    </>
  );
}
```

onClick 내의 setNumber를 이런 식으로 바꾸고 실행

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%204.png)

모든 setNumber가 실행된 모습

## Class Component

### State 설정 및 사용

App.js

```jsx
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "홍길동",
      age: 300,
      job: "developer",
    };
  }
  render() {
    const { name, age, job } = this.state;
    return (
      <div style={{ margin: 15 }}>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>job: {job}</div>
      </div>
    );
  }
}
```

index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%205.png)

index.js

```jsx
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
```

Counter.js

```jsx
import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    // state 초기값 설정
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>현재 Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          카운트 +1
        </button>
      </div>
    );
  }
}
export default Counter;
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%206.png)

button 누르면 1씩 값 상승

### 너비와 높이 증가시키기

Area.js

```jsx
import { useState } from "react";
const Area = () => {
  const [size, setSize] = useState({ width: 200, height: 100 });
  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.width += 20;
          setSize(copy);
        }}
      >
        너비 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          copy.height += 10;
          setSize(copy);
        }}
      >
        높이 증가
      </button>
    </div>
  );
};
export default Area;
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%207.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%208.png)

너비는 20, 높이는 10씩 증가되도록 설정

## Event handling

### 리액트의 이벤트 문법

Main.js

```jsx
import React, { useState } from "react";
const Main = () => {
  const [myName, setMyName] = useState("홍길동");
  function changeName() {
    setMyName(myName === "홍길동" ? "김길동" : "홍길동");
  }
  return (
    <div>
      <h1>안녕하세요. {myName} 입니다.</h1>
      <button onClick={changeName}>Change</button>
    </div>
  );
};
export default Main;
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%209.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2010.png)

Change를 누르면 이름의 앞 글자가 바뀜

### 경고창 띄우기

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // 컴포넌트를 정의합니다.
      class Hello extends React.Component {
        render() {
          // 이벤트를 정의합니다.
          const clickHandler = (e) => {
            window.alert("안녕하세요.");
          };
          // 클릭 이벤트를 지정합니다.
          return <div onClick={clickHandler}>Click Me</div>;
        }
      }
      // 컴포넌트를 사용합니다.
      ReactDOM.render(<Hello />, document.getElementById("root"));
    </script>
  </body>
</html>
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2011.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2012.png)

### 클릭했을 때 클래스의 메소드 호출

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // 컴포넌트를 정의합니다.
      class Hello extends React.Component {
        constructor(props) {
          super(props);
          // 이벤트 핸들러의 this를 설정합니다. --- (※1)
          this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler(e) {
          const name = this.props.name;
          window.alert(`${name}님 안녕하세요.`);
        }
        render() {
          // 클릭 이벤트를 지정합니다. --- (※2)
          return <div onClick={this.clickHandler}>Click Me</div>;
        }
      }
      // 컴포넌트를 사용합니다.
      ReactDOM.render(<Hello name="홍길동" />, document.getElementById("root"));
    </script>
  </body>
</html>
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2013.png)

### 간단한 체크박스 구현하기

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      // 상태를 가진 컴포넌트를 정의합니다.
      class CBox extends React.Component {
        // 생성자
        constructor(props) {
          super(props);
          // 상태를 초기화합니다.
          this.state = { checked: false };
        }
        render() {
          // 체크되지 않았을 때의 상태
          let mark = "□";
          let bstyle = { fontWeight: "normal" };
          // 체크돼 있는지 확인합니다.
          if (this.state.checked) {
            mark = "■";
            bstyle = { fontWeight: "bold" };
          }
          // 클릭했을 때의 이벤트를 지정합니다.
          const clickHandler = (e) => {
            const newValue = !this.state.checked;
            this.setState({ checked: newValue });
          };
          // 렌더링할 내용을 반환합니다.
          return (
            <div onClick={clickHandler} style={bstyle}>
              {mark} {this.props.label}
            </div>
          );
        }
      }
      // 리액트로 DOM의 내용을 변경합니다.
      const dom = (
        <div>
          <CBox label="Apple" />
          <CBox label="Banana" />
          <CBox label="Orange" />
          <CBox label="Mango" />
        </div>
      );
      ReactDOM.render(dom, document.getElementById("root"));
    </script>
  </body>
</html>
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2014.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2015.png)

클릭하면 클릭한 객체만 체크박스가 색칠됨

## Component Life Cycle

### 스톱워치 만들기

```jsx
import React, { Component } from "react";
import "./Stopwatch.css";
// Stopwatch 컴포넌트를 정의합니다.
class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 초깃값을 설정합니다.
      isLive: false,
      curTime: 0,
      startTime: 0,
    };
    this.timerId = 0;
  }
  // 마운트했을 때
  componentWillMount() {
    this.timerId = setInterval((e) => {
      this.tick();
    }, 1000);
  }
  // 언마운트했을 때
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  // 매 초 실행됩니다.
  tick() {
    if (this.state.isLive) {
      const v = new Date().getTime();
      this.setState({ curTime: v });
    }
  }
  // 시작/중지 버튼을 클릭했을 때
  clickHandler(e) {
    // 중지할 때
    if (this.state.isLive) {
      this.setState({ isLive: false });
      return;
    }
    // 시작할 때
    const v = new Date().getTime();
    this.setState({
      curTime: v,
      startTime: v,
      isLive: true,
    });
  }
  // 출력할 시계를 생성합니다.
  getDisp() {
    const s = this.state;
    const delta = s.curTime - s.startTime;
    const t = Math.floor(delta / 1000);
    const ss = t % 60;
    const m = Math.floor(t / 60);
    const mm = m % 60;
    const hh = Math.floor(mm / 60);
    const z = (num) => {
      const s = "00" + String(num);
      return s.substr(s.length - 2, 2);
    };
    return (
      <span className="disp">
        {z(hh)}:{z(mm)}:{z(ss)}
      </span>
    );
  }
  // 화면 렌더링
  render() {
    let label = "START";
    if (this.state.isLive) {
      label = "STOP";
    }
    const disp = this.getDisp();
    const fclick = (e) => this.clickHandler(e);
    return (
      <div className="Stopwatch">
        <div>{disp}</div>
        <button onClick={fclick}>{label}</button>
      </div>
    );
  }
}
export default Stopwatch;
```

css

```css
.Stopwatch {
    text-align: center;
    }
    .disp {
    font-size: 70px;
    }
    button {
    font-size: 24px;
    width: 280px;
    }
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2016.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2017.png)

### 간단한 입력 양식 만들기

```jsx
import React from "react";
// 입력 양식 컴포넌트입니다.
export class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    // 상태를 초기화합니다.
    this.state = { value: "" };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    window.alert("전송: " + this.state.value);
    e.preventDefault();
  }
  // 화면 렌더링
  render() {
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <input type="text" value={this.state.value} onChange={doChange} />
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2018.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2019.png)

### 숫자만 입력받는 텍스트박스 만들기

```jsx
import React, { Component } from "react";
// 숫자 입력 컴포넌트
export default class NumberForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const curValue = e.target.value;
    // 숫자 이외의 값을 제거합니다.
    const newValue = curValue.replace(/[^0-9]/g, "");
    this.setState({ value: newValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    window.alert("전송: " + this.state.value);
    e.preventDefault();
  }
  // 화면 렌더링
  render() {
    // 이벤트를 메서드에 바인딩합니다.
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <input type="text" value={this.state.value} onChange={doChange} />
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2020.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2021.png)

문자를 입력하면 입력되지 않음(입력한 숫자들이 지워짐)

### 여러 개의 입력 항목을 가진 입력 양식 만들기

```jsx
import React, { Component } from "react";
import "./MultiForm.css"
// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
  constructor(props) {
    super(props);
    // 입력 양식의 초깃값을 설정합니다.
    this.state = {
      name: "홍길동",
      age: 300,
      hobby: "개발",
    };
  }
  // 값이 변경됐을 때
  doChange(e) {
    const userValue = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: userValue });
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    e.preventDefault();
    const j = JSON.stringify(this.state);
    window.alert(j);
  }
  // 화면 렌더링
  // 이벤트를 메서드에 바인딩합니다.
  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <div>
          <label>
            이름: <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            나이: <br />
            <input
              name="age"
              type="number"
              value={this.state.age}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            취미: <br />
            <input
              name="hobby"
              type="text"
              value={this.state.hobby}
              onChange={doChange}
            />
          </label>
        </div>
        <input type="submit" value="전송" />
      </form>
    );
  }
}
```

```css
.multiForm {
  width: 400px;
  text-align: left;
  margin-left: auto;
}
.multiForm p {
  margin: 4px;
  padding: 4px;
}
```

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2022.png)

![Untitled](5%E1%84%8C%E1%85%A1%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A6%202feade6384e74e2aa892dc787778b472/Untitled%2023.png)