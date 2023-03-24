import React from 'react'
import { productListApi } from 'entities/product'
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const Catalog = () => {
  const { data, isLoading, error } = productListApi.useFetchProductsListQuery(9)

  if (isLoading) {
    return <b>Loading...</b>
  }

  if (error) {
    return <b>Ops... products was not loaded!!!</b>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.products.map((item) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {item.id}
              </TableCell>
              <TableCell>
                <Avatar
                  variant='square'
                  alt={item.title}
                  src={item.thumbnail}
                  sx={{ width: 36, height: 36 }}
                />
                {item.title}
              </TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.rating}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>{item.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { Catalog }
