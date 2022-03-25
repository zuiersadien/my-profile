import styled from "styled-components";
export const PortafolioDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
`;

export const Texto = styled.div`

  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &>div{
    padding: 2rem;
  }
  & >div> h2 {
      font-size: 3.2rem;
      text-align: end;
      padding: 2rem 0;
  }
  & >div> p {
    font-size: 2rem;
    text-align: end;
  }
`;
export const SpinnerDiv = styled.div`
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const BarrasDiv = styled.div`
    width: 100%;
    
    &>div{
        text-align: start;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
    }
    &>div>div{
        width: 70%;
        height: 0.3rem;
        background-color: #393E46;
    }
`;

export const ImgSpiner = styled.div`
  width: 75%;
  height: auto;
  filter: drop-shadow(10px 10px 5px hsla(0, 0%, 0%, 0.461));
  display: grid;
`;
export const DivIcon = styled.div`
    position: absolute;
    color: #222831;
    font-size: 2rem;
    &:first-child{
        top: 20%;
        right: 40%;
    }
    &:nth-child(2){
        top: 40%;
        left: 20%;
        font-size: 2.5rem;
    }
    &:nth-child(3){
        top: 50%;
        right: 40%;
    }
    &:nth-child(4){
        top: 40%;
        left: 40%;
        font-size: 2rem;
    }
    &:nth-child(5){
        top: 70%;
        left: 50%;
         font-size: 3rem;
    }
    &:nth-child(6){
        top: 60%;
        right: 60%;
    }
    &:nth-child(7){
        top: 50%;
        left: 80%;
        font-size: 4rem;
    }
    }
    &:nth-child(8){
        top: 70%;
        right: 80%;
        font-size: 3rem;
    }
    &:nth-child(9){
        top: 15%;
        left: 10%;
        font-size:3rem;
    }
    &:nth-child(10){
        top: 10%;
        right: 20%;
        font-size:3rem;
    }
    &:nth-child(11){
        top: 3%;
        left: 40%;
        font-size:3rem;
    }
`
