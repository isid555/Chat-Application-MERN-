import {CiSearch} from "react-icons/ci";
import {useState} from "react";
import useConversation from "../../zustland/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = ()=>{
    const[search , setSearch] = useState("")
    const {setselectedConversation} = useConversation()
    const {conversations} =   useGetConversations()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!search) return;
        const conversation = conversations.find((c)=>(c.fullName.toLowerCase().includes(search.toLowerCase())))

        if(conversation){
            setselectedConversation(conversation)
            setSearch("")
        }
        else{
            toast.error("No such user found")
        }
    }

return(
    <form className={"flex items-center gap-2"}>
        <input type="text" placeholder={"Search..."} className={"input input-bordered rounded-full"} value={search} onChange={(e)=>{
            setSearch(e.target.value)
        }}/>
        <button type="submit" className={"btn btn-circle  bg-sky-500 text-white" }>
            <CiSearch className={"w-6 h-6 outline-none"} />
        </button>
    </form>
)
}
export default SearchInput;