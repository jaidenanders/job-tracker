import { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

function TestFirebase() {
  const [status, setStatus] = useState('Testing Firebase connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test Firestore
        const testCollection = collection(db, 'test');
        await getDocs(testCollection);
        
        // Test Auth
        const authUser = auth.currentUser;
        
        setStatus('✅ Firebase connected successfully!');
      } catch (error) {
        setStatus('❌ Firebase connection failed: ' + error.message);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-lg">{status}</p>
    </div>
  );
}

export default TestFirebase;