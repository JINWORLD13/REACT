import React from 'react';
import styled from 'styled-components';


const Home = () => {
  return (
    <div>
      <SideStyled>
        {/* 카테고라기 따라오지 않는 사이드바 작성중 */}
        {/* 모달 형식 쓸 예정없음  클릭 여부에 따라 OnOff는 줄 예정  */}
        <warp>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        <section>content1</section>
        </warp>
        <section>content2</section>
      </SideStyled>
    </div>
  )
}

const SideStyled = styled.div`
    display: block;
    border-right: 3px solid #808080;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
    left: 0;
    height: 100%;
    width: 30%;
`
// const SideDivStyled = styled.div`
  
//   width: 100%;
//   height: 100%;
//   background-color: aquamarine;


// `



export default Home;