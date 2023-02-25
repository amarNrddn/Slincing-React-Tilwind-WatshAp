import { BsChatRightTextFill } from 'react-icons/bs'
import Contact from './Contact'
import profile4 from '../assets/profile4.jpg'
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'

const Contacts = () => {
    const contacts = [
        {
            img: profile4,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile2,
            title: 'Wiwit Hesty',
            massage: 'Sayang',
            time: 15.22,
        },
        {
            img: profile3,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile4,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr ',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },
        {
            img: profile1,
            title: 'Wiwit Hesty',
            massage: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
            time: 15.22,
        },


    ]
    return (
        <div className='h-[82%] overflow-y-auto space-y-20 '>
            <div className="h-screen px-2">
                {contacts.map((contact) => (
                    <Contact img={contact.img} name={contact.title} massage={contact.massage} time={contact.time} />
                ))}
            </div>

            <div className="sm:absolute sm:top-[85%]  ">
                <div className="sm:fixed sm:right-6 bg-[#eeeeee] flex items-center rounded-full sm:z-30 w-16 h-16 md:h-0 md:w-0">
                    <BsChatRightTextFill className=' p-3 h-11 flex items-center w-full' />
                </div>
            </div>
        </div>
    )
}

export default Contacts