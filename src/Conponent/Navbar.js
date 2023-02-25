import Profile from '../assets/profile.jpg'
import {BsChatDots} from 'react-icons/bs'
import {BiMenu} from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-2 bg-[#eeeeee] sm:shrink-0  z-999'>
            <div className="w-12 h-12 flex">
                <img src={Profile} alt="" className='object-cover rounded-full' />
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
                <BsChatDots className='w-5 h-5'/>
                <BiMenu className='w-5 h-5'/>
            </div>
        </div>
    )
}

export default Navbar