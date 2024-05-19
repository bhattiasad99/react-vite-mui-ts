import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import ThemeRegistry from './theme/theme.provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeRegistry>
        <App />
      </ThemeRegistry>
    </Provider>
  </React.StrictMode>,
)
