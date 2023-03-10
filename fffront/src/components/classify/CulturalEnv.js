import React from "react";
import styled from "styled-components";

const CulturalEnv = () => {
    return(
        <div>
            <ExplainSC1>
                <H1SC>문화 환경 만족도란?</H1SC>
                <ImgSC src = 'img/CulturalEnvPic.jpeg' alt = "CulturalEnvIMG" />
                <H2SC>풍요로운 삶을 위하여 사회 구성원들이 공통적으로 습득하고 전달하는 행동 양식을 형성하는 환경입니다.</H2SC>
            </ExplainSC1>
            <ExplainSC2>
                <H1SC>각 구별 문화 환경 만족도를 알아보면 다음과 같습니다.</H1SC>
                {/* 생각보다 크기가 작고, 잘 안보여서 논의 필요함 */}
                <ImgSC src = 'img/cultural_environment_bar.PNG' alt = "culturalenvironmentBar" />
            </ExplainSC2>
            <ExplainSC1>
                여기에는 GET해서 불러온 문화환경 만족도 점수별로 띄우기
            </ExplainSC1>
            <ExplainSC2>
                멋있는 멘트 ^^
            </ExplainSC2>
        </div>
    )
}

const H1SC = styled.h1`
    text-align : center;
    padding : 0.5em;
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

export default CulturalEnv;