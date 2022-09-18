import React from 'react'

import { Carousel, Container } from 'react-bootstrap/'

function Home() {
  return (
    <Container fluid>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/lutz-wernitz-pcW5bR7gSJ4-unsplash.jpg"
            alt="Light malt grains"
          />
          <Carousel.Caption>
            <h3>Malt</h3>
            <p>Fementables.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="markus-spiske-qn5iDwvOZgo-unsplash.jpg"
            alt="Hop flowers"
          />

          <Carousel.Caption>
            <h3>Hops</h3>
            <p>Flavour/Bittering.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/adam-wilson-I2f5BbeXPVY-unsplash.jpg"
            alt="Bottled homebrew beers"
          />

          <Carousel.Caption>
            <h3>Beer</h3>
            <p>Brew!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Home
