// setState 사용법 예제

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   let [count2, setCount2] = useState(0);

//   const onClickUp = () => {
//     count2 = count2 + 1;
//     setCount(count + 1);
//   };

//   const onClickDown = () => {
//     count2 = count2 + 1;
//     setCount(count - 1);
//   };

//   console.log("count : " + count);
//   console.log("count2 : " + count2);

//   return (
//     <div>
//       <div>Count : {count}</div>
//       <div>Count2 : {count2}</div>
//       <button onClick={onClickUp}>Up</button>
//       <button onClick={onClickDown}>Down</button>
//     </div>
//   );
// }

// export default App;

// 클래스형 컴포넌트 예제

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   onClickUp = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   onClickDown = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <div>Count : {count}</div>
//         <button onClick={this.onClickUp}>Up</button>
//         <button onClick={this.onClickDown}>Down</button>
//       </div>
//     );
//   }
// }

// setState 렌더링 순서 예제

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const onClickUp = () => {
//     console.log("count 바꾸기 전! : " + count);
//     setCount(count + 1);
//     console.log("count 바꾼 후! : " + count);
//   };

//   console.log("count 렌더링됨! : " + count);

//   return (
//     <div>
//       <div>Count : {count}</div>
//       <button onClick={onClickUp}>Up</button>
//     </div>
//   );
// }

// // 배열 state 예제

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [heros, setHeros] = useState(["울트론", "비전"]);

//   const onClick = () => {
//     // const newHeros = heros; // 얕은 복사
//     // newHeros[0] = "아이언맨";

//     const newHeros = heros.map((hero, index) => {
//       // 깊은 복사
//       if (index === 0) return "아이언맨";
//       return hero;
//     });

//     setHeros(newHeros);
//   };

//   return (
//     <div>
//       {heros.map((hero, index) => {
//         return <div key={index}>{hero}</div>;
//       })}
//       <button onClick={onClick}>울트론 -> 아이언맨</button>
//     </div>
//   );
// }

// export default App;

// 생명주기 함수 예제

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     A: "A",
//     B: "B",
//     comment: "",
//   };

//   onClickA = () => {
//     this.setState({ A: "C" });
//   };

//   onClickB = () => {
//     this.setState({ B: "D" });
//   };

//   componentDidMount() {
//       // 컴포넌트가 마운트될 때 호출되는 함수
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.A !== this.state.A)
//       this.setState({ comment: "A 가 바뀌었습니다!" });
//     if (prevState.B !== this.state.B)
//       this.setState({ comment: "B 가 바뀌었습니다!" });
//   }

//   componentWillUnmount() {
//       // 컴포넌트가 언마운트되기 직전 호출되는 함수
//   }

//   render() {
//     const { A, B, comment } = this.state;

//     return (
//       <div>
//         <div>나는 {A}!</div>
//         <button onClick={this.onClickA}>A to C</button>
//         <div>나는 {B}!</div>
//         <button onClick={this.onClickB}>B to D</button>
//         <div>{comment}</div>
//       </div>
//     );
//   }
// }

// export default App;

// useEffect 함수 예제

// import React, { useState, useEffect } from "react";

// function App() {
//   const [A, setA] = useState("A");
//   const [B, setB] = useState("B");
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     if (A !== "A") setComment("A 가 바뀌었습니다!");
//   }, [A]);

//   useEffect(() => {
//     if (B !== "B") setComment("B 가 바뀌었습니다!");
//   }, [B]);

//   const onClickA = () => {
//     setA("B");
//   };

//   const onClickB = () => {
//     setB("D");
//   };

//   return (
//     <div>
//       <div>나는 {A}!</div>
//       <button onClick={onClickA}>A to C</button>
//       <div>나는 {B}!</div>
//       <button onClick={onClickB}>B to D</button>
//       <div>{comment}</div>
//     </div>
//   );
// }

// export default App;

// useEffect UnMount 예제

// import React, { useState, useEffect } from "react";

// function App() {
//   const [value, setValue] = useState("");
//   const [comment, setComment] = useState("");

//   useEffect(() => {
//     console.log("현재 value : " + value);
//     let nowV = value;

