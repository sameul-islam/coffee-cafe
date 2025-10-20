import React from 'react'
import Hero from '../components/Hero'
import Product from '../components/Product'
import Banner from '../components/Banner'
import CoffeeParallaxSection from '../components/CoffeeParalaxSection'
import PremiumProducts from '../components/PremiumProducts'
import BrandStory from '../components/BrandStory'
import Testimonials from '../components/Testimonials'
import FeaturedProducts from '../components/FeaturedProducts'
import InstagramGallery from '../components/InstagramGallery'
import InstagramProducts from '../components/InstagramProduct'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Product/>
      <Banner/>
      <CoffeeParallaxSection/>
      <PremiumProducts/>
      <BrandStory/>
      <InstagramProducts/>
      <FeaturedProducts/>
      <InstagramGallery/>
      <Testimonials/>
    </div>
  )
}

export default Home
