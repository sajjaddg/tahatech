
const TableItem = ({word,SameCount}) => {
  return (
    <div className='flex justify-between'>
      <span className='text-lg font-semibold text-[#16222A]'>{word}</span>
      <div className='flex justify-center items-center py-1 px-3 rounded-md' style={{backgroundColor:(SameCount>0 ?'#2DB649' :'#E2251F')}}>
        <span className='text-lg font-semibold text-white' >{SameCount}</span>
      </div>
    </div>
  )
}

export default TableItem