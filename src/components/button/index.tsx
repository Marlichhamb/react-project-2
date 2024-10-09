/// <reference types="vite-plugin-svgr/client" />


import { FC } from "react";
import { MyButton } from "./components";


interface ButtonProps {
    color: string;
}

export const Button: FC<ButtonProps> = ({color}) => {

    return (
        <MyButton color={color}/>
    )
}
