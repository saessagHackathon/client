export const getSpeech = (text: string) => {
  let voices: SpeechSynthesisVoice[] = []

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices()
  }

  setVoiceList()

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList
  }

  const speech = (line: string) => {
    const lang = 'ko-KR'
    const utterThis = new SpeechSynthesisUtterance(line)

    utterThis.lang = lang

    const korVoice = voices.find((elem) => elem.voiceURI === 'Google 한국의')

    if (korVoice) {
      utterThis.voice = korVoice
    } else {
      return
    }

    window.speechSynthesis.speak(utterThis)
  }

  speech(text)
}
