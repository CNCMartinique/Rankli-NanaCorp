# DOCS

## Structure repérée
- Le site est une page Next.js unique dans `src/app/page.tsx`.
- Les offres `Audit Express`, `Starter` et `Boost` sont définies dans le tableau `plans`.
- Les CTA du header et du hero sont aussi dans `src/app/page.tsx`.
- La section de contact utilisateur est le bloc CTA vert en bas de page, désormais identifié par `id="contact"`.

## Changements du 2026-04-15
- Ajout de la constante `STRIPE_PAYMENT_URL` dans `src/app/page.tsx`.
- Les CTA des offres `Starter` et `Boost` pointent maintenant vers le lien Stripe actif.
- Les CTA d'audit gratuit (`Audit Express`, header, hero) pointent vers `#contact`.
- L'ancre `#contact` a été déplacée sur la section CTA verte pour éviter le doublon avec le footer.

## Vérification du 2026-04-15
- `npm install --no-package-lock` puis `npm run build` ont réussi localement.
- Après le push sur `main`, le HTML servi par `https://rankli-nana-corp.vercel.app` contient bien l'URL Stripe et les liens `#contact`.
- `agent-browser` est disponible dans l'environnement, mais aucun binaire Chrome/Chromium n'était installé pour un contrôle visuel headless.

## Changements du 2026-04-15 (audit page)
- Ajout de `src/app/audit/page.tsx` : page de lead capture pour l'Audit Express Gratuit.
  - Formulaire : Nom de l'entreprise, URL Google Maps, Email, Téléphone
  - On submit : POST vers `/api/audit-request`
  - Message de confirmation après envoi réussi
- Ajout de `src/app/api/audit-request/route.ts` : enregistre les leads dans la table PostgreSQL `audit_leads`.
  - Dépendance ajoutée : `pg` + `@types/pg`
- `src/app/page.tsx` : tous les CTA "audit gratuit" (header, hero, pricing card Audit Express, section CTA verte) pointent maintenant vers `/audit` au lieu de `#contact`.
- Build vérifié OK localement, pushé sur `main`.

## Changements du 2026-04-15 (SEO & Favicon)
- `public/favicon.svg` : favicon SVG vert (#10b981) avec les lettres "RL" en blanc.
- `public/favicon.ico` : favicon ICO 32x32 généré programmatiquement (même style).
- `src/app/layout.tsx` : meta tags SEO mis à jour :
  - `title` → "Rankli — Optimisation Google Business Profile en Martinique"
  - `description` → texte SEO Martinique/GBP/IA
  - `keywords` → SEO local Martinique, Google Business Profile Martinique, etc.
  - `og:title` → "Rankli — SEO Local Automatisé en Martinique"
  - `og:description` → texte court avec prix
  - Référencement favicon via Next.js `metadata.icons` + balises `<link>` explicites dans `<head>`
- `public/sitemap.xml` : sitemap avec `/` (priority 1.0) et `/audit` (priority 0.8).
- `public/robots.txt` : `Allow: /` + référence au sitemap.
- Pushé sur `main` → déploiement Vercel automatique.

## Investigation du 2026-04-16 (liaison `rankli.nanocorp.app` -> Vercel)
- Vérification HTTP :
  - `https://rankli.nanocorp.app` sert toujours le placeholder "Coming Soon".
  - `https://rankli-nana-corp.vercel.app` sert bien le vrai site Rankli.
- Vérification NanoCorp CLI :
  - `nanocorp vercel --help` n'expose que `env list` et `env set`.
  - `nanocorp vercel env list` renvoie `{"success":false,"error":"Vercel project not provisioned"}`.
  - En mode debug, la commande passe par l'outil backend `list_vercel_env_vars`.
  - L'exploration du binaire `nanocorp` ne montre que deux outils Vercel internes : `list_vercel_env_vars` et `set_vercel_env_vars`. Aucun outil visible de type `link/connect/provision domain`.
- Vérification Vercel API :
  - Le projet `prj_K0lOtdj3KIvnaup6hmKjjxzgPyYu` existe et déploie correctement depuis GitHub (`CNCMartinique/Rankli-NanaCorp`).
  - Les déploiements récents du 2026-04-15 sont tous `READY` en production.
  - Le domaine `rankli.nanocorp.app` est bien ajouté au projet, mais `verified: false`.
  - Vercel attend le TXT suivant : `_vercel.nanocorp.app = "vc-domain-verify=rankli.nanocorp.app,f6add25180041238056d"`.
  - Un `POST /verify` renvoie `missing_txt_record`.
- Vérification DNS publique :
  - `rankli.nanocorp.app` résout actuellement vers `172.67.152.139` et `104.21.12.146` (Cloudflare).
  - Aucun `CNAME` public pour `rankli.nanocorp.app`.
  - Aucun `TXT` public pour `_vercel.nanocorp.app`.
- Conclusion :
  - Le blocage n'est pas un problème de build ou de redéploiement Vercel.
  - Le blocage est côté NanoCorp/DNS : le domaine NanoCorp n'est pas provisionné/légué à ce projet Vercel, et le TXT de vérification requis par Vercel n'existe pas.
  - Tant que NanoCorp n'ajoute pas le TXT `_vercel.nanocorp.app` demandé par Vercel et ne route pas `rankli.nanocorp.app` vers ce projet, `rankli.nanocorp.app` ne pourra pas servir le site live.

## Investigation du 2026-04-17 (admin leads)
- Structure App Router minimale :
  - `src/app/api/audit-request/route.ts` gérait déjà l'insertion des leads.
  - `src/app` ne contenait pas encore de route `/admin` ni de helper DB partagé.
- Vérification base locale via `DATABASE_URL` :
  - La relation `audit_leads` n'existait pas encore sur l'environnement courant au moment de l'exploration.
  - Conséquence : la lecture admin doit être tolérante et créer la table si nécessaire, comme le POST existant.

## Changements du 2026-04-17 (admin leads)
- Ajout de `src/lib/audit-leads.ts` :
  - centralise la connexion PostgreSQL via `pg`
  - garantit `CREATE TABLE IF NOT EXISTS audit_leads`
  - expose `createAuditLead()` et `getAuditLeads()` avec tri `created_at DESC`
- `src/app/api/audit-request/route.ts` :
  - réutilise désormais `createAuditLead()` au lieu d'embarquer le SQL inline
- Ajout de `src/app/api/admin/leads/route.ts` :
  - route `GET /api/admin/leads`
  - renvoie `{ leads, total }` en JSON
- Ajout de `src/app/admin/leads/page.tsx` :
  - page admin serveur `/admin/leads`
  - affiche le total de leads
  - tableau simple avec Date, Nom entreprise, Email, Téléphone, URL Google Maps
  - état vide si aucun lead
  - rendu dynamique pour refléter les nouvelles soumissions

## Vérification du 2026-04-17 (admin leads)
- `npm install --no-package-lock` réussi.
- `npm run build` réussi.
- `npm start` puis contrôle HTTP local :
  - `GET /api/admin/leads` renvoie `{"leads":[],"total":0}` sur l'environnement courant.
  - `GET /admin/leads` sert bien la page admin avec compteur et état vide.
