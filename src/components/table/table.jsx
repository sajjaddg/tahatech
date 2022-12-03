import { useContext } from "react"
import { GameContext } from "../../contexts/game/game"
import TableItem from "../table-item/table-item"

const Table = ({ title }) => {
    const { items } = useContext(GameContext)
    return (
        <div className='flex flex-col w-full bg-white  rounded-lg shadow-md overflow-hidden'>
            <div className='flex items-center justify-center bg-[#F7F7F7] py-2'>
                <span className='text-lg font-semibold text-[#16222A]'>{title}</span>
            </div>
            <div className='flex flex-col space-y-1 p-4'>
                {items.length>0 ?
                    items.map((item, i) => {
                        return (
                            <TableItem key={i} item={item} />
                        )
                    })
                    :
                    <div className="flex justify-center items-center">
                        <span>
                            {'Fill in the blanks, you might win :)'}
                        </span>
                    </div>
                }

            </div>
        </div>
    )
}

export default Table