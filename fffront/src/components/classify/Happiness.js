import React from "react";
import styled from "styled-components";

// 행복지수가 가장 높은 5개의 구
import HappinessHigh from "../recharts/Happiness/HappinessTotal";
// import HospitalHigh from "../recharts/Hospital/HospitalTotal";

const Happiness = () => {
    return(
        <div>
            <ExplainSC1>
                <H1SC>행복지수란?</H1SC>
                <ImgSC src = 'img/Happiness.jpeg' alt = "HappinessIMG" />
                <H2SC>자신이 얼마나 행복한가를 스스로 측정하는 지수입니다</H2SC>
            </ExplainSC1>
            <ExplainSC2>
                <H1SC>행복지수가 가장 높은 5개의 구는 다음과 같습니다!</H1SC>
                {/* 가장 높은 5개의 구 그래프 */}
                {/* 이 그래프의 CSS등을 어떻게 다루는게 좋을까요... */}
                <HappinessHigh />
            </ExplainSC2>
            {/* <ExplainSC3>
                <H1SC>병원수가 가장 높은 5개의 구는 다음과 같습니다!</H1SC>
                <HospitalHigh />
            </ExplainSC3> */}
            <ExplainSC1>
                여기에는 GET해서 불러온 행복지수 점수별로 띄우기
            </ExplainSC1>
            <ExplainSC2>
                멋있는 멘트 ^^
            </ExplainSC2>
        </div>
    )
}

const H1SC = styled.h1`
    text-align : center;
    padding : 1em;
`

const H2SC = styled.h2`
    text-align : center;
    padding : 1em;
`

const ImgSC = styled.img`
    margin : auto;
    display : block;
    height : 18em;
    width : 22em;
`

const ExplainSC1 = styled.div`
    height : 30em;
`

const ExplainSC2 = styled.div`
    height : 30em;
    background-color : #2C41FBBA;
`
const ExplainSC3 = styled.div`
    height : 30em;
    background-color : #2C41FBBA;
`

export default Happiness;