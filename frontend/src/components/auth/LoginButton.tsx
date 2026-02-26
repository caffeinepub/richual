import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { LogIn, LogOut, Loader2 } from 'lucide-react';

export default function LoginButton() {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  const isAuthenticated = !!identity;
  const disabled = loginStatus === 'logging-in';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  return (
    <button
      onClick={handleAuth}
      disabled={disabled}
      className={`px-6 py-2.5 font-bold text-sm tracking-wider transition-all inline-flex items-center gap-2 ${
        isAuthenticated
          ? 'border-2 border-gold text-gold hover:bg-gold hover:text-black'
          : 'bg-gold text-black hover:bg-gold/90'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {disabled ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          LOGGING IN...
        </>
      ) : isAuthenticated ? (
        <>
          <LogOut className="w-4 h-4" />
          LOGOUT
        </>
      ) : (
        <>
          <LogIn className="w-4 h-4" />
          LOGIN
        </>
      )}
    </button>
  );
}
