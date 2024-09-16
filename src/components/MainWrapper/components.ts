import styled from "styled-components";

interface WithColor {
    color?: string;
}

export const MainWindow = styled.div<WithColor>`
width: 100%;
height: 100%;
background-color: ${({color}) => color ? color : '#e00bab'};
` 