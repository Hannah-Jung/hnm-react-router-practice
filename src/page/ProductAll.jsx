import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const getProducts = async() => {
    let url = `http://localhost:5000/products/`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProductList(data)
  }
  useEffect(() => {
      getProducts()
  },[])
return (
  <div>
    <Container>
      <Row>
        {productList.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard item={item}/>
          </Col>
        ))}        
      </Row>
    </Container>
  </div>
  )
}

export default ProductAll