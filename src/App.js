// constructor 예제

// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props); // class 컴포넌트가 상속받은 Component 의 생성자로 초기화
//     this.state = {
//       // state 선언 및 초기화
//       myState: "",
//     };
//     this.iKnow = this.iKnow.bind(this); // 함수 바인딩
//   }

//   whoAmI() {
//     console.log("who am i ? ", this);
//   }

//   iKnow() {
//     console.log("who am i ? ", this);
//   }

//   iKnow2 = () => {
//     console.log("who am i ? ", this);
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.whoAmI}>whoAmI</button>
//         <button onClick={this.iKnow}>iKnow</button>
//         <button onClick={this.iKnow2}>iKnow2</button>
//       </div>
//     );
//   }
// }

// export default App;

// getDerivedStateFromProps 예제

// import React from "react";

// export class App extends React.Component {
//   state = {
//     price: 0,
//   };
//   ref = React.createRef();
//   handleClick() {
//     console.log(this.ref.current.value);
//     this.setState({ price: this.ref.current.value });
//   }
//   render() {
//     return (
//       <div>
//         <Child price={this.state.price} />
//         <input type="text" ref={this.ref}></input>
//         <button onClick={() => this.handleClick()}>확인</button>
//       </div>
//     );
//   }
// }
// class Child extends React.Component {
//   state = {
//     prevPrice: this.props.price,
//     isExpensive: undefined,
//   };
//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log(
//       `state.prevPrice : ${prevState.prevPrice} , props.price : ${nextProps.price}`
//     );
//     const isExpensive =
//       prevState.prevPrice - nextProps.price < 0 ? true : false;
//     // price 의 이전 값, 이후 값이 모두 필요함
//     return { prevPrice: nextProps.price, isExpensive };
//   }
//   render() {
//     const isExpensive = this.state.isExpensive;
//     return (
//       <div>
//         {this.state.prevPrice !== 0 && (
//           <h3 style={{ color: isExpensive ? "red" : "blue" }}>
//             이전 값보다 {isExpensive ? "큼" : "작음"}
//           </h3>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

// render 예제

// import React from "react";

// export class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     // this.setState({ count: this.state.count + 1 });
//     return (
//       <React.Fragment>
//         <button onClick={this.increase}>증가</button>
//         <div>{this.state.count}</div>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

// Portal 예제

// import React from "react";
// import ReactDOM from "react-dom";

// const globalPortal = document.getElementById("root");

// class Portal extends React.Component {
//   render() {
//     return ReactDOM.createPortal(this.props.children, globalPortal);
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   render() {
//     // this.setState({ count: this.state.count + 1 });
//     return (
//       <div>
//         <div>우린 여기 있는데..</div>
//         <Portal>난 간다~</Portal>
//         <div>우린 여기 있는데..</div>
//       </div>
//     );
//   }
// }

// export default App;

// componentDidMount 예제

import React, { Component } from "react";

class App extends Component {
  state = {
    msg: "첫번째 마운트!",
  };

  componentDidMount() {
    this.setState({ msg: "두번째 마운트!" });
    // render 함수 재실행
  }

  render() {
    const { msg } = this.state;

    console.log("렌더링");

    return (
      <div>
        <div>{msg}</div>
      </div>
    );
  }
}

export default App;

// shouldComponentUpdate 예제

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     msg: "첫 렌더링!",
//   };

//   componentDidMount() {
//     console.log("첫 렌더링은 불림");
//     this.setState({ msg: "렌더링 할래!" });
//   }

//   shouldComponentUpdate() {
//     console.log("렌더링 하지마!");

//     return false;
//   }

//   render() {
//     const { msg } = this.state;

//     return (
//       <div>
//         <div>{msg}</div>
//         <button
//           onClick={() => {
//             this.forceUpdate();
//             // componentDidMount 는 이미 호출되었으므로 render 함수만 실행된다.
//             // msg 는 이미 바뀐 상태고, 렌더링만 안된 상태이므로 msg 가 바뀌어 출력된다.
//           }}
//         >
//           강제로 렌더링
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// getSnapshotBeforeUpdate 예제

// import React, { Component } from "react";
// import "./ScrollBox.css";

// class ScrollBox extends Component {
//   id = 2;

//   state = {
//     array: [1],
//   };

//   handleInsert = () => {
//     this.setState({
//       array: [this.id++, ...this.state.array],
//     });
//   };

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     if (prevState.array !== this.state.array) {
//       const { scrollTop, scrollHeight } = this.list;

//       // Update 전의 scrollTop 과 Update 후가 다르다.
//       console.log(scrollTop);

//       return {
//         scrollTop,
//         scrollHeight,
//       };
//     }
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (snapshot) {
//       const { scrollTop } = this.list;

//       // Update 전의 scrollTop 과 Update 후가 다르다.
//       console.log(scrollTop);

//       if (scrollTop !== snapshot.scrollTop) return;
//       const diff = this.list.scrollHeight - snapshot.scrollHeight;
//       this.list.scrollTop += diff;
//     }
//   }

//   render() {
//     const rows = this.state.array.map((number) => (
//       <div className="row" key={number}>
//         {number}
//       </div>
//     ));

//     return (
//       <div>
//         <div
//           ref={(ref) => {
//             this.list = ref;
//           }}
//           className="list"
//         >
//           {rows}
//         </div>
//         <button onClick={this.handleInsert}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default ScrollBox;

// UnMount 사용 예제

// import React, { useState, useEffect } from "react";

// function App() {
//   const [value, setValue] = useState("");
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     console.log("현재 value : " + value);
//     let nowV = value;
//     let timer;

//     if (comment !== "") {
//       // 입력 중이라면, 매 입력마다 timer를 생성
//       timer = setTimeout(() => {
//         // 입력 후 1초 뒤에 comment 변경
//         setComment("입력이 끝났습니다!");
//       }, 1000);
//     }

//     return () => {
//       if (timer) clearTimeout(timer); // 다음 입력이 들어왔다면 이전 타이머를 해제

//       console.log(nowV + " 가 UnMount 됨."); // 이전 state 값이 UnMount
//     };
//   }, [value]);

//   const onChange = (e) => {
//     if (comment === "") {
//       setComment("입력 중...");
//     }
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <input value={value} onChange={onChange} />
//       <div>{comment}</div>
//     </div>
//   );
// }

// export default App;

// useRef 예제

// import React, { useEffect, useRef, useState } from "react";
// const App = () => {
//   const [msg, setMsg] = useState("");
//   const mountRef = useRef(false);

//   useEffect(() => {
//     if (mountRef.current) {
//       console.log("updated!");
//     } else {
//       mountRef.current = true;
//     }
//   });

//   const onClick = (e) => {
//     setMsg(e.target.value);
//   };

//   return (
//     <div>
//       <input value={msg} onChange={onClick} />
//     </div>
//   );
// };
// export default App;
