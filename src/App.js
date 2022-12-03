import './App.css';
import Table from './components/table/table';

function App() {
  return (
    <>
      <div className='bg-gradient-to-b from-[#16222A] to-[#2a4653] min-h-screen'>
        <div className='flex flex-col space-y-3 px-5 py-8'>
          <div className='flex justify-between '>

          </div>
          <Table title='Guess the Word' />
          <div className='flex items-center space-x-3 justify-between'>
            <input className='outline-none rounded-md p-2 text-lg' placeholder='Answer ...' />
            <button className='bg-[#F16751] p-2 rounded-md flex-grow'>
              <span className='text-white font-semibold text-lg'>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
