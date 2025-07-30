import { useTranslations } from 'next-intl'
import React from 'react'

const ProfilePage = () => {
    const t = useTranslations('Sentences')
  return (
    <div className= 'dark:text-white max-w-7xl mx-auto'>
        {t('profile')}
    </div>
  )
}

export default ProfilePage