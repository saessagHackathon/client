import 'regenerator-runtime/runtime'
import { useLayoutEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'

import { getSpeech } from '@utils/tts'

function App() {
  const [line, setLine] = useState('')

  useLayoutEffect(() => {
    window.speechSynthesis.getVoices()
  }, [])

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

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

      <div className="flex flex-col">
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button
          onClick={() => {
            SpeechRecognition.startListening()
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            SpeechRecognition.stopListening()
          }}
        >
          Stop
        </button>
        <button onClick={resetTranscript}>Reset</button>
        <p>문장: {transcript}</p>
      </div>
    </>
  )
}

export default App
