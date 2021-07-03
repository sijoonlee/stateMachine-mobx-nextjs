import { Provider, observer, useStaticRendering } from 'mobx-react'
import { useStore } from '../store'

useStaticRendering(typeof window === 'undefined');

function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default observer(App)