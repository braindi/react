// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import { addOrderToServer } from './OrdersApi';

// const Form = () => {
//   const [formData, setFormData] = useState({
//     city: '',
//     street: '',
//     houseNumber: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const currentUser = JSON.parse(localStorage.getItem('current user'));
//     const userToken = currentUser.token;
//     console.log(userToken);
//     const cart = JSON.parse(localStorage.getItem('cart'));

//     const orderData = {
//       address: {
//         street: formData.street,
//         city: formData.city
//       },
//       orderDate: new Date().toISOString(),
//       deliveryDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
//       customerId: currentUser._id,
//       products: cart.map(item => ({
//         productCode: item._id,
//         name: item.name,
//         price: item.price,
//         company: item.description,
//         quantity: item.amount
//       }))
//     };
//     console.log("orderData is" + orderData);
//     try {
//       const response = await addOrderToServer(orderData, userToken)
//       console.log('Order sent successfully:', response.data);
//     } catch (error) {
//       console.error('Error sending order:', error);
//     }
//   };

// return (<>
//   <form onSubmit={onSubmit}>
//     <TextField
//       name="city"
//       label="City"
//       value={formData.city}
//       onChange={handleInputChange}
//       fullWidth
//       margin="normal"
//     />
//     <TextField
//       name="street"
//       label="Street"
//       value={formData.street}
//       onChange={handleInputChange}
//       fullWidth
//       margin="normal"
//     />
//     <TextField
//       name="houseNumber"
//       label="House Number"
//       value={formData.houseNumber}
//       onChange={handleInputChange}
//       fullWidth
//       margin="normal"
//     />
//     <Button type="submit" variant="contained" color="primary">
//       Send
//     </Button>
//   </form>
// </>
// );
// };

// export default Form;

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { addOrderToServer } from './OrdersApi';

const Form = () => {
  const [formData, setFormData] = useState({
    city: '',
    street: '',
    houseNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const currentUser = JSON.parse(localStorage.getItem('current user'));
    const userToken = currentUser.token;
    const cart = JSON.parse(localStorage.getItem('cart'));
    // const orderData = {
    //   address: {
    //     street: formData.street,
    //     city: formData.city
    //   },
    //   orderDate: new Date().toISOString(),
    //   deliveryDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
    //   customerId: currentUser._id,
    //   products: cart.map(item => ({
    //     productCode: item._id,
    //     name: item.name,
    //     price: item.price,
    //     company: item.description,
    //     quantity: item.amount
    //   }))
    // };
    const orderData = {
      "address": {
        "street": formData.street,
        "city": formData.city
      },
      "orderDate": new Date().toISOString(),
      "deliveryDate": new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
      "costumerId": currentUser._id,
      "products": cart.map(item => ({
        "productCode": item._id,
        "name": item.name,
        "price": item.price,
        "company": item.description,
        "quantity": item.amount
      }))      
    };

    try {
      const response = await addOrderToServer(orderData, userToken);
      console.log('Order sent successfully:', response.data);
      
    } catch (error) {
      console.error('Error sending order:', error);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <TextField
          name="city"
          label="City"
          value={formData.city}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="street"
          label="Street"
          value={formData.street}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="houseNumber"
          label="House Number"
          value={formData.houseNumber}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </>
  );
};

export default Form;

