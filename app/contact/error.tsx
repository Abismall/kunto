'use client' 
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">500 - Server-side error occurred</h1>
      <p className="text-lg text-gray-600 mb-8">
        Something went wrong on our end. Please try again later.
      </p>
     <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
    </div>
  )
}