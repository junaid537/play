const addToCart = () => {
    if (!cart[productData.id]) {
      setCart((prevCart) => {
        let newCart = {
          ...prevCart,

          [productData.id]: {
            image: productData.image,
            name: productData.name,
            price: productData.price,
            description: productData.description,
            totalPrice: productData.price,
            quantity: 1,
          },
        };
        return newCart;
      });
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [productData.id]: {
          ...prevCart[productData.id],
          totalPrice:
            (prevCart[productData.id].quantity + 1) *
            prevCart[productData.id].price,
          quantity: prevCart[productData.id].quantity + 1,
        },
      }));
    }
    setItemsInStock((prevItemsInStock) => prevItemsInStock - 1);
  };