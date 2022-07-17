import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"

export default function App() {
  const main = data.map(item => {
    return (
      <Main 
        {...item}
      />
    )
  })
  return (
    <div className="inter">
      <Header />
      <div className="p-10">
        {main}
      </div>
    </div>
  )
}
