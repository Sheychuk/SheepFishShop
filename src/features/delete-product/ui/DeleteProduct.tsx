import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { pink } from '@mui/material/colors'
import { productListApi } from 'entities/product'
import {useAlert} from 'shared/providers/AlertProvider';

type DeleteProductProps = {
  id: number
}

const DeleteProduct: FC<DeleteProductProps> = ({ id }) => {
  const [deleteProduct, { isLoading }] = productListApi.useDeleteProductMutation()
  const alert = useAlert();

  const handleButtonClick = () => {
    deleteProduct(id);
    alert({type: 'success', message: 'Product deleted successfully'})
  }

  return (
    <IconButton aria-label='delete' disabled={isLoading} onClick={handleButtonClick}>
      <DeleteIcon sx={{ color: pink[500] }} />
    </IconButton>
  )
}

export { DeleteProduct }
