import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import {TiMessage, TiMessages} from "react-icons/ti";
import useConversation from "../../zustland/useConversation.js";
import {useEffect} from "react";
import {useAuthContext} from "../../context/AuthContext.jsx";




const  NochatSelected = () =>{
    const {authUser} = useAuthContext();
    return(
        <div className={"flex items-center justify-center w-full h-full"}>
        <div className={"px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2"}>
            <p>Welcome {authUser.fullName}</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className={"text-3xl md:text-6xl text-center"}/>
        </div>
        </div>
    )
}



const MessageContainer = ()=>{
    const nochatSelected = true;
    const {selectedConversation,setselectedConversation} = useConversation()

    useEffect(() => {
        return () => setselectedConversation(null)
    }, [setselectedConversation]);

return(
    <div className={"md:min-w-[450px] flex flex-col"}>
        {!selectedConversation ? <NochatSelected/> : (
            <>
                {/*Header*/}

                <div className={"bg-slate-500 px-4 py-2 mb-2"}>
                    <span className={"label-text"}>To:</span> <span className={"text-gray-900"}>{selectedConversation.fullName}</span>
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