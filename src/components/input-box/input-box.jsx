
const InputBox = ({placeholder='Answer ...' , buttonText='Submit'}) => {
    return (
        <div className='flex items-center space-x-3 justify-between'>
            <input className='outline-none rounded-md p-2 text-lg' placeholder={placeholder} />
            <button className='bg-[#F16751] p-2 rounded-md flex-grow'>
                <span className='text-white font-semibold text-lg'>{buttonText}</span>
            </button>
        </div>
    )
}

export default InputBox