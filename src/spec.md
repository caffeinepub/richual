# Specification

## Summary
**Goal:** Build the RICHUAL multi-page marketing website with a consistent dark luxury theme, an application-based membership flow, and an admin-only application review page.

**Planned changes:**
- Create top-level pages with persistent navigation: Home, About RICHUAL, Programs, Membership, Ritual Philosophy, Apply.
- Apply a consistent site-wide visual theme (matte black base, metallic gold accents, deep saffron highlights; bold uppercase headings; clean modern typography; minimal premium layout).
- Implement Home page with hero headline “Enter the Order.”, an “Apply for Membership” CTA routing to Apply, sections introducing the concept, four ranks, and discipline-code statements including Sanskrit terms (शक्ति, तपस्या, विकास).
- Implement About RICHUAL page explaining the philosophy and including Sanskrit terms (शक्ति, तपस्या, विकास).
- Implement Programs page with four rank sections/cards: Initiate, Warrior, Titan, Inner Circle (as ranks with concise descriptions).
- Implement Membership page emphasizing application-based entry, limited seats, and a CTA routing to Apply.
- Implement Ritual Philosophy page with structured sections: morning discipline, physical training, meditation, wealth focus, brotherhood.
- Implement Apply page form with fields (Name, Age, Current fitness level, Income goal, Why do you want to join?) and submit button “Begin Your Transformation.” with client-side validation and clear error messages.
- Add backend persistence for applications with methods to create an application and list applications (including id and timestamp).
- Wire Apply form submission to backend with loading/disabled submit state, success confirmation, and retryable error handling.
- Add an admin-only review page (not in public nav) protected by Internet Identity and a backend hardcoded allowlist of admin principals; list applications most-recent-first.
- Add and use generated static visual assets (smoke/embers texture, temple/stone texture background, and a simple RICHUAL emblem mark) from `frontend/public/assets/generated`.

**User-visible outcome:** Visitors can navigate the RICHUAL site, read about ranks and ritual philosophy, and submit an application via the Apply form; admins can log in with Internet Identity to privately review submitted applications.
