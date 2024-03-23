"use client"; //기본적으로 server 컴포넌트이기 때문에 client 컴포넌트라는 선언을 해줘야 useEffect 같은 hook 사용 가능

import { useEffect, useState } from "react";

export default function index() {
  const [message, setMessage] = useState("loading"); //기본값은 loading으로 설정(fetch 완료되기전까지)

  //fetch 진행 -> 진행완료되면 받은값 response.json으로 변환 -> 변환한 데이터의 메세지로 기본값(loading) 변경
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message); //렌더링이 끝나면 data.message의 값으로 변경("loading" ->"이것은 서버에서 출력한 구문입니다.")
      });
  });
  return <div>{message}</div>;
}
