import { FaSearch } from 'react-icons/fa'
const Search = () => {
    return (
        <div className="lg:relative flex items-center bg-[#fbfbfb] px-3 py-2 sm:sticky z-60 sm:w-full sm:shrink top-0">
            <div className="absolute left-6 ">
                <FaSearch className='text-[#b1afae]' />
            </div>
            <input type='search' placeholder='Seach Chat friend' className="w-full outline-none bg-[#fff] pl-9 border-2 rounded-[7px] text-[#b1afae]" />
        </div>
    )
}

export default Search