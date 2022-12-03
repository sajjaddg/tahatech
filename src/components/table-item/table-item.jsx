
const TableItem = ({item}) => {
  const {word , same } = item
  return (
    <div className='flex justify-between transition duration-300 ease-in-out hover:bg-gray-200 p-2 rounded-lg'>
      <span className='text-lg font-semibold text-[#16222A]'>{word}</span>
      <div className='flex justify-center items-center py-1 px-3 rounded-md' style={{backgroundColor:(same>0 ?'#2DB649' :'#E2251F')}}>
        <span className='text-lg font-semibold text-white' >{same}</span>
      </div>
    </div>
  )
}

export default TableItem