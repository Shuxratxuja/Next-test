import { useTranslations } from "next-intl"

const AboutPage = () => {
  const t = useTranslations('Sentences')
  return (
    <div className="dark:text-white max-w-7xl mx-auto">
      {t('about')}
    </div>
  )
}

export default AboutPage