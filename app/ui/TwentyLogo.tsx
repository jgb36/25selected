import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import localFont from 'next/font/local';

const Academy = localFont({
  src: '../../public/fonts/AcademyEngravedLetPlain.ttf'
})
                

export default function TwentyLogo() {
  return (
    <div
      className={`${Academy.className} flex flex-row items-center leading-none text-black`}
    >
      <Image src = "/25logos/noBG.png"
                  width={68}
                  height={68}
                  alt="blank avatar"
                  />
      <p className="text-[63px]">Select</p>
    </div>
  );
}
