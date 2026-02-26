import { useState } from 'react';
import { useActor } from './useActor';

interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  motivation: string;
  experience: string;
}

export function useSubmitApplication() {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitApplication = async (data: ApplicationData): Promise<boolean> => {
    if (!actor) {
      setError('Backend connection not available. Please refresh the page and try again.');
      return false;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await actor.submitApplication(
        data.firstName,
        data.lastName,
        data.email,
        data.bio,
        data.motivation,
        data.experience
      );
      return true;
    } catch (err: any) {
      console.error('Application submission error:', err);
      
      // Handle different error types gracefully
      let errorMessage = 'Failed to submit application. Please try again.';
      
      if (err.message) {
        if (err.message.includes('Unauthorized') || err.message.includes('trap')) {
          errorMessage = 'There was an authorization error. Please refresh the page and try again.';
        } else if (err.message.includes('network') || err.message.includes('connection')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitApplication,
    isSubmitting,
    error,
  };
}
