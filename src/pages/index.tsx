import { Routes, Route } from 'react-router'
import { lazy } from 'react'

const HomePage = lazy(() => import('pages/home'))
const ProductsListPage = lazy(() => import('pages/product-list'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsListPage />} />
      {/* <Route path='/:taskId' element={<ProductDetailsPage />} />*/}
    </Routes>
  )
}
