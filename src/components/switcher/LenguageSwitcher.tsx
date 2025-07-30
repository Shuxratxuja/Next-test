'use client'

import { usePathname, useRouter } from '@/i18n/navigation'
import React from 'react'
import { useLocale } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'

export const LenguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleChangeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang })
  }

  return (
    <div className='w-full max-w-xs space-y-2'>
      <Select
        defaultValue={locale}
        onValueChange={(value) => handleChangeLanguage(value)}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select a language' />
        </SelectTrigger>
        <SelectContent className='data-[state=open]:!zoom-in-0 origin-center duration-400'>
          <SelectGroup>
            <SelectItem value='en'>EN</SelectItem>
            <SelectItem value='uz'>UZ</SelectItem>
            <SelectItem value='ru'>RU</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default LenguageSwitcher
