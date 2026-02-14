import { useEffect } from 'react'
import { useKV } from '@github/spark/hooks'

export function useExtraContrast() {
  const [extraContrast, setExtraContrast] = useKV<boolean>('extra-contrast-mode', false)

  useEffect(() => {
    if (extraContrast) {
      document.documentElement.classList.add('extra-contrast')
    } else {
      document.documentElement.classList.remove('extra-contrast')
    }
  }, [extraContrast])

  return [extraContrast || false, setExtraContrast] as const
}
