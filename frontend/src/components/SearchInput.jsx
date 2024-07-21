import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const SearchInput = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-full flex items-center bg-slate-50 pr-3 pl-1 rounded-2xl'>
        <input className='bg-transparent p-1.5 rounded-lg mr-2 w-full outline-none' type="text" placeholder="Search..." value={value} onChange={onChange} />

        {value && (<IoMdClose className='text-gray-500 text-xl cursor-pointer hover:text-black mr-2' onClick={onClearSearch} />)}

        <FaMagnifyingGlass className='text-gray-500 text-xl cursor-pointer hover:text-black' onClick={handleSearch} />
    </div>
  )
}

export default SearchInput