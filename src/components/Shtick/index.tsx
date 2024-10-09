import { FC } from "react";
import { ShtickBlock } from "./components"

export interface ShtickProps {
    color: string;
    borderColor?: string;
    text: string;
}

export const Shtick: FC<ShtickProps>= ({text, color, borderColor}) => {
    return (
    <ShtickBlock color={color} borderColor={borderColor}>
        {text}
    </ShtickBlock>
    )
}