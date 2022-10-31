import Product from './components/Product'
import Header from './components/Header'
import { BucketProvider } from './context/bucketContext'

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
      <div className='container bg-white'>
        <Header links={navLinks} />
        <main>
          <Product />
        </main>
      </div>
    </BucketProvider>
  )
}

export default App
