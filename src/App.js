import './App.css';
import InputBox from './components/input-box/input-box';
import Table from './components/table/table';

function App() {
  return (
    <>
      <div className='bg-gradient-to-b from-[#16222A] to-[#2a4653] min-h-screen'>
        <div className='flex flex-col space-y-3 px-5 py-8'>
          <div className='flex justify-between '>

          </div>
          <Table title='Guess the Word' />
          <InputBox />
        </div>
      </div>
    </>
  );
}

export default App;
