// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { addOrder } from "./orderApi";

// export const FinishShopping = () => {

//     let [value, setValue] = useState("")
//     let basket = useSelector(state => state.cartOrders.arr);
//     let date = Date.now();
//     let id = useSelector(state => state.thisUser.currentUser)?.data._id;
//     let addres = value;
//     let userToken = useSelector(state => state.thisUser.currentUser)?.data.token;

//     let newO = { forDate: date, adress: addres, arrProducts: basket}
//     const finish = async () => {
//         try{
//         let myOrder = await addOrder(newO)}
//         catch(err){

//         }
//     }

//     return (<>
//         <input type="text" onChange={(e) => setValue(e.value)} />

//         <input type="button" onClick={finish} />

//     </>);
// }

