import { FlexContent, Hero,Sales, Stories ,Footer,
   Navbar, Cart} from "./components"
import {heroapi,popularsales,toprateslaes,
highlight,sneaker,story, footerAPI} from './data/data'

const App = () => {
  return (
    <>
    
    <Navbar/>
    <Cart />
    <main className="flex flex-col gap-16 relative">
     
      <Hero heroapi={heroapi}/>
      <Sales endpoints={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoints={toprateslaes} />
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
      <Footer footerAPI={footerAPI}/>
     
    </main>
    </>
  )
}
export default App