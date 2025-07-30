import { useTranslations } from "next-intl"
import Link from "next/link"
import { LenguageSwitcher} from "../switcher"

export const ProfileHeader = () => {
  const t = useTranslations('Links')
  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <Link href={'/'} className="text-3xl font-bold">
          Logo
        </Link>
        <div className="flex gap-2">
          <LenguageSwitcher />
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader