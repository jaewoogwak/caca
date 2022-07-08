import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <Wrapper>
      <Inner>
        <Title>평균 및 편차제곱 계산기</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DataInput
            name="1"
            placeholder="모집단1 넣기"
            onChange={onChange}
          ></DataInput>
          <Text>평균1 : {mAvg1} </Text>
          <Text>
            모집단의 {"("}표본 - 위에서 구한 평균{")^2"} : {XMinusAvg}
          </Text>
        </div>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Inner = styled.div`
  position: absolute;
  border: 0.5px solid gray;
  width: 800px;
  height: 400px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
const Title = styled.h1`
  text-align: center;
`;
const DataInput = styled.input`
  width: 200px;
  height: 30px;
  text-align: center;
  margin-top: 40px;
`;
const Text = styled.p`
  text-align: center;
`;

export default App;
