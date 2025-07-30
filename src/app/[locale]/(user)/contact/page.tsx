import { useTranslations } from "next-intl"


const ContactPage = () => {
  const t = useTranslations('Sentences')
  return (
    <div className="dark:text-white max-w-7xl mx-auto">
      {t('contact')}
    </div>
  )
}

export default ContactPage