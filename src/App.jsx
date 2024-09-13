import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="content">
      <div className="title">
        <h1>MyTunes</h1>
      </div>
      <div className="artist">
        <div className="image">
          <img src="assets/king&prince.jpeg" alt="King & Prince" width="300" height="450"/>
        </div>
        <div className="albumContainer">
          <div className="heading">
            <h2>King & Prince's albums</h2>
          </div>
          <div className="album">
            <details>
              <summary>Re:Sense</summary>
              <ol>
                <li>"Bubbles & Troubles"</li>
                <li>"Magic Touch"</li>
                <li>"Lost in Love"</li>
                <li>"Beating Hearts"</li>
                <li>"Body Paint"</li>
                <li>"I Promise"</li>
              </ol>
            </details>
            <details>
              <summary>Made in</summary>
              <ol>
                <li>"ichiban"</li>
                <li>"Last Train"</li>
                <li>"Lovin' You"</li>
                <li>"Battle of Butler!"</li>
                <li>"A Little Happiness"</li>
                <li>"Dream In"</li>
              </ol>
            </details>
            <details>
              <summary>Peace</summary>
              <ol>
                <li>"My Love Song"</li>
                <li>"Nanimono"</li>
                <li>"That's Entertainment"</li>
                <li>"Warewarehakoibitodoushida"</li>
                <li>"Happy Every After"</li>
                <li>"Chase It Down"</li>
              </ol>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
