import styled from "styled-components";
import { heightPropsToString } from "../../helpers/heightPropsToString";

interface WithColor {
    color?: string;
    height?: number;
}

export const MainWindow = styled.div<WithColor>`
width: 100%;
height: ${({height}) => heightPropsToString(height)};
background-color: ${({color}) => color ? color : '#e00bab'};
` 
// height: ${({height}) => (height && height < 100 ) ? `${height}px` : '100px'};
