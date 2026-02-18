import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Application } from '../backend';

interface UseAdminApplicationsOptions {
  enabled?: boolean;
}

export function useAdminApplications(options: UseAdminApplicationsOptions = {}) {
  const { actor, isFetching: actorFetching } = useActor();
  const { enabled = true } = options;

  return useQuery<Application[]>({
    queryKey: ['adminApplications'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        const apps = await actor.getApplications();
        // Sort by timestamp descending (most recent first)
        return apps.sort((a, b) => {
          if (a.timestamp > b.timestamp) return -1;
          if (a.timestamp < b.timestamp) return 1;
          return 0;
        });
      } catch (error: any) {
        // Handle authorization errors gracefully
        if (error.message && error.message.includes('Unauthorized')) {
          throw new Error('You do not have permission to view applications.');
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching && enabled,
    retry: false,
  });
}
