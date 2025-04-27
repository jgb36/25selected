import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import localFont from 'next/font/local';
import Hero from  './components/Hero'
import Header from './components/misc/layout/header'
export const metadata = {
  title: "XVSelect Home Page",
  description: "My description",
}

const Academy = localFont({
  src: '../public/fonts/AcademyEngravedLetPlain.ttf'
})

export default function Home() {
  return (
    <>
    <Header />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <Hero /> */}
        
        <div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Kickstart your future with <strong>XV Select</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Players can get connected to coaches from around the country.
              </p>
              <p className="text-black-500 mt-4 mb-6">
                Coaches can get recruit the best of the best for their teams.
              </p>
              <a href="/sign_up">
                {/* <ButtonPrimary>Join Our Program</ButtonPrimary> */}
              </a>

            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <Image
                  src="/25logos/IG.png"
                  alt="AI learning"
                  quality={100}
                  width={612}
                  height={183}
                  layout="responsive"
                />
              </div>
              </div>
              </div>
        <div className={`${Academy.className} flex flex-row items-center leading-none text-black`} id="fullLogo">
        <Image
          className="dark:invert"
          src="/25logos/noBG.png"
          alt="Next.js logo"
          width={130}
          height={60}
          priority
        />
        <p className="text-[100px]">Select</p>
        </div>
        
 
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <h2>What we do at <strong>XVSelect</strong></h2>
          <li>
            Learn about recruiting events going on in your area
            <p></p>
          </li>
          <li>
            Help you get in contact with top Rugby coaches across the country
            <p></p>
          </li>
          <li>
            Help you kickstart your futures
          </li>
        </ol>
        
      </main>
      
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    </>
  );
}
