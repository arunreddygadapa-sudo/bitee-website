import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Live Data State
  const [stats, setStats] = useState({ revenue: 0, totalOrders: 0, activeRestaurants: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simple Frontend Login Gate
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Your secure admin password
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Access denied.');
    }
  };

  // Fetch Live Data from your Render Backend
  const fetchDashboardData = async () => {
    setIsRefreshing(true);
    try {
      // 1. Fetch Stats
      const statsResponse = await fetch('https://bitee-backend-api.onrender.com/api/admin/stats');
      const statsData = await statsResponse.json();
      if (statsResponse.ok) setStats(statsData);

      // 2. Fetch Orders
      const ordersResponse = await fetch('https://bitee-backend-api.onrender.com/api/admin/all-orders');
      const ordersData = await ordersResponse.json();
      if (ordersResponse.ok) setRecentOrders(ordersData);

    } catch (error) {
      console.error("Failed to connect to Render API:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Automatically fetch data when logged in, and set up a 15-second auto-refresh
  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
      const interval = setInterval(fetchDashboardData, 15000); // Live poll every 15s
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);


  // ==========================================
  // VIEW 1: SECURE LOGIN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-stone-200 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-[#3e2723] tracking-tight lowercase mb-1">bitee</h1>
            <p className="text-sm font-bold text-[#8b5a2b] uppercase tracking-widest">Admin Portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-xl focus:outline-none focus:border-[#8b5a2b] focus:ring-1 focus:ring-[#8b5a2b] transition"
                placeholder="Enter password..."
              />
            </div>
            {loginError && <p className="text-red-500 text-sm font-bold">{loginError}</p>}
            <button 
              type="submit"
              className="w-full bg-[#3e2723] text-white font-bold py-3 rounded-xl hover:bg-[#2d1b18] transition shadow-md"
            >
              Authenticate &rarr;
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: LIVE DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans text-stone-900">
      
      {/* Top Navigation */}
      <nav className="bg-[#3e2723] text-white px-8 py-4 shadow-md flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-black tracking-tight lowercase">bitee</h1>
          <span className="bg-[#8b5a2b] text-[#f5deb3] text-xs font-bold px-2 py-1 rounded uppercase tracking-widest flex items-center gap-2">
            Admin {isRefreshing && <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-medium hidden md:block text-right">
            <p className="text-stone-300 text-xs">System Administrator</p>
            <p className="text-xs text-green-400">Connected to Live DB</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-stone-400 hover:text-white transition ml-4 text-sm font-bold">
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-[#3e2723]">Ecosystem Overview</h2>
            <p className="text-stone-500 mt-1">Live metrics from Render PostgreSQL database.</p>
          </div>
          <button 
            onClick={fetchDashboardData}
            className={`${isRefreshing ? 'bg-stone-300' : 'bg-[#8b5a2b] hover:bg-[#704822]'} text-white px-4 py-2 rounded-lg font-bold shadow-sm transition flex items-center gap-2`}
          >
            {isRefreshing ? 'Syncing...' : 'Refresh Data'}
          </button>
        </div>

        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Total Revenue</p>
            <h3 className="text-4xl font-black text-[#3e2723]">₹{Number(stats.revenue || 0).toLocaleString()}</h3>
          </motion.div>
          
          <motion.div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Orders Processed</p>
            <h3 className="text-4xl font-black text-[#3e2723]">{stats.totalOrders || 0}</h3>
          </motion.div>

          <motion.div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Active Restaurants</p>
            <h3 className="text-4xl font-black text-[#3e2723]">{stats.activeRestaurants || 0}</h3>
          </motion.div>
        </div>

        {/* Live Orders Table */}
        <motion.div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="bg-stone-50 px-8 py-5 border-b border-stone-200">
            <h3 className="text-xl font-bold text-[#3e2723]">Recent Platform Orders</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-xs uppercase tracking-wider text-stone-400 border-b border-stone-100">
                  <th className="px-8 py-4 font-bold">Order ID</th>
                  <th className="px-8 py-4 font-bold">Restaurant</th>
                  <th className="px-8 py-4 font-bold">Customer</th>
                  <th className="px-8 py-4 font-bold">Status</th>
                  <th className="px-8 py-4 font-bold">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentOrders.length === 0 ? (
                  <tr><td colSpan="5" className="px-8 py-8 text-center text-stone-500 font-medium">No recent orders found in database.</td></tr>
                ) : (
                  recentOrders.map((order) => (
                    <tr key={order.order_id} className="border-b border-stone-50 hover:bg-stone-50/50 transition">
                      <td className="px-8 py-5 font-bold text-stone-900">#{order.order_id}</td>
                      <td className="px-8 py-5 text-stone-600">{order.restaurant_name}</td>
                      <td className="px-8 py-5 text-stone-600">{order.customer_name}</td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase inline-block
                          ${order.status === 'PENDING' ? 'bg-stone-100 text-stone-600' : ''}
                          ${order.status === 'PREPARING' ? 'bg-yellow-100 text-yellow-800' : ''}
                          ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' : ''}
                          ${order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : ''}
                        `}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 font-bold text-[#3e2723]">₹{order.total_amount}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AdminDashboard;