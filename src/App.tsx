import { useLayoutEffect, useState } from 'react'

import { getSpeech } from '@utils/tts'

function App() {
  const [line, setLine] = useState('')

  useLayoutEffect(() => {
    window.speechSynthesis.getVoices()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLine(e.target.value)
  }

  const handleSpeech = () => {
    getSpeech(line)
  }

  return (
    <>
      <h1 className="text-wrap text-8xl">Vite + React</h1>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSpeech}>말하기</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
