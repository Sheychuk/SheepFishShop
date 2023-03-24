import { Routes, Route } from 'react-router'
import { lazy } from 'react'

const HomePage = lazy(() => import('./home'))
const ProductsListPage = lazy(() => import('./product-list'))

export const Routing = () => {
  return (
    <Routes>
      <Route path='/sheepfish/' element={<HomePage />} />
      <Route path='/sheepfish/products' element={<ProductsListPage />} />
      {/* <Route path='/:taskId' element={<ProductDetailsPage />} />*/}
    </Routes>
  )
}
