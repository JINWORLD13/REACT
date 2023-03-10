import React from "react";
import styled from "styled-components";

const Happiness = () => {
    return(
        <div>
            <ExplainSC1>
                <h1>행복지수란?</h1>
                <h2>행복지수란 자신이 얼마나 행복한가를 스스로 측정하는 지수입니다.</h2>
            </ExplainSC1>
            <ExplainSC2></ExplainSC2>
            <ExplainSC1></ExplainSC1>
            <ExplainSC2></ExplainSC2>
        </div>
    )
}

const ExplainSC1 = styled.div`
    height : 30em;
    background-color : green;
`

const ExplainSC2 = styled.div`
    height : 30em;
    background-color : yellow;
`

export default Happiness;