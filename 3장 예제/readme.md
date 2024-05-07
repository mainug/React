# 3장 예제

## JavaScript Library

### Frontend

```html
<!-- 
Online HTML, CSS and JavaScript editor to run code online.
-->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>Browser</title>
</head>

<body>
  <h1>
    Write, edit and run HTML, CSS and JavaScript code online.
  </h1>
  <p>
    Our HTML editor updates the webview automatically in real-time as you write code.
  </p>
  <script src="script.js"></script>
</body>

</html>
```

위 코드는 Online HTML Editor의 index.html 내용

### HTML 엘리먼트를 동적으로 생성하여 DOM에 추가

```html
<body>
	<div id="root"></div>
	<script type="module">
		const headingElement = document.createElement("h1");
		headingElement.textContent = "안녕, 리액트!";
		headingElement.className = "heading";
		const rootElement = document.getElementById("root");
		rootElement.append(headingElement);
	</script>
</body>
```

```html
<body>
	<div id="root">
		<h1 class="heading">안녕, 리액트!</h1>
	</div>
</body>
```

위와 아래 코드는 같은 결과를 도출

실제로 같은 결과 값을 도출

![Untitled](https://github.com/mainug/React/assets/48702167/f4f17b9a-008a-43f2-a63c-e7d4d0df92ea)

![Untitled 1](https://github.com/mainug/React/assets/48702167/88ee66fd-13e7-44a2-92cc-5ccba99cc83d)

## JSX Code 작성해보기

![Untitled 2](https://github.com/mainug/React/assets/48702167/0c055588-9f78-4c3e-87cc-25209a36d67d)

### 실제 작성된 코드

Book.js

```jsx
import React from "react";

function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numberOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    );
}
export default Book;
```

![Untitled 3](https://github.com/mainug/React/assets/48702167/de535096-da12-4646-b82d-bfa37f3a00be)

BookLibrary.js

```jsx
import React from "react";
import Book from "./Book";

function BookLibrary(props) {
    return (
        <div>
            <Book name="처음 만난 React" numberOfPage={300} />
            <Book name="처음 만난 JSX" numberOfPage={400} />
            <Book name="처음 만난 Component" numberOfPage={500} />
        </div>
    );
}
export default BookLibrary;
```

![Untitled 4](https://github.com/mainug/React/assets/48702167/b8200493-438d-43fe-8f3d-0a473b9e5080)


### 도출된 결과 값

![Untitled 5](https://github.com/mainug/React/assets/48702167/a731b33b-a32f-4780-8430-65786b7d6be1)


## React Elements 생성

### 코드

```jsx
function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}
```

### 결과

![Untitled 6](https://github.com/mainug/React/assets/48702167/5375c3bb-78d1-4749-b966-229d73b172e0)


name 이라는 prop을 입력으로 받아, “Hello [name]. Welcome!” 형태의 메시지를 <h1> 태그로 감싸서 반환

## React로 DOM 변경하기

### 간단한 시계

```html
<!DOCTYPE html>
<html>
  <head>
    <title>new document</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  </head>
  <script type="text/javascript">
    <!-- setInterval("dpTime()", 1000);
    function dpTime() {
      var now = new Date();
      hours = now.getHours();
      minutes = now.getMinutes();
      seconds = now.getSeconds();
      if (hours > 12) {
        hours -= 12;
        ampm = "오후 ";
      } else {
        ampm = "오전 ";
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      document.getElementById("dpTime").innerHTML =
        ampm + hours + ":" + minutes + ":" + seconds;
    }
    //-->
  </script>
  <span id="dpTime">오후 01:44:40</span>
  <body></body>
</html>
```

본문에 있는 위 코드는 시간을 실시간으로 나타내는 코드이지만 실시간으로 시간을 표기하지 않고 고정된 시간에서 멈춰있었음

위 코드의 문제점은 

1. **<script> 태그의 위치** : 일반적으로 script 태그는 body의 끝에 위치하여 동작하는 것이 요소들이 모두 로드된 후 스크립트가 실행되므로, DOM 요소에 접근하는 데 문제가 없음
2. setInterval 함수 사용법 : setInterval(”dpTime()”, 1000); 대신 setInterval(dpTime, 1000);을 사용하는 것이 더 좋음. 문자열 대신 함수 참조를 직접 전달하는 것이 더 효율적이고 안전함
3. 전역 변수 사용 : hours, minutes, seconds, ampm 변수들이 함수 내에서 선언되지 않고 전역 변수로 사용되고 있음. 이는 의도하지 않은 문제가 생길 수 있으므로, 함수 내부에서 var를 이용해 지역 변수로 선언하는 것이 좋아 보임

### 변경한 코드

```html
<!DOCTYPE html>
<html>
<head>
    <title>new document</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
</head>
<body>
    <span id="dpTime">로딩 중...</span>
    <script type="text/javascript">
        function dpTime() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            var ampm = hours >= 12 ? "오후 " : "오전 ";

            hours = hours % 12;
            hours = hours ? hours : 12; // 0시는 12로 표시
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            var strTime = ampm + hours + ":" + minutes + ":" + seconds;
            document.getElementById("dpTime").innerHTML = strTime;
        }
        setInterval(dpTime, 1000);

        dpTime(); // 웹페이지 로드시 바로 시간을 표시
    </script>
</body>
</html>
```

### 결과

![Untitled 7](https://github.com/mainug/React/assets/48702167/5ceba30f-3c62-4c32-89f4-93bef9efada9)


위 코드는 span태그 내에 적어 놓은 시간이 변경되지 않고 멈춰있음

![Untitled 8](https://github.com/mainug/React/assets/48702167/c49ed691-1c86-4a4b-af01-bd2b88f57002)


![Untitled 9](https://github.com/mainug/React/assets/48702167/20592cd5-c416-49af-80b0-aadb71fce78c)


span 태그 내에 있는 문자가 시간을 불러와 초마다 계속 변경되는 모습

### 바이너리 시계

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
    <style>
      body {
        font-size: 32px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div><div id="disp"></div></div>
    <script type="text/babel">
      // 정기적으로 화면을 변경하게 지정합니다.
      setInterval(update, 1000)
      // 정기적으로 실행되는 함수입니다.
      function update () {
      // 현재 시간을 이진 숫자로 변환합니다. ---- (※1)
      const now = new Date();
      const hh = z2(now.getHours())
      const mm = z2(now.getMinutes())
      const ss = z2(now.getSeconds())
      const binStr = hh + mm + ss 
      const style0 = { color: 'brown' }
      const style1 = { color: 'red'}
      const lines = []
      for (let i = 0; i < binStr.length; i++) {
      const v = parseInt(binStr.substr(i, 1))
      const bin = "0000" + v.toString(2)
      const bin8 = bin.substr(bin.length - 4, 4)
      // 이진 숫자를 구성하는 리액트 객체를 lines 배열에 추가합니다. --- (※2)
      for (let j = 0; j < bin8.length; j++) {
      if (bin8.substr(j, 1) === '0') {
      lines.push(<span style={style0}>○</span>)
      } else {
      lines.push(<span style={style1}>●</span>)
      }
      }
      lines.push(<br />)
      }
      // DOM의 내용을 변경합니다. --- (※3)
      const disp = document.getElementById('disp')
      ReactDOM.render(<div>{lines}</div>, disp)
      }
      function z2 (v) {
      v = String("00" + v)
      return v.substr(v.length - 2, 2)
      }
    </script>
  </body>
</html>
```

### 결과

![Untitled 10](https://github.com/mainug/React/assets/48702167/3eac3ae1-066e-43d5-a3a5-a4130e8c476c)


현재 17시 46분 14초를 바이너리 시계의 모양으로 표기함

![Untitled 11](https://github.com/mainug/React/assets/48702167/2bffa5d0-1a84-4fde-892c-399c1a3b84be)


실시간으로 변경되는 객체만 변경되는 모습
