import { useNavigate } from 'react-router-dom'
import { AlertCircle, ChevronLeft } from 'lucide-react'

export default function NotFound() {
    const navigate = useNavigate()

    const gotohome = () => {
        navigate('/')
    }
    
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">404 - Page Not Found</h1>
        <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button onClick={gotohome} className="inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-600 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Go back home
          </button>
        </div>
      </div>
    </div>
  )
}