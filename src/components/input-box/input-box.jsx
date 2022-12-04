import { useContext, useState } from "react"
import { GameContext } from "../../contexts/game/game"
import { getSameCount } from "../../utils/getSameCount"

const InputBox = ({ placeholder = 'Answer ...', buttonText = 'Submit' }) => {
    const [word, setWord] = useState('')
    const { setItems, key , setWin } = useContext(GameContext)
    const submitButton = () => {
        if (key.toLowerCase() === word.toLowerCase()) {
            let item = {
                word,
                same: word.length,
            }
            setWin(true)
            setItems((old) =>[...old,item])
            setWord('')
        }
        else {
            let item = {
                word,
                same: getSameCount(key, word),
                
            }
            setItems((old) =>[...old,item])
            setWord('')
        }
    }
    return (
        <div className='flex items-center space-x-3 justify-between'>
            <input value={word} onChange={(e) => { setWord(e.target.value) }} className='outline-none rounded-md p-2 text-lg' placeholder={placeholder} />
            <button onClick={submitButton} className='bg-[#F16751] p-2 rounded-md flex-grow'>
                <span className='text-white font-semibold text-lg'>{buttonText}</span>
            </button>
        </div>
    )
}

export default InputBox