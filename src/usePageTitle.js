import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Jsmarthub` : 'Jsmarthub'
  }, [title])
}
export default usePageTitle