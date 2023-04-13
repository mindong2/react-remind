import React, { useState } from "react";

const Form = () => {
  // ts는 보통 타입을 추론을 해준다 state에서 타입변화는 자주 없지만 union type
  /*
  const [first, setFirst] = useState(1); //number 추론
  const [second, setSecond] = useState<number | string>("");
  setSecond("");
  setSecond(2);*/
  // setSecond(true); -> err

  const [value, setValue] = useState("");
  // event는 React.FormEvent -> input엘리먼트에서 사용
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Form;
