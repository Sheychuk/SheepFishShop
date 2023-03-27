import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, Grid, TextField } from '@mui/material'
import { productListApi } from 'entities/product'
import { useAlert } from '../../../shared/providers/AlertProvider'

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string(),
  price: yup.number().required('Price is required'),
})

type AddProductFormProps = {
  onSubmitSuccess: () => void
}

export const AddProductForm = (props: AddProductFormProps) => {
  const [addProduct, { isLoading }] = productListApi.useAddProductMutation()
  const alert = useAlert()

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addProduct(values).then(() => {
        alert({ type: 'success', message: 'Product added successfully' })
        props.onSubmitSuccess()
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='stretch'
        spacing={2}
      >
        <Grid item>
          <TextField
            fullWidth
            id='title'
            name='title'
            label='Title'
            disabled={isLoading}
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            multiline
            id='description'
            name='description'
            label='Description'
            disabled={isLoading}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            id='price'
            name='price'
            label='Price'
            disabled={isLoading}
            value={formik.values.price}
            onChange={formik.handleChange}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' type='submit'>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
