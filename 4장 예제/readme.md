# 4장 예제

## Component 만들기

### Function Component

### Main.js

```jsx
import React from 'react'

export default function Main() {
  return (
    <div>
      <main>
        <h1>안녕하세요! 메인입니다.</h1>
      </main>
    </div>
  )
}
```

### Header.js

```jsx
import React from 'react'

export default function Header() { //export default Header를 아래에 쓰지않고 위에다가 씀
  return (
    <div>
      <header>
        <h1>헤더입니다.</h1>
      </header>
    </div>
  )
}
```

### Footer.js

```jsx
import React from 'react'

export default function Footer() { //내가 만든 컴포넌트 이름은 무조건 대문자 시작
  return (
    <div>
      <footer>
        <h1>푸터입니다.</h1>
      </footer>
    </div>
  )
}
```

### 결과

![Untitled](https://github.com/mainug/React/assets/48702167/7f28ed33-67ab-49f7-a7fe-9af1fc484ab7)


### Class Component

### Main.js

```jsx
import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <div>
        <main>
            <h1>안녕하세요! 메인입니다.</h1>
        </main>
      </div>
    )
  }
}
```

### Header.js

```jsx
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <h1>헤더입니다.</h1>
        </header>
      </div>
    )
  }
}
```

### Footer.js

```jsx
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
            <h1>푸터입니다.</h1>
        </footer>
      </div>
    )
  }
}
```

### 결과

![Untitled 1](https://github.com/mainug/React/assets/48702167/6d345ec4-6e7d-4a1d-936e-2ed5e2dc47ac)


## Porps

### 1개의 프로퍼티 넘기기

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
function App() {
  return (
    <div>
      <Header />
      <Main name="홍길동" />
      <Footer />
    </div>
  );
}

export default App;
```

### Main.js

```jsx
import React from "react";
function Main(props) {
  return (
    <div>
      <main>
        <h1>안녕하세요. {props.name} 입니다.</h1>
      </main>
    </div>
  );
}
export default Main;
```

### 결과

![Untitled 2](https://github.com/mainug/React/assets/48702167/5c33b266-e8b9-4509-805e-1e26dcfff525)


### 2개의 프로퍼티 넘기기

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
function App() {
  return (
    <div>
      <Header />
      <Main name="박민욱" color="blue" />
      <Footer />
    </div>
  );
}

export default App;
```

### Main.js

```jsx
import React from "react";
function Main(props) {
  return (
    <div>
      <main>
        <h1 style={{ color: props.color }}>안녕하세요. {props.name} 입니다.</h1>
      </main>
    </div>
  );
}

export default Main;
```

### 결과

![Untitled 3](https://github.com/mainug/React/assets/48702167/3e65888a-f007-4830-8bcc-bdd01f008d3d)


### 숫자 프로퍼티 넘기기

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
function App() {
  return (
    <div>
      <Header />
      <Main name={9} color="blue" />
      <Footer />
    </div>
  );
}

export default App;

```

### Main.js

```jsx
import React from "react";
function Main(props) {
  return (
    <div>
      <main>
        <h1 style={{ color: props.color }}>안녕하세요. {props.name} 입니다.</h1>
      </main>
    </div>
  );
}
export default Main;
```

### 결과

![Untitled 4](https://github.com/mainug/React/assets/48702167/16f74e64-64bd-4ccd-8273-4182251c960e)


### 프로퍼티의 자료형, 타입정의

### Main.js

```jsx
import React from "react";
import PropTypes from "prop-types"; // 프로퍼티 타입을 지정해주기 위해 사용 한다.
function Main({ name, color }) {
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}
// 프로퍼티 타입 지정
Main.propTypes = {
  name: PropTypes.string,
};
// 프로퍼티 기본값 지정
Main.defaultProps = {
  name: "디폴트",
};
export default Main;
```

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
function App() {
  return (
    <div>
      <Header />
      <Main color="blue" />
      <Footer />
    </div>
  );
}

export default App;

```

### 결과

![Untitled 5](https://github.com/mainug/React/assets/48702167/05d1eaa1-48a2-43f7-8079-eeb9c2ee6976)


### 프로퍼티의 필수값 설정

### Main.js

```jsx
import React from "react";
import PropTypes from "prop-types"; // 프로퍼티 타입을 지정해주기 위해 사용 한다.
function Main({ name, color }) {
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}
// 프로퍼티 타입 지정 및 필수값 설정
Main.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Main;
```

### 불리언 프로퍼티 사용하기

### Main.js

```jsx
import React from "react";
import PropTypes from "prop-types";
function Main({ color, name, maleYn }) {
  const msg = maleYn ? "남자" : "여자"; // 불리언 사용
  return (
    <div>
      <main>
        <h1 style={{ color }}>
          안녕하세요. {name} 입니다. ({msg})
        </h1>
      </main>
    </div>
  );
}
Main.propTypes = {
  name: PropTypes.string,
};
Main.defaultProps = {
  name: "디폴트",
};
export default Main;
```

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
function App() {
  return (
    <div>
      <Header />
      <Main name="홍길동" color="blue" maleYn />
      <Footer />
    </div>
  );
}

export default App;
```

### 결과

![Untitled 6](https://github.com/mainug/React/assets/48702167/5ddf0e68-a433-47d7-9727-14fd2b2607fd)


### props.children 활용하기

### Wrapper.js

```jsx
import React from "react";
function Wrapper(props) {
  const style = {
    backgroundColor: "yellow",
  };
  return <div style={style}>{props.children}</div>;
}
export default Wrapper;
```

### App.js

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
import Wrapper from "./funcComp/Wrapper";
function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main color="blue" />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
```

### 결과

![Untitled 7](https://github.com/mainug/React/assets/48702167/9732bac9-5ce3-488e-9fee-9f691e1e4571)


App.js에서 여러개의 자식을 사용 가능

```jsx
import React, { Component } from "react";
import Header from "./funcComp/Header";
import Footer from "./funcComp/Footer";
import Main from "./funcComp/Main";
import Wrapper from "./funcComp/Wrapper";
function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Main name="홍길동" color="blue" />
        <Main name="이순신" color="blue" />
      </Wrapper>
      <Footer />
    </div>
  );
}
export default App;
```

![Untitled 8](https://github.com/mainug/React/assets/48702167/742e5f9d-2a46-4e9a-9767-044ae6f754ce)


### 이미지와 텍스트를 출력하는 콤퍼넌트

### FPhotoText.js

```jsx
import React from 'react'

export default function FPhotoText(props) {
    const url = "img/"+ props.image + ".png"
    const label = props.label
    const boxStyle = {
        border: "1px solid silver",
        margin: "8px",
        padding: "4px"
    }
    return (
        <div style={boxStyle}>
            <img src={url} width="128" alt="computer"/>
            <span>{label}</span>
        </div>
    )
}
```

### App.js

```jsx
import './App.css';
import FPhotoText from './FPhotoText';

function App(props) {
  return (
    <div>
      <FPhotoText image="desktop" label = "Desktop" />
      <FPhotoText image="notebook" label = "NoteBook" />
      <FPhotoText image="pad" label = "Pad" />
    </div>
  );
}

export default App;
```

### 결과

![Untitled 9](https://github.com/mainug/React/assets/48702167/b2c6d99f-bc6e-49ec-8e42-48216c7ad8cf)


### 리스트 컴포넌트

### RList.js

```jsx
import React, { Component } from "react";
export default class RList extends Component {
  render() {
    // items 속성에 지정한 items 배열을 사용합니다.
    const items = this.props.items.split(",");
    // 아이템 목록을 기반으로 li 요소를 생성합니다.
    const itemsObj = items.map((e) => {
      return <li>{e}</li>;
    });
    // 타이틀
    let title = this.props.title;
    if (!title) title = "LIST";
    // 렌더링할 내용을 반환합니다.
    return (
      <div>
        <h3>{title}</h3>
        <ul>{itemsObj}</ul>
      </div>
    );
  }
}
```

### App.js

```jsx
import "./App.css";
import RList from "./RList";
function App() {
  return (
    <div>
      <RList title="Colors" items="Red,Green,Blue,White" />
    </div>
  );
}

export default App;
```

### 결과

![Untitled 10](https://github.com/mainug/React/assets/48702167/35ebce72-d905-41d9-a7db-2bd580b52741)


## Component

### 댓글 컴포넌트 만들기

### index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentList from './CommentList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
);

reportWebVitals();
```

### Comment.js

```jsx
import React from "react";
function Comment(props) {
  return (
    <div>
      <h1>홍길동이 만든 컴포넌트입니다.</h1>
    </div>
  );
}
export default Comment;
```

### CommentList.js

```jsx
import React from "react";
import Comment from "./Comment";
function CommentList(props) {
  return (
    <div>
      <Comment />
    </div>
  );
}

export default CommentList;
```

### 결과

![Untitled 11](https://github.com/mainug/React/assets/48702167/5c494c29-a8da-49b4-841d-e93babe5f8b0)


### 스타일 입히기

### Comment.js

```jsx
import React from "react";
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontsize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="작성자그림"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>홍길동</span>
        <span style={styles.commentText}>홍길동이 만든 컴포넌트입니다.</span>
      </div>
    </div>
  );
}
export default Comment;
```

### 결과

![Untitled 12](https://github.com/mainug/React/assets/48702167/80f98e2f-d6e1-40ac-95ef-afa5dd215a9c)


### props 추가하기

### Comment.js

```jsx
import React from "react";
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontsize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          alt="작성자그림"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}
export default Comment;
```

### CommentList.js

```jsx
import React from "react";
import Comment from "./Comment";
function CommentList(props) {
  return (
    <div>
      <Comment name="홍길동" comment="홍길동이 만든 컴포넌트입니다." />
      <Comment name="홍길동" comment="홍길동이 만든 컴포넌트입니다." />
      <Comment name="유재석" comment="리액트 재밌어요~~." />
    </div>
  );
}
export default CommentList;
```

### 결과

![Untitled 13](https://github.com/mainug/React/assets/48702167/717a43eb-8df7-437d-b7ea-94435f03391d)


### 컴포넌트 데이터 객체로 분리하기

### CommentList.js

```jsx
import React from "react";
import Comment from "./Comment";
const comments = [
  {
    name: "홍길동",
    comment: "안녕하세요! 홍길동입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재밌어요~~.",
  },
  {
    name: "최예진",
    comment: "안녕하세요! 프론트엔드 개발자입니다.",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}
export default CommentList;
```

### 결과

![Untitled 14](https://github.com/mainug/React/assets/48702167/39fea187-c7f9-4561-b612-4a27877cf458)
