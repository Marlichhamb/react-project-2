import { FC } from "react";
import { ShtickBlock } from "./components"

export interface ShtickProps {
    color: string;
    borderColor?: string;
    text: string;
    innerIndex: number;
    exterIndex: number;
    onClick: (innerIndex: number, exterIndex: number) => void;
}

export const Shtick: FC<ShtickProps>= ({text, color, borderColor, onClick, innerIndex, exterIndex}) => {
    const handlerClick = () => {
        onClick(innerIndex, exterIndex)
    }
    
    return (
    <ShtickBlock color={color} borderColor={borderColor} onClick={handlerClick}>
        {text}
    </ShtickBlock>
    )
}