import styled from "styled-components";

export interface ShtickBlockProps {
    color: string;
    borderColor?: string;
}

export const ShtickBlock = styled.div<ShtickBlockProps>`
margin: 7px;
justify-content: center;
display: flex;
align-items: center;
height: 80px;
width: 80px;
border: ${({borderColor}) => borderColor ? `solid ${borderColor} 2px` : null};
border-radius: 8px; 
background-color: ${({color}) => color ? color : '#e00bab'};
`