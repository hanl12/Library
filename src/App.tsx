import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">
        Welcome to this library app
      </h1>
      <h2 className="text-2l font-bold">
        Now you can go to check these APIs
      </h2>
      <div className='flex-row p-5'>
        <button className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          Google API
        </button><br /><br />
        <button className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          XD API
        </button>
      </div>
    </div>
  )
}

export default App
