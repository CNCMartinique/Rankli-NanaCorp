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
