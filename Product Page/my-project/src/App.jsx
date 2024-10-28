import './App.css'
import ShoeDetails from './components/shoeDetails'

function App() {
  return (
    <div className=" h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className=" bg-white h-1/2 w-1/4 flex justify-center items-center">
          <img src="src/assets/2473264-47d689359f412b.webp" alt="" className='z-40 '/>
          <div>
          </div>
        </div>
        <ShoeDetails 
            productPage={'Product Name'}
            color={'COLOR'}
            productTitle={'PRODUCT DESCRIPTION'}
            productInfo={'More info:'} 
            productSize={'SIZE'} 
            productPrice={45.50}
        />
    </div>
  )
}
export default App