//     let timer;

//     if (comment !== "") {
//       timer = setTimeout(() => {
//         setComment("입력이 끝났습니다!");
//       }, 1000);
//     }

//     return () => {
//       if (timer) clearTimeout(timer);

//       console.log(nowV + " 가 UnMount 됨.");
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

// import React, { useRef } from "react";

// function App() {
//   const ref = useRef();
//   const ref2 = useRef();

//   const onClick = () => {
//     ref.current.innerText = "바꿨다!";
//     console.log(ref);
//   };

//   const onClick2 = () => {
//     ref2.current.focus();
//   };

//   return (
//     <div>
//       <div ref={ref}>바꿔줘!</div>
//       <button onClick={onClick}>바꾸기!</button>
//       <br />
//       <br />
//       <input placeholder="날 봐줘!" ref={ref2} />
//       <br />
//       <button onClick={onClick2}>볼게!</button>
//     </div>
//   );
// }

// export default App;

// useMemo 예제

// import React, { useMemo, useState } from "react";

// function App() {
//   const [num, setNum] = useState("");
//   const [numbers, setNumbers] = useState([]);

//   const onClick = () => {
//     setNumbers(numbers.concat(Number(num)));
//   };

//   const onChange = (e) => {
//     setNum(e.target.value);
//   };

//   const addFunc = () => {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }

//     sleep(500);

//     console.log("합 : " + sum);

//     return sum;
//   };

//   //   const sumNumber = addFunc();

//   const sumNumber = useMemo(() => addFunc(), [numbers]);

//   return (
//     <div>
//       {numbers.map((number, index) => {
//         return <div key={index}>{number} +</div>;
//       })}
//       <div> = {sumNumber}</div>
//       <input placeholder="더할 숫자" value={num} onChange={onChange} />
//       <button onClick={onClick}>추가</button>
//     </div>
//   );
// }

// function sleep(ms) {
//   const wakeUpTime = Date.now() + ms;
//   while (Date.now() < wakeUpTime) {}
// }

// export default App;

// useCallback 예제

// import React, { useState, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   // const showCount = () => {
//   //   console.log(count);
//   // };

//   const showCount = useCallback(() => {
//     console.log(count);
//   }, [count]);

//   const onClickUp = () => {
//     setCount(count + 1);
//   };

//   showCount();

//   return (
//     <div>
//       <div>Count : {count}</div>
//       <button onClick={onClickUp}>Up</button>
//     </div>
//   );
// }

// export default App;

// 커스텀 훅 예제

// import React, { useState } from "react";

// const useInput = () => {
//   const [value, setValue] = useState("");

//   const onChange = (e) => {
//     setValue(e.target.value);
//   };

//   return [value, onChange];
// };

// function App() {
//   const [input1, onChange1] = useInput();
//   const [input2, onChange2] = useInput();
//   const [input3, onChange3] = useInput();

// //   const [input1, setInput1] = useState("");
// //   const [input2, setInput2] = useState("");
// //   const [input3, setInput3] = useState("");

// //   const onChange1 = (e) => {
// //       setInput1(e.target.value)
// //   }

// //   const onChange2 = (e) => {
// //     setInput2(e.target.value)
// // }

// // const onChange3 = (e) => {
// //     setInput3(e.target.value)
// // }

//   return (
//     <div>
//       <input placeholder="1번!" value={input1} onChange={onChange1} />
//       <input placeholder="2번!" value={input2} onChange={onChange2} />
//       <input placeholder="3번!" value={input3} onChange={onChange3} />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useRef, useEffect } from "react";

// const App = () => {
//   const [age, setAge] = useState(20);
//   const prevAgeRef = useRef(20);

//   useEffect(() => {
//     console.log(age);
//     prevAgeRef.current = age;
//   }, [age]);

//   const prevAge = prevAgeRef.current;
//   const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

//   return (
//     <div>
//       <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
//       <button
//         onClick={() => {
//           const age = Math.floor(Math.random() * 50 + 1);
//           setAge(age);
//         }}
//       >
//         나이 변경
//       </button>
//     </div>
//   );
// };

// export default App;
