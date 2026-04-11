import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  User 
} from 'firebase/auth';

const ADMIN_EMAIL = 'musclehed03@gmail.com'; // Change to your actual Google email

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  isAgeVerified: boolean;
  verifyAge: () => void;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAdmin: false,
  loading: true,
  isAgeVerified: false,
  verifyAge: () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const storedVerification = localStorage.getItem('dd_age_verified');
    if (storedVerification === 'true') {
      setIsAgeVerified(true);
    }

    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const verifyAge = () => {
    setIsAgeVerified(true);
    localStorage.setItem('dd_age_verified', 'true');
  };

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth) {
      console.error("Firebase is not configured. Cannot login.");
      alert("System Error: Database uplink offline. Missing configuration.");
      return;
    }
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' }); 
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        // User intentionally closed the popup or multiple popups were triggered. 
        // We can safely ignore this or show a mild notification.
        console.log('Authentication aborted by user.');
      } else {
        console.error('Authentication Protocol Failed:', error);
        alert(`Authentication Failed: ${error.message}`);
      }
    }
  };

  const logout = async () => {
    if (!isFirebaseConfigured || !auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout Protocol Failed:', error);
    }
  };

  const isAdmin = user?.email === ADMIN_EMAIL;

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, isAgeVerified, verifyAge, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
