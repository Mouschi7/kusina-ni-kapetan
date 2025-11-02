import Navbar from "../components/Navbar.jsx";

const Cart = () => {
      return (
            <>
                  <Navbar />
                  <main>
                        <div
                              style={{
                                    padding: "100px 20px",
                                    textAlign: "center",
                              }}
                        >
                              <h1>Shopping Cart</h1>
                              <p>Your cart is empty.</p>
                        </div>
                  </main>
            </>
      );
};

export default Cart;
