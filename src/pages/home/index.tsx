import React from 'react'
import Layout from 'shared/ui/Layout'
import { Catalog } from 'widgets/catalog'
import { AddProductModal } from 'widgets/add-product-modal'

const HomePage = () => {
  return (
    <Layout>
      <AddProductModal />
      <br />
      <Catalog />
    </Layout>
  )
}

export default HomePage
