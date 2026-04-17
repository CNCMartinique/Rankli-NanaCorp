export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  date: string;
  readingTime: string;
  excerpt: string;
  sections: BlogSection[];
};

export type BlogSection = {
  id: string;
  heading?: string;
  level?: 2 | 3;
  paragraphs: string[];
  listItems?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "comment-optimiser-google-business-profile-martinique",
    title: "Comment optimiser votre Google Business Profile en Martinique (Guide 2025)",
    metaTitle: "Comment optimiser Google Business Profile en Martinique | Guide 2025",
    metaDescription:
      "Guide complet pour optimiser votre fiche Google en Martinique. Photos, avis, horaires, posts... Obtenez plus de clients locaux avec notre méthode éprouvée.",
    keywords: [
      "Google Business Profile Martinique",
      "optimiser fiche Google Martinique",
      "SEO local Martinique",
    ],
    date: "2025-04-17",
    readingTime: "8 min",
    excerpt:
      "Votre fiche Google Business Profile est souvent la première impression que les clients ont de votre entreprise. Découvrez comment l'optimiser pour dominer les recherches locales en Martinique.",
    sections: [
      {
        id: "introduction",
        heading: undefined,
        paragraphs: [
          "En Martinique, quand un habitant de Fort-de-France cherche un plombier, un restaurant ou un garage, il tape sa requête sur Google — et il clique sur l'un des trois premiers résultats locaux qui apparaissent dans le \"Local Pack\". Si votre entreprise n'y figure pas, c'est un client perdu au profit de votre concurrent.",
          "Le Google Business Profile (anciennement Google My Business) est l'outil gratuit qui vous permet d'apparaître dans ces résultats. Mais créer une fiche ne suffit pas : une fiche bien optimisée obtient en moyenne 7 fois plus de clics qu'une fiche incomplète. Dans ce guide, nous vous expliquons pas à pas comment tirer le meilleur parti de votre profil pour attirer plus de clients locaux en Martinique.",
          "Que vous soyez restaurateur à Fort-de-France, garagiste au Lamentin, médecin à Le François ou commerçant au Marin, ces conseils s'appliquent directement à votre activité.",
        ],
      },
      {
        id: "informations-de-base",
        heading: "1. Compléter les informations de base de votre fiche",
        level: 2,
        paragraphs: [
          "La première étape — et souvent la plus négligée — consiste à remplir intégralement toutes les informations de votre profil. Google favorise les fiches complètes dans ses résultats. Une fiche à 100 % de complétion est directement corrélée à un meilleur positionnement.",
        ],
        listItems: [
          "Nom de l'entreprise : Utilisez le nom exact tel qu'il apparaît sur votre enseigne ou vos documents officiels. N'ajoutez pas de mots-clés artificiels (ex. : évitez \"Garage Dupont — Meilleur Garage Martinique\") — Google peut suspendre votre fiche pour cette pratique.",
          "Adresse et zone de service : Si vous intervenez à domicile (plombier, électricien, livraison), configurez une zone de service plutôt qu'une adresse fixe. Couvrez les communes de Martinique où vous opérez réellement.",
          "Numéro de téléphone local : Privilégiez un numéro martiniquais (0596...) qui inspire confiance aux clients locaux.",
          "Horaires d'ouverture : Gardez-les à jour, surtout pendant les jours fériés et les fêtes locales comme le Carnaval ou la Fête du Travail. Une fiche avec des horaires incorrects génère de la frustration et de mauvais avis.",
          "Catégorie principale et catégories secondaires : Choisissez la catégorie qui décrit le mieux votre activité principale (ex. : \"Restaurant créole\", \"Garage automobile\", \"Cabinet médical\"). Ajoutez des catégories secondaires pertinentes.",
          "Description de l'entreprise : Rédigez un texte de 750 caractères maximum qui intègre naturellement vos mots-clés locaux (\"restaurant Fort-de-France\", \"garage Lamentin\", etc.) tout en décrivant ce qui vous rend unique.",
          "Site web et attributs : Renseignez votre URL et cochez les attributs applicables (\"Accessible aux personnes à mobilité réduite\", \"Paiement par carte\", \"Parking disponible\", etc.).",
        ],
      },
      {
        id: "photos",
        heading: "2. Ajouter des photos de qualité — un levier souvent sous-estimé",
        level: 2,
        paragraphs: [
          "Les photos sont l'un des facteurs les plus impactants sur l'engagement des visiteurs. Selon Google, les fiches avec photos reçoivent 42 % de requêtes d'itinéraire en plus et 35 % de clics vers le site web en plus. En Martinique, où l'économie repose en grande partie sur la recommandation et le bouche-à-oreille, montrer votre établissement inspire confiance.",
          "Voici ce que vous devez publier comme photos :",
        ],
        listItems: [
          "Photo de couverture (1332 x 750 px minimum) : choisissez une image professionnelle et reconnaissable — l'extérieur de votre établissement, votre équipe ou votre produit phare.",
          "Photo de profil (logo ou photo de l'établissement) : elle apparaît dans les résultats Google Maps et doit être nette.",
          "Photos de l'intérieur : pour un restaurant de Fort-de-France, montrez la salle décorée, l'ambiance locale, les tables dressées. Pour un garage du Lamentin, montrez l'atelier propre et organisé.",
          "Photos des produits ou services : plats du menu pour un restaurant, véhicules réparés pour un garage, produits en rayon pour un commerce.",
          "Photos de l'équipe : les clients martiniquais apprécient le contact humain — mettre en avant votre équipe renforce la proximité.",
          "Mises à jour régulières : ajoutez au moins 1 à 2 nouvelles photos par mois. Google valorise les fiches actives.",
        ],
      },
      {
        id: "avis-clients",
        heading: "3. Gérer les avis clients : demander, répondre, fidéliser",
        level: 2,
        paragraphs: [
          "Les avis Google sont le deuxième facteur le plus important pour le référencement local, après la pertinence de la fiche. Une entreprise avec 50 avis à 4,5 étoiles sera quasi-systématiquement mieux classée qu'une concurrente avec 5 avis à 5 étoiles.",
          "En Martinique, la culture du bouche-à-oreille est très forte. Les clients satisfaits ont l'habitude de recommander leurs bonnes adresses — il suffit souvent de leur demander de le faire en ligne.",
        ],
        listItems: [
          "Demandez des avis proactivement : après chaque prestation ou achat, envoyez un SMS ou un message WhatsApp avec le lien direct vers votre page de dépôt d'avis Google. La plupart des gens ne laissent pas d'avis spontanément, mais acceptent volontiers si on leur facilite la démarche.",
          "Répondez à TOUS les avis : aux positifs comme aux négatifs. Remerciez les clients satisfaits en personnalisant votre réponse. Face aux avis négatifs, restez calme, présentez vos excuses si nécessaire et proposez une solution concrète — cela montre votre professionnalisme aux futurs clients.",
          "N'achetez jamais de faux avis : Google détecte et supprime les avis frauduleux, et peut suspendre votre fiche définitivement.",
          "Ciblez un volume d'avis régulier : 2 à 4 nouveaux avis par mois sont plus efficaces qu'une campagne ponctuelle de 20 avis en une semaine.",
        ],
      },
      {
        id: "google-posts",
        heading: "4. Publier des Google Posts régulièrement",
        level: 2,
        paragraphs: [
          "Les Google Posts sont des publications visibles directement sur votre fiche Google Business Profile. Ils apparaissent dans les résultats de recherche et sur Google Maps, et permettent d'informer vos clients de vos actualités, offres et événements — sans qu'ils aient besoin de visiter votre site web.",
          "C'est un outil puissant et gratuit que la grande majorité des commerçants martiniquais n'exploitent pas encore. En l'utilisant régulièrement, vous prenez une longueur d'avance sur vos concurrents.",
          "Quelques idées de posts adaptés au contexte local :",
        ],
        listItems: [
          "Offres et promotions : \"Menu spécial Fête des Mères ce dimanche — Réservez dès maintenant\" (pour un restaurant de Fort-de-France).",
          "Nouveautés : \"Nous venons de recevoir les nouveaux modèles de climatiseurs Daikin — Demandez votre devis\" (pour un électricien du Robert).",
          "Événements locaux : participation à un marché artisanal, une foire agricole ou un événement communautaire.",
          "Actualités : fermeture exceptionnelle pour congés, nouveau service, nouveau membre de l'équipe.",
          "Contenu éducatif : \"3 signes que votre véhicule a besoin d'une révision avant le grand départ en vacances\" (pour un garage du Lamentin).",
          "Fréquence recommandée : au moins 1 post par semaine pour signaler une activité régulière à l'algorithme Google.",
        ],
      },
      {
        id: "suivi-positionnement",
        heading: "5. Le suivi du positionnement sur Google Maps",
        level: 2,
        paragraphs: [
          "Optimiser votre fiche est une chose — mesurer les résultats en est une autre. Beaucoup de commerçants martiniquais optimisent leur profil puis n'ont aucune idée de l'impact réel de leurs actions. Le suivi du positionnement vous permet de savoir où vous apparaissez dans les résultats Google Maps pour les requêtes clés de votre secteur.",
          "Voici comment suivre efficacement votre positionnement local :",
        ],
        listItems: [
          "Google Business Profile Insights : consultez régulièrement les statistiques natives de votre fiche — nombre de vues, d'appels, de demandes d'itinéraire, de clics vers le site. Ces données montrent l'évolution de votre visibilité.",
          "Recherches manuelles : tapez vos requêtes cibles (ex. : \"restaurant créole Fort-de-France\", \"garage voiture Lamentin\") depuis un smartphone en navigation privée pour voir où vous apparaissez.",
          "Outils spécialisés : des plateformes comme BrightLocal ou Local Falcon permettent de visualiser votre positionnement sur une carte de Martinique, commune par commune — très utile pour comprendre votre zone d'influence réelle.",
          "Alertes Google : configurez des alertes pour votre nom d'entreprise afin de suivre les mentions en ligne.",
          "Rapport mensuel : consignez vos positions clés une fois par mois pour mesurer la progression dans le temps et ajuster votre stratégie si nécessaire.",
        ],
      },
      {
        id: "conclusion",
        heading: "Conclusion : passez à l'action dès aujourd'hui",
        level: 2,
        paragraphs: [
          "Optimiser votre Google Business Profile n'est pas une action ponctuelle, c'est une discipline continue. Les commerçants martiniquais qui maintiennent une fiche complète, active et bien notée obtiennent systématiquement plus de visibilité et plus de clients que leurs concurrents.",
          "Si vous ne savez pas par où commencer, ou si vous souhaitez savoir où en est actuellement votre fiche, commencez par un audit gratuit de votre visibilité locale. En deux minutes, vous obtiendrez un diagnostic de votre présence sur Google et trois recommandations prioritaires personnalisées pour votre activité.",
          "Rankli est le spécialiste du SEO local en Martinique. Nous travaillons avec des restaurants de Fort-de-France, des garages du Lamentin, des médecins du François et des commerces de toute l'île pour les aider à dominer les recherches Google locales. Faites comme eux — commencez par voir où vous en êtes.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}
