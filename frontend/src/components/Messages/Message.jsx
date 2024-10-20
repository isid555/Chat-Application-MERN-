const Message = () =>{
return(
    <div className={" chat chat-end"}>
        <div className={"chat-image avatar"}>
            <div className={"w-10 rounded-full"}>
                <img
                    src="https://images.ottplay.com/images/raayan-1708604044.jpg?impolicy=ottplay-20210210&width=1200&height=675"
                    alt=""/>
            </div>
        </div>
        <div className={"chat-bubble text-white bg-blue-500"}>
        Hi what's up?
        </div>
        <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>12:42</div>
    </div>
)

}
export default Message;