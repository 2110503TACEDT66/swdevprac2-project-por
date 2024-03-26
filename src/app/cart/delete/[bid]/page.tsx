'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import deleteBooking from '@/libs/deleteBooking';
import styles from './delete.module.css'

export default function MyBookingDeletePage({ params }: { params: { bid: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteBooking(params.bid);
      router.push('/cart?deleted=true');
    } catch (error) {
      console.error('Error deleting booking:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={`${styles.main} flex justify-center items-center`}>
      <div className="bg-stone-200 h-[120px] w-[550px] rounded-xl p-5 shadow-xl">
        <p className="items-center justify-center text-center text-2xl font-mono">Are you sure you want to delete?</p>
        <div className="flex justify-between mt-5">
          <button
            className="flex items-center justify-center w-2/5 text-md rounded-2xl bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white font-bold text-center shadow-sm"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Yes'}
          </button>
          <button
            className="flex items-center justify-center w-2/5 rounded-2xl bg-red-600 hover:bg-red-700 px-3 py-1 text-white font-bold text-center shadow-sm"
            onClick={() => router.push('/cart')}
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
