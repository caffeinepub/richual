import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import type { Application } from '../backend';

export function useAdminApplications() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<Application[]>({
    queryKey: ['adminApplications'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      const apps = await actor.getApplications();
      // Sort by timestamp descending (most recent first)
      return apps.sort((a, b) => {
        if (a.timestamp > b.timestamp) return -1;
        if (a.timestamp < b.timestamp) return 1;
        return 0;
      });
    },
    enabled: !!actor && !!identity && !actorFetching,
    retry: false,
  });
}
