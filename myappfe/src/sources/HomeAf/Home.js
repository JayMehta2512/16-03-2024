import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Body from '../../components/Body'
// import { useState, useEffect } from 'react';
// import { database,fs } from './FirebaseConfig';
// export default function Home() {
//   function GetCurrentUser(){
//     const [user, setUser ]=useState(null);
//     useEffect(()=>{
//     database.onAuthStateChanged(user=>{
//       if(user){
//           fs.collection("users").doc(user.uid).get().then(snapshot=>{
//             setUser(snapshot.data().username);
//           })
//       }
//       else{
//         setUser(null);
//       }
//     })
//     },[])
//     return user;
//   }
//   const user =GetCurrentUser();
//   console.log(user);
export default function Home() {
  return (
    <div>
      <Header  />
      <Body/>
      <Footer/>
    </div>
  )
}
