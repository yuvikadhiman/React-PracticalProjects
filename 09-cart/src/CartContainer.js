import CartItem from './CartItem';
import { useGlobalContext } from './context';
import cartItems from './data';

const CartContainer = () => {
  const {cart,ClearCart,totalCost}=useGlobalContext()
  const cartArray = Array.from(cart.entries())
  // console.log(cartArray)

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItems) => {
          const [id,item]=cartItems
          // console.log(cartItems)
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span> $ {totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button
          className='btn btn-hipster'
          onClick={ClearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
