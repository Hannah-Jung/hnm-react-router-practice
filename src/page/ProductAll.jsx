import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'

const ProductAll = () => {
  const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams()
  const getProducts = async() => {
    let searchQuery = query.get('q') || ""
    console.log("query?", searchQuery)
    let url = `https://my-json-server.typicode.com/Hannah-Jung/hnm-react-router-practice/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)
    let filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProductList(filteredData);
  }

  useEffect(() => {
      getProducts()
  },[query])

  return (
    <div>
      <Container mb-3>
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
