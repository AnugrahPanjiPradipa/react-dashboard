export default function LogoutModal({ onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold text-gray-800">Logout Confirmation</h2>
        <p className="text-sm text-gray-600 mt-2">Are you sure want to logout?</p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
            onClick={onConfirm}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
