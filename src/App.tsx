import { useState, FC  } from 'react'

import './App.css'
import { Button } from './components/button';

const App: FC = () => {
  const [buttonColors, setButtonColors] = useState<string[]>(['green', 'red', 'blue']);

  const [buttonStates, setButtonStates] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  
  const getElementFromArray = (array: number[] | string[]): number | string => {
    const randomIndex = Math.trunc(Math.random() * array.length)

    return array[randomIndex];
  }
  

  const getState = (): number => {
    const states: number[] = [-1, 0, 1]

    return getElementFromArray(states) as number
  }
  
  const getColor = (): string => {
    const colors: string[] = ['green', 'red', 'blue']

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

    setButtonColors(updatedColors)
    setButtonStates(updatedStates)

    checkColor(buttonColors[buttonIndex])

  }

  const needChangeColor = (color: string, num = 2): boolean => checkColor(color) > num
    
  const checkColor = (color: string) => buttonColors.reduce((acc: number, item: string) => {
    if (color === item) {
      return acc + 1 
    }
    return acc
  }, 0) 




  const renderButton = (index: number) => <Button onClick={ () => clickButton(index)} color={buttonColors[index]} />;

  return (
    <>
      <div className="card" >
        <div>
          {buttonColors.map((_, index) => renderButton(index) )}
        </div>
      </div>
    </>
  )
}

export default App
