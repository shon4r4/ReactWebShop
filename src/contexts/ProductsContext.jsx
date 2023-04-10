import React from 'react'
import { createContext } from 'react'

import boris from '../assets/img/boris.jpg'
import joe from '../assets/img/joe.jpg'
import kimjong from '../assets/img/kimjong.jpg'
import lofven from '../assets/img/lofven.jpg'
import magdalena from '../assets/img/magdalena.jpg'
import silvio from '../assets/img/silvio.jpg'
import trump from '../assets/img/trump.jpg'
import vlad from '../assets/img/vlad.jpg'
import xi from '../assets/img/xi.jpg'


const ProductsContext = createContext()

export function ProductsProvider({ children }) {

    const products = [{ id: 1000, name: "Boris The crazy Hair Jonson", price: 500, img: boris },
    { id: 1002, name: "Joe I don't know what the fuck Biden", price: 75, img: joe },
    { id: 1003, name: "Kim Jong Ung", price: 300, img: kimjong },
    { id: 1004, name: "Steefan ", price: 200, img: lofven },
    { id: 1005, name: "Magdalena Sosse", price: 55, img: magdalena },
    { id: 1006, name: "Silvio Bunga Bunga Berluskoni", price: 8000, img: silvio},
    { id: 1007, name: "Mc Donald", price: 9000, img: trump },
    { id: 1008, name: "Vlad The Emperor", price: 60000, img: vlad },
    { id: 1009, name: "XI", price: 5000, img: xi }]

    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;