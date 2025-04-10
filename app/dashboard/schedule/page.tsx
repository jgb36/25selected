import { lusitana } from '@/app/ui/fonts';

export const metadata = {
    title: "Dashboard | Schedule",
    description: "My description",
  }

export default function Page() {
    return <h1 className={`${lusitana.className} text-2xl`}>Schedule</h1>;
  }