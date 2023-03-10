import React from "react";
import styled from "styled-components";

const Happiness = () => {
    return(
        <div>
            <ExplainSC1>
                <H1SC>행복지수란?</H1SC>
                <ImgSC src = 'img/Happiness.jpeg' alt = "HappinessIMG" />
                <h2>자신이 얼마나 행복한가를 스스로 측정하는 지수입니다</h2>
            </ExplainSC1>
            <ExplainSC2>
                <H1SC>각 구별 행복지수를 알아보면 다음과 같습니다.</H1SC>
                {/* 생각보다 크기가 작고, 잘 안보여서 논의 필요함 */}
                <ImgSC src = 'img/happiness_bar_3team.png' alt = "HappinessBar" />
            </ExplainSC2>
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
    padding : 1em;
`

const ImgSC = styled.img`
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

export default Happiness;