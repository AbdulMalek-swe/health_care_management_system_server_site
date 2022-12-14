const SSLCommerzPayment = require('sslcommerz-lts')
const { v4: uuidv4 } = require('uuid');
module.exports.getPayment = async (req, res, next) => {
   try{
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: uuidv4(), 
        success_url: 'http://localhost:5000/api/v1/success',
        fail_url: 'http://localhost:5000/api/v1/fail',
        cancel_url: 'http://localhost:5000/api/v1/cancel',
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };
      
    const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false)
      sslcz.init(data).then(data=> {
        // Redirect the user to payment gateway
         console.log(data);
        // let GatewayPageURL = apiResponse.GatewayPageURL
        res.redirect(data.GatewayPageURL)
        // console.log('Redirecting to: ', GatewayPageURL)
        // res.status(200).json({result:data})
    });
    
   }
   catch(error){
    res.status(200).json({
        error:error.message
    })
   }
}
module.exports.successPayment = async (req, res, next) => {
    try{ 
         console.log(req.body);
        
         res.status(200).json(req.body)
    //  res.redirect(`http://localhost:3000/success`)
    }
    catch(error){
     res.status(200).json({
         error:error.message
     })
    }
 }
 module.exports.failPayment = async (req, res, next) => {
    try{ 
    
     res.redirect(`http://localhost:3000/`)
    }
    catch(error){
     res.status(200).json({
         error:error.message
     })
    }
 }
 module.exports.cancelPayment = async (req, res, next) => {
    try{ 
   
     res.redirect(`http://localhost:3000/`)
    }
    catch(error){
     res.status(200).json({
         error:error.message
     })
    }
 }