// import { useState, useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
// import { useNavigate } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Separator } from "@/components/ui/separator";
// import { CreditCard, Truck, Building } from "lucide-react";

// const CheckoutPage = () => {
//   const { cartItems, getTotalCartAmount } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const shippingCost = 9.99;
//   const tax = totalAmount * 0.1; // 10% tax
//   const finalTotal = totalAmount + shippingCost + tax;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid gap-8 md:grid-cols-2">
//           {/* Left Column - Forms */}
//           <div className="space-y-6">
//             {/* Shipping Information */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Truck className="h-5 w-5" />
//                   Shipping Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input id="firstName" placeholder="John" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input id="lastName" placeholder="Doe" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="address">Street Address</Label>
//                   <Input id="address" placeholder="123 Main St" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="city">City</Label>
//                     <Input id="city" placeholder="New York" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="zipCode">ZIP Code</Label>
//                     <Input id="zipCode" placeholder="10001" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Payment Method */}
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <CreditCard className="h-5 w-5" />
//                   Payment Method
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <RadioGroup
//                   defaultValue="card"
//                   onValueChange={setPaymentMethod}
//                   className="space-y-4"
//                 >
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="card" id="card" />
//                     <Label htmlFor="card" className="flex items-center gap-2">
//                       <CreditCard className="h-4 w-4" />
//                       Credit Card
//                     </Label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <RadioGroupItem value="bank" id="bank" />
//                     <Label htmlFor="bank" className="flex items-center gap-2">
//                       <Building className="h-4 w-4" />
//                       Bank Transfer
//                     </Label>
//                   </div>
//                 </RadioGroup>

//                 {paymentMethod === "card" && (
//                   <div className="mt-4 space-y-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="cardNumber">Card Number</Label>
//                       <Input
//                         id="cardNumber"
//                         placeholder="4242 4242 4242 4242"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="expiry">Expiry Date</Label>
//                         <Input id="expiry" placeholder="MM/YY" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="cvc">CVC</Label>
//                         <Input id="cvc" placeholder="123" />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Order Summary</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {/* Order Items */}
//                 <div className="space-y-2">
//                   {Object.keys(cartItems).map((itemId) => {
//                     const quantity = cartItems[itemId];
//                     if (quantity > 0) {
//                       return (
//                         <div
//                           key={itemId}
//                           className="flex justify-between text-sm"
//                         >
//                           <span>
//                             Product {itemId} (x{quantity})
//                           </span>
//                           <span>${(quantity * 29.99).toFixed(2)}</span>
//                         </div>
//                       );
//                     }
//                     return null;
//                   })}
//                 </div>

//                 <Separator />

//                 {/* Totals */}
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span>Subtotal</span>
//                     <span>${totalAmount.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Shipping</span>
//                     <span>${shippingCost.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Tax</span>
//                     <span>${tax.toFixed(2)}</span>
//                   </div>
//                   <Separator />
//                   <div className="flex justify-between font-bold">
//                     <span>Total</span>
//                     <span>${finalTotal.toFixed(2)}</span>
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex flex-col space-y-4">
//                 <button
//                   className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                   onClick={() => {
//                     // Handle payment processing here
//                     alert("Order placed successfully!");
//                     navigate("/");
//                   }}
//                 >
//                   Place Order (${finalTotal.toFixed(2)})
//                 </button>
//                 <button
//                   onClick={() => navigate("/cart")}
//                   className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
//                 >
//                   Back to Cart
//                 </button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
