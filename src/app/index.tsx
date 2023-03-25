import { Routing } from '../pages'
import { withProviders } from './providers'
import { AlertProvider } from 'shared/providers/AlertProvider'

const App = () => {
  return (
    <div className='app'>
      <AlertProvider>
        <Routing />
      </AlertProvider>
    </div>
  )
}

export default withProviders(App)
