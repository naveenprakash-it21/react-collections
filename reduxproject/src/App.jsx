import './App.css'
import Grandparent from './components/Grandparent'

function App() {
  const user = {name: "Tiya", age: 10};
  return (
    <>
      <Grandparent user={user} />
    </>
  )
}

export default App
