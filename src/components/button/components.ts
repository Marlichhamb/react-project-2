import styled from "styled-components";

export interface MyButtonProps {
    color: string
}

export const MyButton = styled.button<MyButtonProps>`
margin: 0;
padding: 0px;
height: 50px;
width: 100px;
border: none;
border-radius: 5px;
background-color: ${({color}) => color ? color : 'red'}

`