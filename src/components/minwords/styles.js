import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const CustonMinWords=styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: red;
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    
`
export const TextDiv=styled.div`
    width: 40%;
    background-color: green;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    text-align: end;
    
`


export const ImgDiv=styled.div`
    width: 60%;
    height: 100%;
    background-color: green;
    display: flex;
    flex-direction: row-reverse;
    
`
export const Image=styled.img`
    width: 100%;
    height: 100%;
    background-color: green;
    display: flex;
    flex-direction: row-reverse;
    
`
export const Linktitulo=styled(NavLink)`

height:20%;
`
export const H3=styled.h3`
    
    
`
export const Resalto=styled.div`
    background-color: aqua;
    position: relative;
    width: 100%;
    height: 30%;
    &>p{
        position: absolute;
        background-color: red;
        width: 120%;
        height: 100%;
        padding: 3rem;
        right: 0;
        
    }

    
`
export const DivPs=styled.div`
    display: flex;
    justify-content: space-around;
`