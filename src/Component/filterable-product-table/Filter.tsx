import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { Interface } from 'readline'

export const Item = ({}: any) => {
  const [inputItem, setInputItem] = useState('')
  const [data, setData] = useState(PRODUCTS)
  const [inStock, setInStock] = useState(false)

  const tem = PRODUCTS

  useEffect(() => {
    if (inStock == true && inputItem == '') {
      setData(tem.filter((e) => e.stocked == inStock))
    } else if (inStock == true && inputItem != '') {
      setData(
        data.filter((e) => e.name.includes(inputItem) && e.stocked == inStock)
      )
    } else if (inStock == false && inputItem != '') {
      setData(data.filter((e) => e.name.includes(inputItem)))
    } else if (inStock == false && inputItem == '') {
      setData([...tem])
    }
  }, [inputItem, inStock])

  return (
    <>
      <SearchBar
        setInputItem={setInputItem}
        setInStock={setInStock}
      ></SearchBar>
      <TableItem data={data}></TableItem>
    </>
  )
}
const SearchBar = ({ setInputItem, setInStock }: any) => {
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          setInputItem(e.target.value)
        }}
        placeholder="Search..."
      ></input>
      <p>
        <input
          type="checkbox"
          id="inStock"
          onChange={(e) => {
            setInStock(e.target.checked)
          }}
        />
        Only show products in stock
      </p>
    </form>
  )
}

const TableItem = ({ data }: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((element) => {
          return (
            <tr>
              <td>{element.name}</td>
              <td>{element.price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football',
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball',
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball',
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch',
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5',
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
]
