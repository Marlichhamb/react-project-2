import { FC } from "react";
import { MyButton } from "./components";


interface ButtonProps {
    color: string;   
    onClick: () => void;


}

export const Button: FC<ButtonProps> = ({color, onClick}) => {

    return (
        <MyButton bgColor="Green" color={color} onClick={onClick}> go </MyButton>
    )
}
