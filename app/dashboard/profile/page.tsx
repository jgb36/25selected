import { lusitana } from '@/app/ui/fonts';

export const metadata = {
  title: "Dashboard | Profile",
  description: "My description",
}

export default function Page() {
    return <h1 className={`${lusitana.className} text-2xl`}>Profile</h1>;
  }