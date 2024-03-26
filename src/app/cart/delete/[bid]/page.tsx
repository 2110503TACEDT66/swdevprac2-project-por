'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import deleteBooking from '@/libs/deleteBooking';

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
  
    // State for confirmation
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    return (
      <main className='py-10'>
        {showConfirmation ? (
          <div>
            <p>Are you sure you want to delete?</p>
            <button
              className={`block rounded-md bg-red-500 hover:bg-red-600 px-3 py-1 text-white text-center shadow-sm`}
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? 'Deleting...' : 'Yes, Delete'}
            </button>
            <button
              className={`block rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white text-center shadow-sm ml-2`}
              onClick={() => setShowConfirmation(false)} // Cancel confirmation
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className={`block rounded-md bg-blue-500 hover:bg-blue-600 px-3 py-1 text-white text-center shadow-sm`}
            onClick={() => setShowConfirmation(true)} // Show confirmation dialog
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        )}
      </main>
    );
  }