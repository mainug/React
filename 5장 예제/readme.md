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

![Untitled](https://github.com/mainug/React/assets/48702167/11baf3d7-a4d0-48d8-ad12-1109c13179b1)


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

![Untitled 1](https://github.com/mainug/React/assets/48702167/ca76c2bf-8953-4c71-bebc-1def17179fc9)


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

![Untitled 2](https://github.com/mainug/React/assets/48702167/4abe58fc-bd4e-4743-9171-7320a2090d93)


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

![Untitled 3](https://github.com/mainug/React/assets/48702167/3e4edf66-aa49-4567-902c-94aa219991ce)


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

![Untitled 4](https://github.com/mainug/React/assets/48702167/34a81204-0bac-4261-a700-9fcfadcf6bf9)


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

![Untitled 5](https://github.com/mainug/React/assets/48702167/0cc1ec7d-40c7-4f00-a016-e41e752a4b6f)


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

![Untitled 6](https://github.com/mainug/React/assets/48702167/6c4f8736-3e22-4983-b4ba-d52606f61e10)


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

![Untitled 7](https://github.com/mainug/React/assets/48702167/48c049c6-a620-423f-8276-f08d2f09958e)


![Untitled 8](https://github.com/mainug/React/assets/48702167/877bb0d8-90b6-4427-a338-8f779055e192)


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

![Untitled 9](https://github.com/mainug/React/assets/48702167/ed335490-d271-49c9-baa3-6760b3ef6b5a)


![Untitled 10](https://github.com/mainug/React/assets/48702167/5c9280d5-6748-4882-966d-7be9dc7a85ae)


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

![Untitled 11](https://github.com/mainug/React/assets/48702167/7cfd20a6-a12b-43e9-9252-a2e5b47525e7)


![Untitled 12](https://github.com/mainug/React/assets/48702167/132b0d17-6bcd-48e6-8ff3-2df064838290)


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

![Untitled 13](https://github.com/mainug/React/assets/48702167/b0534854-a202-4049-86c5-fb442f1c4651)


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

![Untitled 14](https://github.com/mainug/React/assets/48702167/ba9b972a-a077-4aa4-9824-a674717d72e4)


![Untitled 15](https://github.com/mainug/React/assets/48702167/91607a3c-4dd0-4b72-b20b-db6960c89526)


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

![Untitled 16](https://github.com/mainug/React/assets/48702167/228a7216-aa18-4280-82ad-f498637f9749)


![Untitled 17](https://github.com/mainug/React/assets/48702167/d0f40d35-625e-45a3-b2bb-ec81ab5ed227)


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

![Untitled 18](https://github.com/mainug/React/assets/48702167/486c265f-a4e1-455c-95d1-0b4d1c627ea7)


![Untitled 19](https://github.com/mainug/React/assets/48702167/dc4b3afb-68d3-4ba6-84e6-b8c9c54d0a99)


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

![Untitled 20](https://github.com/mainug/React/assets/48702167/a745b6cb-f6bf-49e0-9032-d1254164a249)


![Untitled 21](https://github.com/mainug/React/assets/48702167/426bf0b6-2a20-4c75-a1f7-6b2bec371d75)


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

![Untitled 22](https://github.com/mainug/React/assets/48702167/c3449647-19bc-4cf6-b4cd-e7dd73431e12)


![Untitled 23](https://github.com/mainug/React/assets/48702167/2cc56c9f-0d0a-4cfa-97e4-f1629fed9e43)
