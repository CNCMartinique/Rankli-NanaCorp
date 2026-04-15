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
