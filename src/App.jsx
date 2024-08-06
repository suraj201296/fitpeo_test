
import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
