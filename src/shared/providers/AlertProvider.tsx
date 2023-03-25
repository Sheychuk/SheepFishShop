import React, { createContext, PropsWithChildren, useCallback, useContext } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { AlertColor } from '@mui/material/Alert/Alert'

type AlertProps = {
  type: AlertColor
  message: string
}
type AlertOpenFunc = (props: Partial<AlertProps>) => void

const AlertContext = createContext<AlertOpenFunc | null>(null)

function useAlert() {
  const context = useContext(AlertContext)

  if (context === null) {
    throw new Error('component not wrap by AlertProvider')
  }

  return context
}

const AlertProvider = (props: PropsWithChildren) => {
  const [open, setOpen] = React.useState(false)
  const [alert, setAlert] = React.useState<Partial<AlertProps>>({})

  const openAlert = useCallback<AlertOpenFunc>((props) => {
    setOpen(true)
    setAlert(props)
  }, [])

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <AlertContext.Provider value={openAlert}>
      {props.children}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  )
}

export { AlertProvider, useAlert }
