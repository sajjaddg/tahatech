
const Table = ({title}) => {
    return (
        <div className='flex flex-col w-full bg-white  rounded-lg shadow-md overflow-hidden'>
            <div className='flex items-center justify-center bg-[#F7F7F7] py-2'>
                <span className='text-lg font-semibold text-[#16222A]'>{title}</span>
            </div>
            <div className='flex flex-col space-y-6 p-6'>

                <div className='flex justify-between'>
                    <span className='text-lg font-semibold text-[#16222A]'>Blue</span>
                    <div className='flex justify-center items-center bg-[#2DB649] p-1 rounded-md'>
                        <span className='text-lg font-semibold text-white' >+10</span>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Table