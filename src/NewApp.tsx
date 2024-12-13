import { FC, useState } from "react";
import { MainWrapper } from "./components/MainWrapper";
import { WorkPlace } from "./components/WorkPlace";
import { Shtick } from "./components/Shtick";
import {cardArrayDefault, winnerCombinations} from "./constants";
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

    const checkWinner = () => {
        let winCounter = 0;
        winnerCombinations.forEach((combination) => {
            combination.reduce((count, { ex, int}) => {
                if (cardArray[ex][int].player === player) {
                    count++;
                }
            }, 0)
        })
    }
    
    const handlerShtick = (innerIndex: number, exterIndex: number) => {
        if (cardArray[exterIndex][innerIndex].player === '') {

            setPlayer((prev)=> prev === EPlayerActive.one ? EPlayerActive.two : EPlayerActive.one)
            const newCardArray = [...cardArray];
            // newCardArray[exterIndex][innerIndex].player = player === EPlayerActive.one ? 'O' : 'X'
            newCardArray[exterIndex][innerIndex].player = player;

            setCardArray(newCardArray)
        }
    }

    const clearBoard = () => {
        setCardArray(cardArray.map((arr) => arr.map((a)=>({...a, color: palette.shtickColor, player: ''}))))

        setPlayer(EPlayerActive.one)
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
               { arr.map(({color, player, borderColor}, innerIndex) => {
                    return <Shtick color={color} borderColor={borderColor} text={player} onClick={handlerShtick} innerIndex={innerIndex} exterIndex={exterIndex}/>
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