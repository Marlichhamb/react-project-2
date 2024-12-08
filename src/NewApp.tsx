import { FC, useState } from "react";
import { MainWrapper } from "./components/MainWrapper";
import { WorkPlace } from "./components/WorkPlace";
import { Shtick } from "./components/Shtick";
import { cardArrayDefault} from "./constants/general";
import { LineWrapper } from "./components/LineWrapper";
import { Button } from "./components/button";
import { palette } from "./constants/palette";
import { PlayerBox } from "./components/Player";
import { PlayerCardPannels } from "./components/Player/components";

export enum EPlayerActive {
    one = 'one',
    two ='two'
}
const NewApp: FC = () => {

    const [player, setPlayer] = useState<EPlayerActive>(EPlayerActive.one)

    const [cardArray, setCardArray] = useState(cardArrayDefault);
    
    const handlerShtick = (innerIndex: number, exterIndex: number) => {
    setPlayer((prev)=> prev === EPlayerActive.one ? EPlayerActive.two : EPlayerActive.one)
        const newCardArray = [...cardArray];

        newCardArray[exterIndex][innerIndex].color = '#58e8d4'

        setCardArray(newCardArray)
    }

    const clearBoard = () => {

        
        setCardArray(cardArray.map((arr) => arr.map((a)=>({...a, color: palette.shtickColor}))))
    }

 return (
    <>
      <PlayerCardPannels>
        <PlayerBox active={player} order={'one'}/>
        <PlayerBox active={player} order={'two'}/>
      </PlayerCardPannels>
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