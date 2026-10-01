import { useState } from 'react'

export default function useFinePointer() {
  const [fine] = useState(() => window.matchMedia('(pointer: fine)').matches)
  return fine
}
