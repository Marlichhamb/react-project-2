import { FC } from "react";
import { PlayerCard } from "./components";
import {EPlayerActive} from "../../NewApp.tsx";

export interface PlayerBoxProps {
    active: EPlayerActive;
    order: 'O' | 'X';
}
export const PlayerBox: FC<PlayerBoxProps> = ({ active, order }) => {
const activePlayer = active === order
    return (

     <PlayerCard active={activePlayer}>
         {`${order === 'O' ? 'O' : 'X'}`}
     </PlayerCard>

)


}