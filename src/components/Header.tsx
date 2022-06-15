import { useState } from "react";
import Logo from "./../assets/logo.png"

export function Header() {
    let navLinks =[
        {name:"Início",link:"/"},
        {name:"Séries",link:"/"},
        {name:"Filmes",link:"/"},
        {name:"Bombando",link:"/"},
        {name:"Minha lista",link:"/"},
      ];
    let [open,setOpen]=useState(false);

    return (
       <div className="flex fixed w-full h-[68px] z-50 bg-gradient-to-b from-black">
        <div className="flex flex-row w-full items-center px-10">
            <div className="cursor-pointer">
             <img className="w-48" src={Logo}/>
            </div> {/*Logo*/}

            <ul className={`hidden md:flex ml-8 transition-all duration-500`}>
                {
                    navLinks.map((link)=>(
                        <li key={link.name} className='whitespace-nowrap text-sm font-normal font-Roboto mr-5 first:font-bold'>
                            <a href={link.link} className='text-gray-200 hover:text-gray-600 duration-500'>{link.name}</a>
                        </li>
                ))
                }
            </ul> {/*Menu Links Desktop*/}

            <div className='md:hidden flex w-full justify-end text-sm cursor-pointer text-zinc-200'>
                    <p onClick={()=>setOpen(!open)} className="flex w-full"> Navegar
                     <i className="fa-solid fa-sort-down ml-2" />
                    </p>
            </div> {/*Menu Mobile*/}
        
            <ul className={`absolute md:hidden left-15 z-10 w-64 text-center transition-all duration-500 ${open ? 'z-10 top-14':'hidden'}`}>
                <i className="relative fa-solid fa-sort-down ml-2 bg-transparent rotate-180 top-2" />
                {
                    navLinks.map((link)=>(
                        <li key={link.name} className='text-base w-full py-4 border-y border-black bg-black bg-opacity-70 first:border-t-4'>
                            <a  className='text-white w-full'>{link.name}</a>
                        </li>
                ))
                }
            </ul> {/*Menu Links Mobile*/}

            <div className="flex w-full justify-end text-lg font-normal font-Roboto mr-12">
                <div className="mr-5">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="mr-5 text-sm pt-1 hidden md:flex">
                    Infantil
                </div>
                <div className="mr-5">
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className="w-7 h-7 flex rounded bg-green-500 cursor-pointer">
                    <i className="fa-solid fa-sort-down ml-9 hover:rotate-180 duration-500" />
                </div>
            </div>

        </div> {/*Header*/}
       </div> /*Header*/
      )
   }