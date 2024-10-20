import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {TiMessage, TiMessages} from "react-icons/ti";




const  NochatSelected = () =>{
    return(
        <div className={"flex items-center justify-center w-full h-full"}>
        <div className={"px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2"}>
            <p>Welcome John Doe</p>
            <p>Select a chat to start messageing</p>
            <TiMessages className={"text-3xl md:text-6xl text-center"}/>
        </div>
        </div>
    )
}



const MessageContainer = ()=>{
    const nochatSelected = true;



return(
    <div className={"md:min-w-[450px] flex flex-col"}>
        {nochatSelected ? <NochatSelected/> : (
            <>
                {/*Header*/}

                <div className={"bg-slate-500 px-4 py-2 mb-2"}>
                    <span className={"label-text"}>To:</span> <span className={"text-gray-900"}>John Doe</span>
                </div>
                <Messages/>
                {/*    Send message*/}
                <MessageInput/>
            </>
        )}
    </div>
)
}
export default MessageContainer;