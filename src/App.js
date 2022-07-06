import { useEffect, useState } from "react";

function App() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(0);
  const [mAvg1, setmAvg1] = useState(0);
  const [mAvgAarr1, setMAvgArr1] = useState([]);
  const [XMinusAvg, setXMinusAvg] = useState(0);
  console.log(mAvgAarr1);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name == "k") {
      setK(value);
    } else if (name == "n") {
      setN(value);
    } else if (name == "1") {
      setMAvgArr1(e.target.value.split(",").map((v) => Number(v)));
      getXvarAvg();
      getXMinusXvar();
    }
  };
  console.log(mAvgAarr1);
  // 모평균 구하는 함수
  const getXvarAvg = () => {
    setmAvg1(
      mAvgAarr1?.reduce((prev, curr) => prev + curr, 0) / mAvgAarr1?.length
    );
  };
  // 표본 - 표본평균
  const getXMinusXvar = () => {
    let sum = 0;
    mAvgAarr1.forEach((m) => (sum += (m - mAvg1) * (m - mAvg1)));
    setXMinusAvg(sum);
  };
  useEffect(() => {
    getXvarAvg();
    getXMinusXvar();
  }, [mAvg1, mAvgAarr1]);
  return (
    <div className="App">
      <h1>모집단을 1, 2, 3 .. 이런 식으로 콤마로 구분해서 넣어주기</h1>

      <input name="1" placeholder="모집단1 넣기" onChange={onChange}></input>
      <p>평균1 : {mAvg1} </p>
      <p>
        모집단의 {"("}표본 - 위에서 구한 평균{")^2"} : {XMinusAvg}
      </p>
    </div>
  );
}

export default App;
