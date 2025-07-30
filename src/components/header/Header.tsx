import { useTranslations } from "next-intl"
import Link from "next/link"
import { LenguageSwitcher, ModeToggle } from "../switcher"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const Header = () => {
  const t = useTranslations('Links')
  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <Link href={'/'} className="text-3xl font-bold">
          Logo
        </Link>
        <ul className="flex items-center gap-4">
          <Link href='/'>{t('home')}</Link>
          <Link href='/about'>{t('about')}</Link>
          <Link href='/contact'>{t('contact')}</Link>
        </ul>
        <div className="flex gap-2">
          <LenguageSwitcher />
          <ModeToggle />
          <Link href={'/profile'}>
            <Avatar>
              <AvatarImage src="https://github.com/Shuxratxuja.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header