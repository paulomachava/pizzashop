import '@/index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { SuperSEO } from 'react-super-seo'

export function App() {


  return (
  
      <RouterProvider router={router} />
    
  )
}
