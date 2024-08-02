import { useState, FC } from 'react'

import './App.css'
import { Button } from './components/button';

const App: FC = () => {
  const [buttonColors, setButtonColors] = useState<string[]>(['black','black','black','black', 'black']);
  
  const getColor = (): string => {
    const colors: string[] = ['red', 'green', 'yellow', 'white','blue', 'voilet']
    const randomColorIndex = Math.trunc(Math.random() * colors.length);

    return colors[randomColorIndex]
  }

  const clickButton = (buttonIndex: number) => {

    const updatedColors = buttonColors.map((color, index) => {
      if (buttonIndex === index) return getColor();
      return color;
    })

    // const updatedColors = [...buttonColors];
    // updatedColors[buttonIndex] = getColor();
    
    setButtonColors(updatedColors)

  }

  return (
    <>
      <div className="card">
        <div>
          {buttonColors.map((_, index) => {

            return ( <Button onClick={() => clickButton(index)} color={buttonColors[index]} />)

          })}
        </div>
      </div>
    </>
  )
}

export default App
