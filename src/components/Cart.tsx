import { DeleteIcon } from '../assets/icons/Icons'
import { useBucketContext } from '../context/bucketContext'

const Cart = () => {
  const { isOpenCart, amount, cartItem, dispatch } = useBucketContext()
  return (
    <>
      {isOpenCart && (
        <div
          id='cart'
          className='cart absolute z-10 mr-[7px] origin-top animate-display-cart'
        >
          <div>
            <h3 className='p-5 font-bold text-veryDarkBlue'>Cart</h3>
          </div>
          <hr />
          {amount > 0 ? (
            <div className='flex min-h-[150px] w-[330px] items-center justify-center md:mx-0'>
              <div className='flex w-full items-center justify-between px-2'>
                <div>
                  <img
                    src={cartItem.images[0].url}
                    alt={cartItem.images[0].title}
                    width={60}
                    className='rounded-md'
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <h4 className='font-bold capitalize text-darkGrayishBlue'>
                    {cartItem.name}
                  </h4>
                  <table>
                    <thead className='bg-orange'>
                      <tr className='text-lightGrayish'>
                        <th colSpan={1}>Price</th>
                        <th colSpan={1}>Amount</th>
                        <th colSpan={1}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='text-center font-bold'>
                        <td>{cartItem.price}$</td>
                        <td>x {amount}</td>
                        <td>{cartItem.price * amount}$</td>
                      </tr>
                    </tbody>
                  </table>
                  <button className='btn-primary w-full p-2'>Checkout</button>
                </div>
                <button
                  aria-label='Delete'
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: cartItem.id })
                  }
                >
                  <DeleteIcon color='hsl(26, 100%, 55%)' />
                </button>
              </div>
            </div>
          ) : (
            <div className='flex h-[150px] w-[360px] items-center justify-center'>
              <h5 className='font-bold text-darkGrayishBlue'>
                Your cart is empty!
              </h5>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Cart
