import { useState, useEffect, useRef } from "react"

const MatrixGame = ({ onWin, onBack }) => {
  const [gameStage, setGameStage] = useState(0) // 0: intro, 1: password crack, 2: code decrypt, 3: final hack, 4: success
  const [gameWon, setGameWon] = useState(false)
  const [currentInput, setCurrentInput] = useState("")
  const [terminalLines, setTerminalLines] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [attempts, setAttempts] = useState(3)
  const [currentChallenge, setCurrentChallenge] = useState(null)
  const terminalRef = useRef(null)

  // Game challenges
  const challenges = {
    password: {
      title: "SECURITY BREACH DETECTED",
      description: "Crack the password using the given clues",
      clues: ["First name of Neo's real identity", "Lowercase, 8 letters"],
      answer: "anderson",
      hint: "The One's surname in the real world...",
    },
    decrypt: {
      title: "NEXT SECURITY LAYER FOUND",
      description: "Decode this binary message",
      code: "01010100 01101000 01100101 01001111 01101110 01100101",
      answer: "the one",
      hint: "Neo is also called?? The _ _ _ (all lowercase)",
    },
    hack: {
      title: "MAINFRAME ACCESS",
      description: "Complete the Matrix code sequence",
      pattern: "WAKE UP NEO",
      answer: "wake up neo",
      hint: "What did Morpheus tell Neo?",
    },
  }

  useEffect(() => {
    if (gameStage === 0) {
      startIntroSequence()
    }
  }, [gameStage])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalLines])

  const addTerminalLine = (text, delay = 0, isUser = false) => {
    setTimeout(() => {
      setTerminalLines((prev) => [...prev, { text, isUser, timestamp: Date.now() }])
    }, delay)
  }

  const typeText = async (text, delay = 50) => {
    setIsTyping(true)
    for (let i = 0; i <= text.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, delay))
      setTerminalLines((prev) => {
        const newLines = [...prev]
        if (newLines.length > 0) {
          newLines[newLines.length - 1] = {
            ...newLines[newLines.length - 1],
            text: text.substring(0, i),
          }
        }
        return newLines
      })
    }
    setIsTyping(false)
  }

  const startIntroSequence = async () => {
    setTerminalLines([])
    addTerminalLine("", 0)
    await new Promise((resolve) => setTimeout(resolve, 500))

    addTerminalLine("MATRIX SECURITY SYSTEM v2.1", 500)
    addTerminalLine("Initializing...", 1000)
    addTerminalLine("████████████████████ 100%", 2000)
    addTerminalLine("", 2500)
    addTerminalLine("WARNING: UNAUTHORIZED ACCESS DETECTED", 3000)
    addTerminalLine("INITIATING SECURITY PROTOCOLS...", 3500)
    addTerminalLine("", 4000)
    addTerminalLine("You have 3 attempts to prove you belong here.", 4500)
    addTerminalLine("Fail, and you'll be disconnected permanently.", 5000)
    addTerminalLine("", 5500)
    addTerminalLine("Press ENTER to begin the first challenge...", 6000)

    setTimeout(() => {
      setGameStage(1)
      setCurrentChallenge(challenges.password)
    }, 6500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentInput.trim() || isTyping) return

    const userInput = currentInput.toLowerCase().trim()
    addTerminalLine(`> ${currentInput}`, 0, true)
    setCurrentInput("")

    // Check answer based on current stage
    let isCorrect = false
    switch (gameStage) {
      case 1:
        isCorrect = userInput === challenges.password.answer
        break
      case 2:
        isCorrect = userInput === challenges.decrypt.answer
        break
      case 3:
        isCorrect = userInput === challenges.hack.answer
        break
    }

    if (isCorrect) {
      handleCorrectAnswer()
    } else {
      handleWrongAnswer()
    }
  }

  const handleCorrectAnswer = () => {
    addTerminalLine("ACCESS GRANTED", 500)
    addTerminalLine("████████████████████ AUTHENTICATED", 1000)
    setProgress((prev) => prev + 33.33)

    if (gameStage < 3) {
      setTimeout(() => {
        addTerminalLine("", 1500)
        addTerminalLine("Proceeding to next security layer...", 2000)

        setTimeout(() => {
          setGameStage((prev) => prev + 1)
          switch (gameStage + 1) {
            case 2:
              setCurrentChallenge(challenges.decrypt)
              break
            case 3:
              setCurrentChallenge(challenges.hack)
              break
          }
        }, 2500)
      }, 1000)
    } else {
      // Final success
      setTimeout(() => {
        addTerminalLine("", 1500)
        addTerminalLine("MAINFRAME ACCESS GRANTED", 2000)
        addTerminalLine("WELCOME TO THE REAL WORLD", 2500)
        addTerminalLine("", 3000)
        addTerminalLine("Accessing resume database...", 3500)
        setGameWon(true)
        setGameStage(4)
        onWin()
      }, 1000)
    }
  }

  const handleWrongAnswer = () => {
    setAttempts((prev) => prev - 1)
    addTerminalLine("ACCESS DENIED", 500)

    if (attempts - 1 <= 0) {
      addTerminalLine("SECURITY BREACH - CONNECTION TERMINATED", 1000)
      addTerminalLine("", 1500)
      addTerminalLine("Game Over. Try again?", 2000)
      setTimeout(() => {
        setGameStage(0)
        setAttempts(3)
        setProgress(0)
      }, 3000)
    } else {
      addTerminalLine(`${attempts - 1} attempts remaining`, 1000)
      if (currentChallenge?.hint) {
        addTerminalLine(`HINT: ${currentChallenge.hint}`, 1500)
      }
    }
  }

  const getCurrentChallenge = () => {
    switch (gameStage) {
      case 1:
        return challenges.password
      case 2:
        return challenges.decrypt
      case 3:
        return challenges.hack
      default:
        return null
    }
  }

  const challenge = getCurrentChallenge()

  return (
    <div className="matrix-game-container">
      <div className="matrix-rain">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="matrix-column"
            style={{
              left: `${i * 3.33}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            {Array.from({ length: 15 }, (_, j) => (
              <span key={j} className="matrix-char">
                {Math.random() > 0.5
                  ? Math.floor(Math.random() * 10)
                  : String.fromCharCode(65 + Math.floor(Math.random() * 26))}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="game-content">
        <button className="back-button" onClick={onBack}>
          ← Back to Pills
        </button>

        <div className="hacker-terminal">
          <div className="terminal-header">
            <div className="terminal-title">MATRIX SECURITY TERMINAL</div>
            <div className="terminal-status">
              <span className="status-indicator"></span>
              CONNECTED
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            <span className="progress-text">Security Clearance: {Math.round(progress)}%</span>
          </div>

          <div className="terminal-body" ref={terminalRef}>
            {terminalLines.map((line, index) => (
              <div key={index} className={`terminal-line ${line.isUser ? "user-input" : "system-output"}`}>
                {!line.isUser && <span className="prompt">SYSTEM:</span>}
                <span className="line-text">{line.text}</span>
                {index === terminalLines.length - 1 && isTyping && <span className="cursor">█</span>}
              </div>
            ))}
          </div>

          {gameStage > 0 && gameStage < 4 && challenge && (
            <div className="challenge-section">
              <div className="challenge-header">
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>

              {challenge.clues && (
                <div className="clues-section">
                  <strong>CLUES:</strong>
                  <ul>
                    {challenge.clues.map((clue, index) => (
                      <li key={index}>{clue}</li>
                    ))}
                  </ul>
                </div>
              )}

              {challenge.code && (
                <div className="code-section">
                  <strong>ENCRYPTED DATA:</strong>
                  <div className="code-block">{challenge.code}</div>
                </div>
              )}

              {challenge.pattern && (
                <div className="pattern-section">
                  <strong>COMPLETE THE SEQUENCE:</strong>
                  <div className="pattern-display">{challenge.pattern}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="input-section">
                <div className="input-group">
                  <span className="input-prompt">root@matrix:~$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className="terminal-input"
                    placeholder="Enter your answer..."
                    disabled={isTyping || gameWon}
                    autoFocus
                  />
                </div>
                <div className="attempts-counter">
                  Attempts remaining: <span className="attempts-number">{attempts}</span>
                </div>
              </form>
            </div>
          )}

          {gameWon && (
            <div className="victory-section">
              <div className="victory-animation">
                <div className="matrix-code-rain">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="victory-column">
                      {Array.from({ length: 8 }, (_, j) => (
                        <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                      ))}
                    </div>
                  ))}
                </div>
                <h2>🎉 SYSTEM COMPROMISED 🎉</h2>
                <p>You have successfully infiltrated the Matrix</p>
                <p>Accessing classified resume data...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MatrixGame
