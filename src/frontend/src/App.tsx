import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import HeaderNav from './components/site/HeaderNav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import MembershipPage from './pages/MembershipPage';
import RitualPhilosophyPage from './pages/RitualPhilosophyPage';
import ApplyPage from './pages/ApplyPage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import { ROUTES } from './utils/routes';

function Layout() {
  // Generate referral link safely (guard against SSR/build-time execution)
  const getReferralLink = () => {
    if (typeof window === 'undefined') {
      return 'https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=richual';
    }
    const appId = encodeURIComponent(window.location.hostname || 'richual');
    return `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <HeaderNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border/20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} RICHUAL. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Built with ❤️ using{' '}
              <a
                href={getReferralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.HOME,
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.ABOUT,
  component: AboutPage,
});

const programsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.PROGRAMS,
  component: ProgramsPage,
});

const membershipRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.MEMBERSHIP,
  component: MembershipPage,
});

const ritualPhilosophyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.RITUAL_PHILOSOPHY,
  component: RitualPhilosophyPage,
});

const applyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.APPLY,
  component: ApplyPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.ADMIN_APPLICATIONS,
  component: AdminApplicationsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  programsRoute,
  membershipRoute,
  ritualPhilosophyRoute,
  applyRoute,
  adminRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
