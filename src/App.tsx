import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [password, setPassword] = useState('')
  const [encoded, setEncoded] = useState('')

  const apiconsume = async () => {
    await axios.get(import.meta.env.VITE_SOME_KEY + password).then((res) => {
      setEncoded(res.data.encoded)
    });
  }

  return (
    <main>
      <h1>Pass<span>Encoder</span></h1>
      <section>
        <form action="" className='' onSubmit={(e) => {
          e.preventDefault();
          apiconsume();
        }}>
          <label htmlFor="">
            Write a password
          </label>
          <div>
            <input type="text" onChange={
              (e) => {
                e.preventDefault();
                setPassword(e.target.value)
              }
            } placeholder='Write a password to encode' />
            <button>Encode</button>
          </div>
        </form>
        <div className='result'>
          <h3>Your encoded password is:</h3>
          <code>{encoded}</code>
        </div>
      </section>
    </main>
  )
}

export default App
