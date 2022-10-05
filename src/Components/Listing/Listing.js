

import React from 'react'
import data from '../data/data.json'


export const Listing = () => {
  const item = data
  const titleLimit = 50;







  return ( 
   

    <>
    {item.map((i) => (
          
          <div className="item-list">
            {item.map((i) => (
               <div key={i.listing_id}>
                    <div  className="item">
                     
                    <div className="item-image">
                      <a href={i.url}>
                         <img src={i.MainImage?.url_570xN} alt=''/> 
                      </a>
                    </div>
           
                    <div className="item-details">
                    <p className="item-title">
           
                     {
                       i.title?.length > titleLimit
                         ? `${i.title.slice(0, titleLimit + 1)}…`
                         : i.title
                     }
                   </p>
                      <p className="item-price">
           
                      {i.currency_code === 'USD' ?
                        `$${i.price}`
                        : i.currency_code === 'EUR' ?
                        `€${i.price}` 
                        : `${i.price} ${i.currency_code} `
           
                       }
                      </p>
                      <p className={`item.quantity ${
                       i.quantity <= 10 
                       ? 'level-low'
                       : i.quantity > 20
                       ? 'level-high'
                       : i.quantity > 10 && i.quantity < 20
                       ? 'level-medium'
                       : ''
           
                      }`}>{i.quantity} left</p>
                    </div>
               
                  </div>
                  </div>
              
            ))}
 
     </div>
         
           
           
           
         
      
    ) )}
 
    </>
   
  )
}
