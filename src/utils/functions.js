// ADD USER 
import { getDatabase, ref, set,push, onValue,remove,update } from "firebase/database";
import firebase from "./firebase";
import { useState,useEffect,  } from "react";
// import Toastify from "./toastify";


export function writeUserData(info) {
    const db=getDatabase(firebase)
    const userRef=ref(db,"users/")
    const newUserRef=push(userRef)

    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
  
  //VERITABANINA VERI GONDERIMI
  console.log("Add user fonksiyonuyla bilgiler kaydedildi.")
}

export const useFetch=function(){

    const [userList, setuserList] = useState();
    const [isLoaded, setisLoaded] = useState(true);

    useEffect(() => {
        // VERI GONDERILDIKTEN SONRA HEMEN DOM'U GUNCELLEMEK ICIN READ DATA ISLEMI GEREKLI
        const db = getDatabase(firebase);
        const starCountRef = ref(db, 'users/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const userArray=[];
            
            for(let id in data){
                userArray.push({id,...data[id]})
            }
            setuserList(userArray);
            setisLoaded(false)
        });
        
    }, [ ])
    return {isLoaded,userList};
}

export const DeleteUser=(id)=>{
    const db = getDatabase(firebase);
    const userRef=ref(db,"users/")
    remove(ref(db,"users/"+id))
    // Toastify("Deleted Successfully")

}

export const UpdateUser=(info)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"users/")

    const updates = {};

    updates["users/"+info.id]=info

    return update(ref(db), updates);

}