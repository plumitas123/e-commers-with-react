import { Products } from "./components/Products"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-4">
        <Header />
        <Products />
      </div>
    </>
  )
}

export default App
