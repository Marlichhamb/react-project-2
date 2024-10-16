import { FC, useState } from "react";
import { MainWrapper } from "./components/MainWrapper";
import { WorkPlace } from "./components/WorkPlace";
import { Shtick } from "./components/Shtick";
import  {cardArrayDefault} from "./constants";
import { LineWrapper } from "./components/LineWrapper";
import { Button } from "./components/button";

const NewApp: FC = () => {

    const [cardArray, setCardArray] = useState(cardArrayDefault)

    const handlerShtick = (innerIndex: number, exterIndex: number) => {
        console.log(innerIndex, exterIndex);
        
    }

 return (
    <>

        <WorkPlace> 
            <>
            {/* <Shtick color={cardArray[0][0].color} text={cardArray[0][0].text} borderColor={cardArray[0][0].borderColor}/> */}
            {cardArray.map((arr, exterIndex) => {

            return <LineWrapper>
               { arr.map(({color, text, borderColor}, innerIndex) => {
                    return <Shtick color={color} borderColor={borderColor} text={text} onClick={handlerShtick} innerIndex={innerIndex} exterIndex={exterIndex}/>
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