import { ProfileHeader } from "@/components/header";

export default function UserLayout({
    children
}: {children: React.ReactNode}) {
    return (
        <>
        <ProfileHeader/>
            {children}
        </>
    )
}