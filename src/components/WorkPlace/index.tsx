import { FC, PropsWithChildren } from "react";
import { BigPlace } from "./components";


export const WorkPlace: FC<PropsWithChildren> = ({children}) => {

    return (
        <BigPlace>
            {children}
        </BigPlace>
    )

}