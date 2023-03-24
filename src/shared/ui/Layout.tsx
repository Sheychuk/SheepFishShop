import * as React from 'react'
import { PropsWithChildren } from 'react'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import { NavLink } from 'react-router-dom'

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <nav style={{ padding: 20 }}>
        <Stack direction='row' spacing={2}>
          <NavLink to='/sheepfish/'>Home</NavLink>
          <NavLink to='/sheepfish/products'>Products</NavLink>
        </Stack>
      </nav>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth='xl'>
          {props.children}
        </Container>
        {/* End hero unit */}
      </main>
    </>
  )
}
