import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useAdminApplications } from '../hooks/useAdminApplications';
import { useIsAdmin } from '../hooks/useIsAdmin';
import LoginButton from '../components/auth/LoginButton';
import { Loader2, ShieldAlert } from 'lucide-react';

export default function AdminApplicationsPage() {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading } = useIsAdmin();
  const { data: applications, isLoading: applicationsLoading } = useAdminApplications();

  // Show loading while checking authentication
  if (isInitializing || isAdminLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
          <p className="text-foreground/70">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!identity) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-md text-center">
          <ShieldAlert className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl font-bold tracking-wider mb-4 text-gold uppercase">Authentication Required</h1>
          <p className="text-foreground/70 mb-8">You must be logged in to access this page.</p>
          <LoginButton />
        </div>
      </div>
    );
  }

  // Show access denied if not admin
  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-md text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold tracking-wider mb-4 text-gold uppercase">Access Denied</h1>
          <p className="text-foreground/70 mb-8">You do not have permission to view this page.</p>
          <LoginButton />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold tracking-wider text-gold uppercase">Applications</h1>
          <LoginButton />
        </div>

        {applicationsLoading ? (
          <div className="text-center py-12">
            <Loader2 className="w-12 h-12 text-gold animate-spin mx-auto mb-4" />
            <p className="text-foreground/70">Loading applications...</p>
          </div>
        ) : !applications || applications.length === 0 ? (
          <div className="border border-gold/30 bg-black/60 backdrop-blur-sm p-12 text-center">
            <p className="text-lg text-foreground/70">No applications submitted yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {applications.map((app) => (
              <div key={app.id.toString()} className="border border-gold/30 bg-black/60 backdrop-blur-sm p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gold mb-1">
                      {app.firstName} {app.lastName}
                    </h2>
                    <p className="text-foreground/70">{app.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground/60">
                      {new Date(Number(app.timestamp) / 1000000).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                    <span
                      className={`inline-block mt-2 px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                        app.status === 'pending'
                          ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50'
                          : app.status === 'approved'
                            ? 'bg-green-500/20 text-green-500 border border-green-500/50'
                            : 'bg-red-500/20 text-red-500 border border-red-500/50'
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-4 space-y-3">
                  <div>
                    <p className="text-sm font-bold text-saffron uppercase mb-1">Bio</p>
                    <p className="text-foreground/80">{app.bio}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-saffron uppercase mb-1">Experience</p>
                    <p className="text-foreground/80">{app.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-saffron uppercase mb-1">Motivation</p>
                    <p className="text-foreground/80 whitespace-pre-wrap">{app.motivation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
