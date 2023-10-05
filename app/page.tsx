'use client'
import Image from "next/image"
import Link from "next/link"

import { useState, useEffect, useCallback } from "react";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {


  const [wallet, setWallet] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)


  const getEligibility = useCallback(async (address: string) => {

    const jsonRes = await fetch('api/get-whitelist?address=' + address, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': "application/json"
      }
    })

    const res = await jsonRes.json();

    return res ?? false
  }, [])



  return (
    <main className="relative  max-w-6xl h-screen mx-auto flex flex-col items-center justify-center">
      <div className=" w-full flex flex-col items-center justify-center gap-7 p-6 sm:p-16">
        <div className="text-black text-4xl md:text-6xl lg:text-8xl font-semibold" >
          Cool List
        </div>

        <label htmlFor="wallet-input" className="text-black text-opacity-50  text-lg sm:text-xl md:text-3xl">Check your WL eligibility</label>

        <input
          className="p-2 rounded-lg transition-all shadow-2xl "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setWallet((e.target.value).substring(0, 200) as string)
          }} value={wallet} name="wallet-input" type="text" placeholder="wallet address..." />


        {!isVerifying ? (
          <button onClick={() => {
            if(isVerifying){return}
            
            if ((wallet === '') ) {
              toast('Enter your Wallet Address', { type: "warning", className: 'toast-message', progressClassName:'toast-progress' })
              return
            }
            setIsVerifying(true);
            getEligibility(wallet).then((res) => {
              setIsVerifying(false);
              if (res) {
                toast('Wallet Whitelisted!', { type: "success", className: 'toast-message', progressClassName:'toast-progress' })
              } else {
                toast('Wallet not Found!', { type: "error", className: 'toast-message', progressClassName:'toast-progress' })
              }
            })

          }}
            className=" px-2 py-1 rounded-2xl shadow-xl bg-slate-500 text-xl md:text-3xl bg-opacity-40 transition-all hover:scale-[1.08] duration-[400ms] active:scale-100 hover:text-white hover:bg-opacity-100  "> Verify</button>
        ) : (
          <Image width={60} height={60} src={'/loader.png'} alt="loader" className="aspect-auto animate-spin" />
        )}

      </div>

      <Image className={"z-[-2] absolute bottom-0 left-[50%] translate-x-[-50%] transition-all " }
      style={{
        opacity:isVerifying?('0.37'):('1')
      }}
      alt="coolbuddy" width={350} height={350} src={'/Cool Buddy.webp'}></Image>


      <div className="transition-opacity duration-300 max-sm:w-fit max-sm:left-[50%] max-sm:translate-x-[-50%] w-full fixed z-10 bottom-12 left-[10vw] flex items-center justify-start gap-4">

        <Link className=" max-sm:hidden" href={'http://www.wabalabaland.com/'} target="_blank">
          <Image className="aspect-auto w-[40px] h-[40px]  sm:ml-4 rounded-full transition-all hover:scale-[1.08] active:scale-100"
            alt="logo"
            src={'/logo.webp'}
            width={60}
            height={60}
          ></Image>
        </Link>

        <Link className=" max-sm:hidden" href={'https://twitter.com/wabalabaland'} target="_blank">
          <Image className="aspect-auto w-[40px] h-[40px]  sm:ml-4 transition-all hover:scale-[1.08] active:scale-100"
            alt="logo"
            src={'/twitter.png'}
            width={60}
            height={60}
          ></Image>
        </Link>

        <Link className=" max-sm:hidden" href={'https://discord.gg/QUDJ9MGEkn'} target="_blank">
          <Image className="aspect-auto w-[40px] h-[40px]  sm:ml-4 transition-all hover:scale-[1.08] active:scale-100"
            alt="logo"
            src={'/discord.png'}
            width={60}
            height={60}
          ></Image>
        </Link>
      </div>


      <ToastContainer
        style={{ zIndex: '1000000001', position: 'fixed' }}
        pauseOnHover
        position='bottom-center'
        limit={2} />
    </main>
  )
}

export default Home