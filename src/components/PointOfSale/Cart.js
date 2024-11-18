// src/components/Cart.js
export default function Cart({ cartItems, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white mt-4">
      <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <span>
                  {item.name} (x{item.quantity})
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-bold">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
