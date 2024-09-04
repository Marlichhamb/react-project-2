/// <reference types="vite-plugin-svgr/client" />


import { FC } from "react";
// import FullLikeIcon from '../../assets/Icons/FullLikeIcon.svg?react'
// import LikeIcon from '../../assets/Icons/LikeIcon.svg?react'


interface ButtonProps {
    color: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({color, onClick}) => {

    return (
    <button onClick={onClick} style={{    
        backgroundColor: color
    }} >

    </button>   
    )
}
