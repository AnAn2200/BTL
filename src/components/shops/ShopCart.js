import React,{useState} from 'react'

 

export const ShopCart = () => {

  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
  
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
    const shopItems = [
        {
            id: 1,
            cover: "./shops/shops-1.png",
            name: 'Mapple Phone',
            price: '5.000.000',
            discount: "25",
        },
        {
            id: 2,
            cover: "./shops/shops-2.png",
            name: 'Vivo android one',
            price: "12.000.00",
            discount: "12",
        },
        {
            id: 3,
            cover: "./shops/shops-3.png",
            name: 'Sony light',
            price: "15.000.000",
            discount: '16',
        },
        {
            id: 4,
            cover: './shops/shops-4.png',
            name: 'Iphone',
            price: "16.000.000",
            discount: "15",
        },
        {
            id: 5,
            cover: './shops/shops-5.png',
            name: "Earphone",
            price: "15.200.000",
            discount: "16",
        },
        {
            id: 6,
            cover: './shops/shops-6.png',
            name: 'Redmi phone',
            price: '26.000.000',
            discount: '50',
        },
        {
            id: 7,
            cover:'./shops/shops-7.png',
            name: 'iphone android',
            price: '25.000.000',
            discount:"18",
        },
        {
            id: 8,
            cover: "./shops/shops-8.png",
            name: "Ipot",
            price: '55.330.000',
            discount: "25",
        },
        {
            id: 8,
            cover: "./shops/shops-9.png",
            name: "Ipot",
            price: '55.330.000',
            discount: "25",
        },
        {
            id: 8,
            cover: "./shops/shops-10.png",
            name: "Ipot",
            price: '55.330.000',
            discount: "25",
        }

    ]

    const [count, setCount] = useState(false)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
          {shopItems.map((shopItems, index) => {
            return (
              <div className='box'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>{shopItems.discount}% Off</span>
                    <img src={shopItems.cover} alt='' />
                    <div className='product-like'>
                      <label>{count}</label> <br />
                      <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>
                  </div>
                  <div className='product-details'>
                    <h3>{shopItems.name}</h3>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                      <h4>d{shopItems.price} </h4>
                      {/* step : 3  
                         if hami le button ma click garryo bahne 
                        */}
                      <button onClick={() => addToCart(shopItems)}>
                        <i className='fa fa-plus'></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      )
    }

