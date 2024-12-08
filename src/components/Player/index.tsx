import { FC } from "react";
import { PlayerCard } from "./components";
import {EPlayerActive} from "../../NewApp.tsx";

export interface PlayerBoxProps {
    active: EPlayerActive;
    order: 'one' | 'two';
}
export const PlayerBox: FC<PlayerBoxProps> = ({ active, order }) => {
const activePlayer = active === order
    return (

     <PlayerCard active={activePlayer}>
         {`${order === 'one' ? 'O' : 'X'}`}
     </PlayerCard>

)


}