import styled from "styled-components";

export interface PlayerCardProps {
    active: boolean;
}

export const PlayerCard = styled.div<PlayerCardProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: ${({active}) => active ? '#b0d7ff' : '#6489da'};
    border-radius: 10px;
    width: 100px;
    height: 60px;
`

export const PlayerCardPannels = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 130px;
`