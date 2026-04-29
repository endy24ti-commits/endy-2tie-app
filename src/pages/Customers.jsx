import PageHeader from "../components/PageHeader";

export default function Customers() {
  // Generate 20 data JSON otomatis sesuai atribut di foto
  const customers = Array.from({ length: 20 }, (_, i) => ({
    customerId: `CUST-${2000 + i}`,
    customerName: [
      "Endi Irawan S", "Budi Santoso", "Siti Rahma", "Andi Wijaya", "Rina Maryam",
      "Faisal Hanif", "Dewi Sartika", "Guruh Soekarno", "Hani Syarifah", "Joko Anwar"
    ][i % 10],
    email: `customer${i + 1}@sedap.com`,
    phone: `0812-3456-78${i.toString().padStart(2, '0')}`,
    loyalty: ["Bronze", "Silver", "Gold"][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="p-6">

      <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Customer List</h2>
          <span className="text-sm text-gray-400">{customers.length} Total Registered</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Customer ID</th>
                <th className="px-6 py-4">Customer Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4 text-center">Loyalty</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-500">{user.customerId}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{user.customerName}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{user.phone}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      user.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-700' :
                      user.loyalty === 'Silver' ? 'bg-slate-100 text-slate-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {user.loyalty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-500 hover:underline text-sm">Edit</button>
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