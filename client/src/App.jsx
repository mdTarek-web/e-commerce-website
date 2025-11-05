import Banner from "./components/Banner"
import Container from "./components/Container"
import NewArrival from "./components/NewArrival"
import Sale from "./components/Sale"

function App() {

  return (
   <main>
     <Banner/>
     <Container className="py-5 md:py-10">
        <Sale/>
        <NewArrival/>
     </Container>
   </main>
  )
}

export default App
