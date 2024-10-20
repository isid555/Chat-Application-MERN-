import {RiLogoutBoxLine} from "react-icons/ri";
import {useAuthContext} from "../../context/AuthContext.jsx";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () =>{
    const {loading,logout} = useLogout()
    return(
        <div className={"mt-auto btn btn-circle hover:bg-sky-500"}>



            {
                !loading ? (
                    <RiLogoutBoxLine className={"w-6 h-6 text-white cursor-pointer "} onClick={logout} />
                ):(
                    <span className={"loading loading-spinner"}></span>
                )
            }


        </div>
    )
}
export default LogoutButton;