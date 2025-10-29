import React from 'react'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className='dual-banner'>
          <img src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk43/Tops-WCE-wk43.jpg?imwidth=1536"
          alt="First slide"
         fluid/>
        <img src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk43/Cardigans-Jumpers-WCE-wk43.jpg?imwidth=1536"
          alt="Second slide"
        />
        </div>        
        <Carousel.Caption>
          <h3>Autumn Collection</h3>
          <p>New styles for the new season</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className='dual-banner'>
          <img src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk43/Jackets-Coats-WCE-wk43.jpg?imwidth=1536"
          alt="First slide"
        />
        <img src="https://image.hm.com/content/dam/global_campaigns/season_02/women/startpage-category-entries/wk43/Trousers-WCE-wk43.jpg?imwidth=1536"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Winter Essentials</h3>
          <p>Stay cozy, stay stylish</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}

export default Banner;