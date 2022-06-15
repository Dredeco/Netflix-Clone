import { useState } from 'react'
import { Header } from './components/Header'
import Banner from './assets/banner.jpg'

export function App() {
 return (
   <div>
    <Header />

      <div>
         <img src={Banner} className="w-screen h-screen"/>
      </div>

    </div>
   )
}
