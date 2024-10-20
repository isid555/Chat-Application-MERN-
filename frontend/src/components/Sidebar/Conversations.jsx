import Conversation from "./Conversation.jsx";
import useGetConversations from "../../hooks/useGetConversations.js";

const Conversations = ()=>{
    const {loading,conversations} = useGetConversations();
    console.log(conversations)
return (
    <div className={"py-2 flex flex-col overflow-auto"}>


        {conversations.map((conversation) =>(
            <Conversation  key = {conversation._id} conversation={conversation}  />
        ))}

        {loading ? <span className={"loading loading-spinner mx-auto"}></span> : null}
    </div>
)
}
export default Conversations;