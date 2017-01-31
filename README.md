# iti-network

## Démarrage
- `WINDOWS SEULEMENT`: exécuter `npm install -g webpack webpack-dev-server typescript`
- exécuter `npm install` pour installer les modules
- exécuter `npm start` pour lancer le serveur de développement
- lancer le serveur node iti-network-server
- ouvrir chrome à l'adresse [`http://localhost:3000`](http://localhost:3000)

## Outils
- installer le plugin chrome [augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
- installer le plugin (VS CODE) [angular2-snipet](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- installer le plugin (VS CODE) [angular2-snipet](https://plugins.jetbrains.com/idea/plugin/8395-angular-2-typescript-live-templates)

## TP

### Login

#### Level I

1. Faire le formulaire de login [x]
2. Rendre username et le mot de passe obligatoire [x]
3. Rediriger l'utilisateur sur / [x]

#### Level II

4. Afficher les messages d'erreurs de validation pour chaque champs [x]
5. Afficher un message si le login à échoué [x]

### Register

#### Level I

1. Faire le formulaire pour l'ajout d'un user [x]
2. Rendre username et le mot de passe obligatoire [x]
3. En cas de succès, rediriger l'utilisateur sur /login [x]

#### Level II
4. Afficher les messages d'erreurs de validation  pour chaque champs [x]
5. Gérer les username déjà utilisés [x]


### Channel

#### Level I

1. Afficher la liste des channels dans le menu [x]
2. Pouvoir créer un nouveau channel [x]
3. Naviguer sur un channel au clic dans le menu [x]

#### Level II

4. Sélectionner par défaut le premier channel de la liste [x]
5. Ajouter les nouveaux channels dynamiquement [x]

### Post 

### Level I

1. Afficher les postes reçues pour le channel courant [x]
2. Afficher l'auteur des messages [x]
3. Afficher la date du postes [x]
4. Insérer les nouveaux postes reçues via WebSocket [x]
5. Afficher une image si le message contient une url vers une image [x]
6. Afficher une video si le message contient une url vers une vidéo (https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4) [x]
7. Afficher le player de youtube si le message contient un lien youtube [x]
8. Ajouter le bouton like [x]

### Level II
9. Retirer les urls des messages parsés pour ne restituer que son contenu [x]

### Level III
10. Pouvoir parser plusieurs type de contenus dans un seul poste
11. Remplacer les liens http par des balises <a>...</a>. [x]

### Commentaires

### Level I
1. Pouvoir commenter un postes [x]
2. Afficher les commentaires d'un poste [x]
3. Afficher l'auteur du commentaires [x]
4. Insérer les nouveaux commentaires reçues via WebSocket [x]

### Level II
5. Parser les commentaires comme les postes : extraire les images, vidéos... [x]

### Activités et notifications 

### Level I
1. Créer un NotificationService [x]
2. Lister les activités dans le menu à droite [x]
3. Ajouter une activité lors d'un nouveau poste via le NotificationService [x]
4. Ajouter une activité lors d'un commentaire sur un poste via le NotificationService [x]
5. Ajouter une activité lorsqu'un membre se connecte via le NotificationService [x]
6. Ajouter une activité lors d'un like via le NotificationService [x]
7. Ajouter une activité lors de l'ajout d'un channel via le NotificationService [x]

### Level II
8. Afficher une popup de notification avec [angular2-notifications](https://github.com/flauc/angular2-notifications) [x]
9. Persister les activités dans le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage) [x]

### Level III
10. utiliser [angular2-notifications](https://github.com/flauc/angular2-notifications) pour afficher des notifications avec chrome [x]
11. Si l'activité concerne un poste (nouveau poste, commentaire sur un poste, like d'un poste) rendre l'activité clicable. 
Le clic doit rediriger sur le bon channel et scroller jusqu'au poste concerné


### Reminder

- Tous les composants ajoutés doivent être réexportés dans src/app/components/index.ts
- les composants crées (via snipet) ne doivent pas avoir de moduleId
- documentation [angular](https://angular.io/docs/ts/latest/)
- tout service créé doit être ajouter au providers dans src/app/app.module.ts
