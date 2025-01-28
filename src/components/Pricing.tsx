export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Pricing
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mb-6">
            Get unlimited access to PDF_SUM with a one-time payment of just{" "}
            <span className="font-semibold text-gray-800">₹250</span>.
          </p>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
