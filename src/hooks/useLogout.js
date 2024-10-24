import { auth } from '../firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth)
    const showToast = useShowToast()
  const handleLogout = async () => {
    try{
        await signOut();
        localStorage.removeItem("user-info")  
        console.log("user logged out")  

    } catch (error) {
      showToast("Error", error.message, "error");
    }
  }
  
  
  
  
    return {handleLogout,isLoggingOut,error}
}

export default useLogout;