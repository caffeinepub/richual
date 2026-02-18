# Specification

## Summary
**Goal:** Retry the previously failed build/deploy for the existing RICHUAL site, publish the updated live site, and verify core user and admin flows still work.

**Planned changes:**
- Retry the build/update to resolve the prior AI service error and successfully rebuild/redeploy the site.
- Smoke test all existing routes: `/`, `/about`, `/programs`, `/membership`, `/ritual-philosophy`, `/apply`, and `/admin/applications`.
- Verify end-to-end Apply submission persistence and admin review flow, including access restriction for non-admin users and most-recent-first ordering.

**User-visible outcome:** The RICHUAL site is live on the updated deployment, all listed pages load and navigate correctly, applications can be submitted successfully, and admins can review submissions while non-admins are blocked from the admin list.
