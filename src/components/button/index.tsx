import { FC } from "react";

interface ButtonProps {
    color: string;
    onClick: () => void;
}

export const Button: FC<ButtonProps> = ({color, onClick}) => {
    return (
    <button onClick={onClick} style={{ backgroundColor: color}}>
    </button>   
    )
}