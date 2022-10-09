import React from 'react'

function Home(){
    return(
        <>
        <div className="add-to-cart">
            <img src='https://static6.depositphotos.com/1005920/580/i/600/depositphotos_5808055-stock-photo-shopping-cart-button.jpg'/>
        </div>
        <h2>Home Component</h2>
        <div className="card-wrapper">

            <div className="img-wrapper item">
                <img src='https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='text-wrapper item'>
                <span>
                    I-Phone
                    Price:$500.00
                </span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Card</button>
            </div>
        </div>
        </>
    )
}
export default Home;