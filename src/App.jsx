import { useState } from "react";

function App() {
    const [shoppingCart, setShoppingCart] = useState({ itmes: [] });

    return (
        <div>
            <Header
                // { items: [] }
                cart={shoppingCart}
            />
            <Shop onAddItemToCart={() => setShoppingCart} />
        </div>
    );
}

export default App;