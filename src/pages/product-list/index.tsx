import React from 'react'
import { OrdersCart } from 'widgets/orders-cart'
import { ProductsList } from 'widgets/products-list'
import { Grid } from '@mui/material'
import Layout from '../Layout'

const ListPage = () => {
  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ProductsList />
        </Grid>
        <Grid item xs={5}>
          <OrdersCart />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ListPage
