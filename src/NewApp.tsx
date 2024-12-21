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
import {WinnerMessenger} from "./components/winner/components.ts";

// eslint-disable-next-line react-refresh/only-export-components
export enum EPlayerActive {
    one = 'O',
    two ='X'
}
const NewApp: FC = () => {

    const [player, setPlayer] = useState<EPlayerActive>(EPlayerActive.one)

    const [cardArray, setCardArray] = useState(cardArrayDefault);

    const [message, setMessage] = useState<string>('')



    const handlerShtick = (innerIndex: number, exterIndex: number) => {
        if (cardArray[exterIndex][innerIndex].player === '' && !message) {
            setPlayer((prev)=> prev === EPlayerActive.one ? EPlayerActive.two : EPlayerActive.one)
            const newCardArray = [...cardArray];
            // newCardArray[exterIndex][innerIndex].player = player === EPlayerActive.one ? 'O' : 'X'
            newCardArray[exterIndex][innerIndex].player = player;
            setCardArray(newCardArray)
        }

        const checkResult = checkWinner()
        if (checkResult) {
            return
        }
        if (checkDeadHeat() && !message) {
            setMessage(`DEAD HEAT`)
            setCardArray(cardArray.map((arr) => arr.map((a) => ({
                ...a,
                color: palette.shtickColor,
                borderColor: '#161b72'
            }))))
        }
    }

    const checkDeadHeat = () => {
     const counter = cardArray.reduce((count, item  ) => {
             return count + item.reduce ((count2, item2) => {
                if (item2.player != '') {
                    return count2 + 1;
                }
                return count2;
            },0)
        },0)

        return counter >= 9;
    }

    const checkWinner = () => {
        let resultOne = false
        winnerCombinations.forEach((combination) => {

            const result = combination.reduce((count, {ex, int}) => {
                if (cardArray[ex][int].player === player) {
                    return count + 1;
                }
                return count;
            }, 0)

            if (result === 3) {
                setMessage(`WINNER : ${player}`)
                combination.forEach(({ex, int}) => {
                     cardArray[ex][int].borderColor = '#161b72'
                })
                resultOne = true
            }
        })
        return resultOne
    }



    const clearBoard = () => {
        setCardArray(cardArray.map((arr) => arr.map((a)=>({...a, color: palette.shtickColor, player: '', borderColor: ''}))))
        setPlayer(EPlayerActive.one)
        setMessage('')
    }

 return (
    <>
      <PlayerCardPannels>
        <PlayerBox active={player} order={'O'}/>
        <PlayerBox active={player} order={'X'}/>
      </PlayerCardPannels>

        <WinnerMessenger>
            {message}
        </WinnerMessenger>

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