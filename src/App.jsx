import { useState } from 'react'
import Flashcardlist from "./Flashcardlist";
import "./App.css";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <Flashcardlist flashcards={flashcards} />
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "what is 2 + 2",
    answer: "Answer: 4",
    options: [
      '2',
      '3',
      '4',
      '5'
    ]

  },
  {
    id: 1,
    question: "what is 3 + 2",
    answer: "Answer: 5",
    options: [
      '1',
      '3',
      '4',
      '5'
    ]

  }
]

export default App
