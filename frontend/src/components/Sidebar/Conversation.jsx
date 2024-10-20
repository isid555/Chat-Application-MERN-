import useConversation from "../../zustland/useConversation.js";

const Conversation = ({conversation})=>{


    const {selectedConversation,setselectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id;

return(
    <div>


        <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" :""} `}
        onClick={()=>setselectedConversation(conversation)}
        >

            <div className={"avatar online"}>
                <div className={"w-12 rounded-full"}>
                    <img src={conversation.profilePic} alt="profilepicture"/>
                </div>
            </div>



            <div className={"flex flex-col flex-1"}>
            <div className={"flex gap-3 justify-between"}>
                <p className={"font-bold text-gray-200"}>{conversation.fullName}</p>
                <span className={"text-xl"}></span>
            </div>
            </div>

        </div>


      <div className={"divider my-0 py-0 h-1"}></div>

    </div>

)
}
export default Conversation;