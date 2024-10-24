import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, error] = 
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const logoutUser = useAuthStore((state) => state.logout);

  const signup = async (inputs) => {
    if (Object.values(inputs).some((value) => !value)) {
      // showToast("Error", "Please fill all the fields", "error");
        console.log(error)
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      const userDoc = {
        uid: newUser.user.uid,
        email: inputs.email,
        username: inputs.username,
        fullName: inputs.fullName,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);

      console.log("User document saved successfully.");
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);

    } catch (error) {
      showToast("Error", error.message, "error");
      // console.log(error)
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
