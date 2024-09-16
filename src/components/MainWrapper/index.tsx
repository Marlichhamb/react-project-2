import { FC, PropsWithChildren } from "react";
import { MainWindow } from "./components";

export interface MainWrapperProps {
    color?: string;
}

export const MainWrapper: FC<PropsWithChildren<MainWrapperProps>> = ({children, color}) => {
 return (
    <MainWindow color={color}>s
        {children}
    </MainWindow>
 )
}