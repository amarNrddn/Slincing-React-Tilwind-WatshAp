const Contact = ({ img, name, massage, time }) => {
    return (
        <div className="flex  justify-between border-b pt-2 pb-2 overflow-y-hidden overflow-hidden">
            <div className="flex items-center">
                <div className="flex w-12 h-12 ">
                    <img src={img} alt="" className="object-cover w-full rounded-full " />
                </div>
                <div className="pl-2">
                    <p className="text-[17px] font-semibold">{name}</p>
                    <p className="text-gray-500 w-[16rem] truncate">{massage}</p>
                </div>
            </div>

            <div className="flex pr-3">
                <p className=" text-[11px] text-gray-500">{time}</p>
            </div>
        </div>
    )
}

export default Contact