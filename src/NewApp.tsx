import { FC } from "react";
import { MainWrapper } from "./components/MainWrapper";
import { WorkPlace } from "./components/WorkPlace";
import { Shtick } from "./components/Shtick";
import  cardArray  from "./constants";
import { LineWrapper } from "./components/LineWrapper";
import { Button } from "./components/button";

const NewApp: FC = () => {
 return (
    <>
        

        <WorkPlace> 
            <>
            {/* <Shtick color={cardArray[0][0].color} text={cardArray[0][0].text} borderColor={cardArray[0][0].borderColor}/> */}
            {cardArray.map((arr) => {

            return <LineWrapper>
               { arr.map(({color, text, borderColor}) => {
                    return <Shtick color={color} borderColor={borderColor} text={text}/>
                })}
                </LineWrapper>

            })}
            </>
        </WorkPlace>

        <MainWrapper color="#ed7249">
        <Button color="#000000"/>
        </MainWrapper>

    </>
 )
}

export default NewApp;