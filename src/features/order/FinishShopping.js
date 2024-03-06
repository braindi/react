// // import { useState } from "react";
// // import { useSelector } from "react-redux";
// // import { addOrder } from "./orderApi";

// // export const FinishShopping = () => {

// //     let [value, setValue] = useState("")
// //     let basket = useSelector(state => state.cartOrders.arr);
// //     let date = Date.now();
// //     let id = useSelector(state => state.thisUser.currentUser)?.data._id;
// //     let addres = value;
// //     let userToken = useSelector(state => state.thisUser.currentUser)?.data.token;

// //     let newO = { forDate: date, adress: addres, arrProducts: basket}
// //     const finish = async () => {
// //         try{
// //         let myOrder = await addOrder(newO)}
// //         catch(err){

// //         }
// //     }

// //     return (<>
// //         <input type="text" onChange={(e) => setValue(e.value)} />

// //         <input type="button" onClick={finish} />

// //     </>);
// // }


// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { addOrder } from './orderApi.js';


// import { useSelector } from 'react-redux';

// export const FinishShopping = () => {
//     const [adress, setAdress] = useState("");
//     let myUser = useSelector(state => state.thisUser.currentUser)
//     let userToken = useSelector(state => state.thisUser.currentUser)?.data.token;
//     let basket = useSelector(state => state.cartOrders.arr);

//     const handleChange = (event, value) => {

//         setAdress(value);
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const orderData = {
//             "dateOrder": new Date(),
//             "forDate": new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
//             "address": adress,
//             "userId": myUser.data._id,
//             arrProducts: basket.map((item) => ({
//                 company: item.company,
//                 color: item.color,
//                 size: item.size,
//                 imgUrl: item.imgUrl,
//                 count: item.count
//             })),
//             onTheWay: false,


//         };

//         try {
//             alert('oiu')
//             const response = await addOrder(orderData, userToken);
//             console.log('Order sent successfully:', response.data);

//         } catch (error) {
//             console.error('Error sending order:', error);
//         }
//     };

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <TextField
//                     name="adress"
//                     label="adress"
//                     value={adress}
//                     onChange={handleChange}
//                     fullWidth
//                     margin="normal"
//                 />

//                 <Button type="submit" variant="contained" color="primary">
//                     אישור
//                 </Button>
//             </form>
//         </>
//     );
// };




