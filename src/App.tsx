import { useState, FC } from 'react'

import './App.css'
import { Button } from './components/button';

const App: FC = () => {
  const [buttonColors, setButtonColors] = useState<string[]>(['black','black','black','black','black','black','black','black','black','black','black','black']);

  const [buttonStates, setButtonStates] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  
  const getElementFromArray = (array: number[] | string[]): number | string => {
    const randomIndex = Math.trunc(Math.random() * array.length)

    return array[randomIndex];
  }

  const getState = (): number => {
    const states: number[] = [-1, 0, 1]

    return getElementFromArray(states) as number
  }
  
  const getColor = (): string => {
    const colors: string[] = ['navy', 'darkgreen', 'darkred', 'purple', 'brown']

    return getElementFromArray(colors) as string
  }

  const clickButton = (buttonIndex: number) => {


    const updatedStates = buttonStates.map((state, index) => {
      if (buttonIndex === index) {
        return getState();
      }
      return state;
    })

    const updatedColors = buttonColors.map((color, index) => {
      if (buttonIndex === index) {
        return getColor();
      }
      return color;
    })

    // const updatedColors = [...buttonColors];
    // updatedColors[buttonIndex] = getColor();
    
    setButtonColors(updatedColors)
    setButtonStates(updatedStates)

  }

  const renderButton = (index: number) => <Button onClick={() => clickButton(index)} color={buttonColors[index]} state={buttonStates[index]} />;

  return (
    <>
      <div className="card">
        <div>
          {buttonColors.map((_, index) => renderButton(index) )}
        </div>
      </div>
    </>
  )
}

export default App
