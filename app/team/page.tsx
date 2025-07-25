import "../globals.css";
import "./teams.css";
import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";
import Header from '../components/misc/layout/header'
import Link from "next/link";
export const metadata = {
  title: "Meet The Team",
  description: "My description",
}

export default async function Page() {
    return (
      <div className = "header">
        <Header />
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`} id="greeting">
          Meet The Team
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="teamPeoples">
              <div className="teamNP" id="NP">
                <h2>Kaan Kurt</h2>
            <Image src = "/shadow.png"
            width={100}
            height={100}
            alt="blank avatar"
            />
            </div>  
            <div className="bio" id="bio">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>   
            </div>
          </div>
          <div className="teamPeoples">
              <div className="teamNP" id="NP">
                <h2>Kaan Kurt</h2>
            <Image src = "/shadow.png"
            width={100}
            height={100}
            alt="blank avatar"
            />
            </div>  
            <div className="bio" id="bio">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>   
            </div>
          </div>
          <div className="teamPeoples">
              <div className="teamNP" id="NP">
                <h2>Kaan Kurt</h2>
            <Image src = "/shadow.png"
            width={100}
            height={100}
            alt="blank avatar"
            />
            </div>  
            <div className="bio" id="bio">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>   
            </div>
          </div>
          <div className="teamPeoples">
              <div className="teamNP" id="NP">
                <h2>Kaan Kurt</h2>
            <Image src = "/shadow.png"
            width={100}
            height={100}
            alt="blank avatar"
            />
            </div>  
            <div className="bio" id="bio">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.</p>   
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        </div>
      </main>
      </div>
    );
  }