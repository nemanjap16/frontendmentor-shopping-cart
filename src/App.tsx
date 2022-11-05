import Product from './components/Product'
import Header from './components/Header'
import { BucketProvider } from './context/bucketContext'
import NavSlider from './components/NavSlider'
import { Modal } from './components/Modal'

function App() {
  const navLinks = [
    { id: 1, name: 'collections' },
    { id: 2, name: 'men' },
    { id: 3, name: 'women' },
    { id: 4, name: 'about' },
    { id: 5, name: 'contact' }
  ]

  return (
    <BucketProvider>
      <div className='container bg-white pb-10'>
        <Header links={navLinks} />
        <main>
          <Product />
        </main>
      </div>
      <NavSlider links={navLinks} />
      <Modal />
    </BucketProvider>
  )
}

export default App
