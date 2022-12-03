import { useContext } from 'react';
import './App.css';
import InputBox from './components/input-box/input-box';
import Modal from './components/modal/modal';
import Table from './components/table/table';
import { GameContext } from './contexts/game/game';

function App() {
  const {win} = useContext(GameContext)
  return (
    <>
      <div className='bg-gradient-to-b from-[#16222A] to-[#2a4653] min-h-screen'>
        <div className='flex flex-col space-y-3 px-5 py-8 max-w-md m-auto' style={{filter:win? 'blur(7px)':''}}>
          <div className='flex justify-between '>

          </div>
          <Table title='Guess the Word' />
          <InputBox />

        </div>
        <Modal/>
      </div>
    </>
  );
}

export default App;
