import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations('Sentences')
  return (
    <div className=" dark:text-white max-w-7xl mx-auto ">
      {t('hello')}
    </div>
  );
}

