import { useContext } from "react"
import { GameContext } from "../../contexts/game/game"

const Modal = () => {
    const {win , key , reset} = useContext(GameContext)
    const resetButton=()=>{
        reset()
    }
    return (
        win?
        <div className='fixed flex flex-col justify-center items-center p-6 w-fit rounded-lg left-0 z-40 right-0 top-0 bottom-0 h-fit m-auto bg-white space-y-3  '>
            <span>congratulations you guessed word</span>
            <span>The correct word is: <span className="font-semibold">{key}</span> </span>
            <button onClick={resetButton} className='bg-[#F16751] p-2 rounded-md flex-grow'>
                <span className='text-white font-semibold text-lg'>reset</span>
            </button>
        </div>
        :
        null
    )
}

export default Modal