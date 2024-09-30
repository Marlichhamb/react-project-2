import { FC } from "react";
import { MainWrapper } from "./components/MainWrapper";

const NewApp: FC = () => {
 return (
    <>
        <MainWrapper height={15} >
        "Hello, world!" 
        </MainWrapper>

        <MainWrapper color="red" height={30}>
        "Bye, world!"
        </MainWrapper>

        <MainWrapper color="green" height={300}>
        "Die, world!"
        </MainWrapper>
    </>
 )
}

export default NewApp;