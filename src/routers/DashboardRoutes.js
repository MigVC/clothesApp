import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { ElectronicScreen } from '../components/Electronic/ElectronicScreen'
import { Error404 } from '../components/Error/Error404'
import { HomeScreen } from '../components/home/HomeScreen'
import { JeweleryScreen } from '../components/Jewelery/JeweleryScreen'
import { MenScreen } from '../components/MenClothes/MenScreen'
import { ProductScreen } from '../components/Product/ProductScreen'
import { NavBar } from '../components/ui/NavBar'
import { WomanScreen } from '../components/WomanClothes/WomanScreen'

export const DashboardRoutes = ({product}) => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/clothesApp" element={<HomeScreen/>}/>
            <Route path="/Electronic" element={<ElectronicScreen product={product}/>}/>
            <Route path="/Jewelery" element={<JeweleryScreen product={product}/>}/>
            <Route path="/Men" element={<MenScreen product={product}/>}/>
            <Route path="/Women" element={<WomanScreen product={product}/>} />
            <Route path="/product/:id" element={<ProductScreen product={product} />} />
            <Route path="*" element={<Error404 />}/>
        </Routes>
    </BrowserRouter>
  )
}
