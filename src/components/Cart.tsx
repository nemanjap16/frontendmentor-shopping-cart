const Cart = () => {
  return (
    <div id='cart' className='cart hidden origin-top animate-display-cart'>
      <div>
        <h3 className='p-5 font-bold text-veryDarkBlue'>Cart</h3>
      </div>
      <hr />
      <div className='flex h-[150px] w-[300px] items-center justify-center'>
        <h5 className='font-bold text-darkGrayishBlue'>Your cart is empty!</h5>
      </div>
    </div>
  )
}

export default Cart
