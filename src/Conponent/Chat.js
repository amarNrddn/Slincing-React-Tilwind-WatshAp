import React from 'react'
import profile3 from '../assets/profile3.jpg'
import backround from '../assets/background.png'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import { BsMicFill } from 'react-icons/bs'
import { GrAttachment } from 'react-icons/gr'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import Massage from './Massage'

const Chat = () => {
    const massages = [
        {
            name: 'Wiwit Hsty',
            chat: 'amar sebenarnya aku juga masih sayang kamu taoi kamu ngga peka',
            bg: "bg-[#ffffff]",
            css: "justify-start"
        },
        {
            name: 'Me',
            chat: 'Maaf wit aku sak jane yo pengin balikan tapi pie meneh hah',
            bg: "bg-[#dcf8c6]",
            css: "justify-end"
        },
        {
            name: 'Wiwit Hsty',
            chat: 'Sayang',
            bg: "bg-[#ffffff]",
            css: "justify-start"
        },
        {
            name: 'Me',
            chat: 'Maaf wit aku sak jane yo pengin balikan tapi pie meneh hah',
            bg: "bg-[#dcf8c6]",
            css: "justify-end"
        },
        {
            name: 'Wiwit Hsty',
            chat: 'Sayang',
            bg: "bg-[#ffffff]",
            css: "justify-start"
        },
        {
            name: 'Me',
            chat: 'Maaf wit aku sak jane yo pengin balikan tapi pie meneh hah',
            bg: "bg-[#dcf8c6]",
            css: "justify-end"
        },
        {
            name: 'Wiwit Hsty',
            chat: 'Sayang',
            bg: "bg-[#ffffff]",
            css: "justify-start"
        },
        {
            name: 'Me',
            chat: 'Maaf wit aku sak jane yo pengin balikan tapi pie meneh hah',
            bg: "bg-[#dcf8c6]",
            css: "justify-end"
        },
        {
            name: 'Wiwit Hsty',
            chat: 'Sayang',
            bg: "bg-[#ffffff]",
            css: "justify-start"
        }
    ]
    return (

            <div className='hidden md:flex flex-col  bg-[#eeeeee] w-full  items-center relative justify-between z-999'> 

                {/* header */}
                <div className="flex px-4 w-full h-[4rem] items-center z-20 bg-[#eeeeee] justify-between ">
                    <div className="flex items-center ">
                        <div className="flex w-12 h-12 bg-[#f6739e] rounded-full ">
                            <img src={profile3} alt="" className='object-cover w-full rounded-full p-1' />
                        </div>
                        <div className="pl-3">
                            <p className='font-semibold'>Wiwit Hesty</p>
                            <p className='text-[13px] text-gray-500 '>terahir dilihat 12.08</p>
                        </div>
                    </div>

                    <div className="flex gap-6 text-[1.2rem] pr-3 text-[#8a8988]">
                        <FaSearch />
                        <BsThreeDotsVertical />
                    </div>
                </div>

                {/* massage */}
                <div className="absolute top-0 w-full h-full">
                    <div className="absolute flex w-full h-full overflow-hidden">
                        <img src={backround} alt="" className='object-cover h-full w-full' />
                    </div>

                    <div className="relative pt-[4rem] h-[90%] overflow-y-auto">
                        {massages.map((massage) => (
                            <Massage name={massage.name} chat={massage.chat} bg={massage.bg} css={massage.css} />
                        ))}
                    </div>
                </div>

                {/* text */}
                <div className="relative z-20 w-full bg-[#efeded] px-4 py-2 flex  items-center gap-3 justify-between">
                    <div className="">
                        <MdOutlineEmojiEmotions className='w-7 h-7 text-[#8a8988]' />
                    </div>

                    <div className="text-red-400">
                        <GrAttachment className='w-5 h-5 text-[#81919b]' />
                    </div>

                    <input type='text' placeholder='type a massage...' className='w-full h-10 rounded-[8px] outline-none pl-2' />

                    <div className="">
                        <BsMicFill className='w-6 h-6 text-[#8a8988]' />
                    </div>
                </div>
            </div>
    )
}

export default Chat
