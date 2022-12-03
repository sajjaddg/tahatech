import TableItem from "../table-item/table-item"

const Table = ({title}) => {
    return (
        <div className='flex flex-col w-full bg-white  rounded-lg shadow-md overflow-hidden'>
            <div className='flex items-center justify-center bg-[#F7F7F7] py-2'>
                <span className='text-lg font-semibold text-[#16222A]'>{title}</span>
            </div>
            <div className='flex flex-col space-y-6 p-6'>
               <TableItem word={'sajjad'} SameCount={5}/>


            </div>
        </div>
    )
}

export default Table