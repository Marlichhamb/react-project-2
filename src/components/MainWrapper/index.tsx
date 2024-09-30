import { FC, PropsWithChildren } from "react";
import { MainWindow } from "./components";

export interface MainWrapperProps {
    color?: string;
    height?: number;

}

export const MainWrapper: FC<PropsWithChildren<MainWrapperProps>> = ({children, color, height}) => {
 return (
    <MainWindow height={height} color={color}>
        {children}
    </MainWindow>
 )
}