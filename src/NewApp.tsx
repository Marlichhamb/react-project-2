import { FC, useEffect, useState } from "react";
import { MainWrapper } from "./components/MainWrapper";
import { WorkPlace } from "./components/WorkPlace";
import { Shtick } from "./components/Shtick";
import { cardArrayDefault} from "./constants/general";
import { LineWrapper } from "./components/LineWrapper";
import { Button } from "./components/button";
import { palette } from "./constants/palette";

const NewApp: FC = () => {

    const [cardArray, setCardArray] = useState(cardArrayDefault);
    
    const handlerShtick = (innerIndex: number, exterIndex: number) => {

        const newCardArray = [...cardArray];

        newCardArray[exterIndex][innerIndex].color = '#58e8d4'

        setCardArray(newCardArray)
    }
 console.log('cardArray', cardArray);
 useEffect(() => {

    console.log("cardArrayDefault", cardArrayDefault);

 }, [cardArrayDefault])
 
 

    const clearBoard = () => {

        
        
        setCardArray(cardArrayDefault);

        console.log('Clicked!');
        
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

        <MainWrapper color={palette.panelColor}>
        <Button color="#000000" onClick={clearBoard}/>
        </MainWrapper>

    </>
 )
}

export default NewApp;