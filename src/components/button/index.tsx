import { FC } from "react";

interface ButtonProps {
    color: string;
    onClick: () => void;
    state: number;
}

export const Button: FC<ButtonProps> = ({color, onClick, state}) => {

    const renderLetter = () => {

        switch (state) {
            case -1:
                return 'X'
            case 1:
                return 'O'
            default:
                return
        }
    }
    return (
    <button onClick={onClick} style={{    
        backgroundColor: color
    }} >
        {renderLetter()}
    </button>   
    )
}