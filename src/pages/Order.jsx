import PageHeader from "../components/PageHeader";

export default function Orders() {
  // Generate 20 data JSON otomatis sesuai atribut di foto
  const orders = Array.from({ length: 20 }, (_, i) => ({
    orderId: `#ORD-${1000 + i}`,
    customerName: [
      "Andi Saputra", "Siti Aminah", "Budi Doremi", "Rina Nose", "Eko Prasetyo",
      "Dewi Lestari", "Fajar Ramadhan", "Gita Gutawa", "Hendra Wijaya", "Indah Permata"
    ][i % 10], // Mengulang nama agar variasi
    status: ["Pending", "Completed", "Cancelled"][Math.floor(Math.random() * 3)],
    totalPrice: `Rp ${(Math.floor(Math.random() * 20) + 5) * 10000}`,
    orderDate: `2026-04-${(i % 28) + 1}`
  }));

  return (
    <div className="p-6">
      <PageHeader />
      
      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <span className="text-sm text-gray-400">{orders.length} Total Data</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer Name</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Total Price</th>
                <th className="px-6 py-4">Order Date</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-blue-600">{order.orderId}</td>
                  <td className="px-6 py-4 text-gray-700">{order.customerName}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{order.totalPrice}</td>
                  <td className="px-6 py-4 text-gray-500">{order.orderDate}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-gray-400 hover:text-gray-600 font-bold px-2">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}