import { FC } from "react";
import { MyButton } from "./components";
import { palette } from "../../constants/palette";


interface ButtonProps {
    color: string;   
    onClick: () => void;


}

export const Button: FC<ButtonProps> = ({color, onClick}) => {

    return (
        <MyButton bgColor={palette.buttonColor} color={color} onClick={onClick}> clean </MyButton>
    )
}
