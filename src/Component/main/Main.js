import React from 'react'
import Carousel from '../Carousel'
import CategoryItems from '../CategoryItems'
import OfferBanner from '../OfferBanner'
import TrendingTshirt from '../TrendingTshirt'
import FueturedProduct from '../FueturedProduct'
import Banner2 from '../Banner2'
import NewProducts from '../NewProducts'
import BestSelling from '../BestSelling'
import OfferCategory from '../OfferCategory'
import Banner3 from '../Banner3'
import DiscountOffer from '../DiscountOffer'
import Subscription from '../Subscription'


export default function Main() {
  return <>
        <Carousel></Carousel>
        <CategoryItems></CategoryItems>
        <OfferBanner></OfferBanner>
        <TrendingTshirt></TrendingTshirt>
        <FueturedProduct></FueturedProduct>
        <Banner2></Banner2>
        <NewProducts></NewProducts>
        <BestSelling></BestSelling>
        <OfferCategory></OfferCategory>
        <Banner3></Banner3>
        <DiscountOffer></DiscountOffer>
        <Subscription></Subscription>
  </>
}
