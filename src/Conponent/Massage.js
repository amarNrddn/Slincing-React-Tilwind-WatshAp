const Massage = ({name, chat, bg, css}) => {
    return(
        <div className={`${css} flex `}>
            <div className={`${bg} w-auto h-auto p-1 mx-5 rounded-[4px] mt-3`}>
                <p>{name}</p>
                <p>{chat}</p>
            </div>
        </div>
    )
}

export default Massage