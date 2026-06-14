import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RestaurantMenu = () => {
  const [cart, setCart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Demo menu data with bilingual support
  const menuItems = [
    { id: 1, name: "Hyderabadi Chicken Dum Biryani", telugu: "హైదరాబాదీ చికెన్ దమ్ బిర్యానీ", price: 320, desc: "Classic fragrant basmati rice layered with slow-cooked marinated chicken.", isVeg: false },
    { id: 2, name: "Paneer Butter Masala", telugu: "పనీర్ బట్టర్ మసాలా", price: 280, desc: "Soft cottage cheese cubes simmered in a rich, creamy tomato and butter gravy.", isVeg: true },
    { id: 3, name: "Guntur Chilli Chicken", telugu: "గుంటూరు మిరపకాయ చికెన్", price: 250, desc: "Fiery and tangy dry chicken starter made with authentic Guntur chillies.", isVeg: false },
    { id: 4, name: "Double ka Meetha", telugu: "డబుల్ కా మీఠా", price: 120, desc: "Traditional Hyderabadi bread pudding dessert infused with saffron and cardamom.", isVeg: true }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  // 🚀 Send order directly to live Render backend
  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;
    setIsSubmitting(true);

    // Matches your server.js /api/orders/verify payload exactly
    const orderPayload = {
      customerName: "Arun Kumar", 
      totalAmount: cartTotal,
      paymentMethod: "COD",
      transactionId: "COD",
      items: cart,
      restaurantId: "1", 
      deliveryAddress: "Jubilee Hills, Hyderabad",
      deliveryDistanceKm: 3.5,
      taxBreakdown: { deliveryFee: 40.00 }
    };

    try {
      const response = await fetch("https://bitee-backend-api.onrender.com/api/orders/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderPayload)
      });

      if (response.ok) {
        setCart([]);
        setOrderSuccess(true);
        setTimeout(() => setOrderSuccess(false), 4000);
      } else {
        const errorData = await response.json();
        console.error("Backend validation failed:", errorData);
        alert("Failed to process order on the server.");
      }
    } catch (error) {
      console.error("Network routing error: ", error);
      alert("Unable to reach the Bitee servers. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-stone-900 pb-24">
      
      {/* Header Banner */}
      <div className="bg-[#3e2723] pt-12 pb-6 px-4 text-white rounded-b-3xl shadow-md relative z-10">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-stone-300 hover:text-white mb-6 inline-block font-medium text-sm transition">&larr; Back to Bitee Home</a>
          <h1 className="text-4xl font-black tracking-tight mb-1">Mana Vividha Ruchulu</h1>
          <p className="text-stone-300 font-medium mb-4 text-lg">Authentic Telugu & Hyderabadi Cuisine</p>
          
          <div className="flex items-center gap-4 text-sm font-bold">
            <div className="bg-green-700 text-white px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
              <span>4.8</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <span className="text-stone-300">•</span>
            <span>35-40 mins</span>
            <span className="text-stone-300">•</span>
            <span>Jubilee Hills, Hyderabad</span>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {orderSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mt-6 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-xl flex items-center justify-center font-bold shadow-sm"
        >
          🎉 Order sent to restaurant successfully!
        </motion.div>
      )}

      {/* Menu List */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <h2 className="text-2xl font-black text-[#3e2723] mb-6 flex items-center gap-2">
          Recommended <span className="bg-[#8b5a2b] text-white text-xs px-2 py-0.5 rounded-full">Top Picks</span>
        </h2>
        
        <div className="space-y-6">
          {menuItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 flex justify-between gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                {/* Veg/Non-Veg Icon */}
                <div className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center mb-2 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                </div>
                
                <h3 className="font-bold text-lg text-stone-800 leading-tight">{item.name}</h3>
                <p className="text-xs font-semibold text-[#8b5a2b] mb-1">{item.telugu}</p>
                <p className="font-bold text-stone-900 mb-2">₹{item.price}</p>
                <p className="text-sm text-stone-500 leading-relaxed max-w-md">{item.desc}</p>
              </div>
              
              <div className="flex flex-col items-end justify-between w-32 flex-shrink-0">
                <div className="w-full h-24 bg-stone-100 rounded-xl mb-3 border border-stone-200 flex items-center justify-center text-stone-400 text-xs">
                  Image
                </div>
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-white text-green-700 border border-green-700 font-bold px-6 py-2 rounded-xl text-sm uppercase tracking-wide w-full hover:bg-green-50 transition shadow-sm"
                >
                  Add
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Cart Footer */}
      {cart.length > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-green-700 text-white p-4 shadow-2xl z-50 border-t border-green-800"
        >
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">{cart.length} item{cart.length > 1 ? 's' : ''} added</p>
              <p className="text-sm text-green-100 font-medium">Total: ₹{cartTotal}</p>
            </div>
            <button 
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
              className={`${isSubmitting ? 'bg-stone-300 text-stone-500' : 'bg-white text-green-800 hover:bg-stone-100'} font-black px-6 py-3 rounded-xl transition shadow-md flex items-center gap-2`}
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'} 
              {!isSubmitting && <span className="text-xl leading-none">&rarr;</span>}
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RestaurantMenu;