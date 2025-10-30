import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Badge, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState('')

  const getProductDetail = async () => { 
    let url = `https://my-json-server.typicode.com/Hannah-Jung/hnm-react-router-practice/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(() => { 
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>      
          <div className='new-choice-badge'>
            <div>
              {product?.new && <Badge bg="danger">NEW</Badge>}
              {product?.choice && <Badge bg="secondary">CONSCIOUS CHOICE</Badge>}
            </div>            
          </div>
          
          <div className='product-title-price'>
            <div>{product?.title}</div>
            <div>${product?.price}</div>
          </div>

          <div>SELECT SIZE</div>
          <div className="size-grid">            
            {product?.size?.map(size => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}>{size}
              </button>
            ))}
          </div>

          <div>
            <Button className='cart-button' variant="dark">ADD TO CART</Button>
            <Button className='buy-button' variant="dark">BUY NOW</Button>
          </div>       
        </Col>
      </Row>
    </Container>    
  )
}

export default ProductDetail