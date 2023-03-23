import * as React from 'react'
import { PropsWithChildren } from 'react'
import AppBar from '@mui/material/AppBar'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { NavLink } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

export default function Layout(props: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            SheepFishShop
          </Typography>
        </Toolbar>
      </AppBar>
      <nav style={{ padding: 20 }}>
        <Stack direction='row' spacing={2}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
        </Stack>
      </nav>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth='xl'>
          {props.children}
        </Container>
        {/* End hero unit */}
      </main>
    </ThemeProvider>
  )
}
