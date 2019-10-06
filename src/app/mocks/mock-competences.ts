import { Competence } from '../model/Competence';


export const COMPETENCES: Competence[] = [
    {
        titre: "Bonjour",
        paragraphes : [
            "Pour toute question ou besoin de renseignement supplémentaire contactez-moi à l'adresse mail : maelle.manifacier@hotmail.fr",
            "",
            "",
            "Ce portfolio a été réalisé avec le framework Angular.",
            "",
            "(Pour avoir plus de détails sur mon dernier stage, voir la section Golang)",
            "",
            "",
            "",
            "« to err is human but to really foul things up you need a computer »",
            "Paul R. Ehrli"
        ]
    },
    {
        titre : "C# / XAML",
        paragraphes : [
            "Période :",
            "De avril à juin 2018",
            "",
            "Langages :",
            "C#   XAML",
            "",
            "Résumé :",
            "",
            "Pendant ma première année à l’IUT, par groupes de deux pendant deux mois, nous avons eu pour projet de développer une application de bureau en utilisant les langages C# pour la gestion des données et XAML pour l’apparence de l’application. (Nous avons aussi utilisé Visual Studio et SVN avec la forge, qui nous ont servis à gérer notre code.)",
            "Cette application devait obligatoirement présenter un master detail ainsi que différentes contraintes comme la gestion de la persistance.",
            ""
        ]
    },
    {
        titre : "Angular / ASP.NET",
        paragraphes : [
            "Période :",
            "De décembre 2018 à mars 2019",
            "",
            "Langages :",
            "C#   SQL   TypeScript   HTML   CSS",
            "",
            "Résumé :",
            "",
            "Pendant ma deuxième année à l’IUT nous avons eu le choix d’un thème pour réaliser un projet d’une durée de quatre mois. Pour ce projet, nous avons choisi de développer une application web en rapport avec Harry Potter. Nous avons eu pour but de réaliser une application « complète », à savoir comprenant un front, une partie back et la gestion d’une base de données.",
            "",
            "Nous avons donc choisi d’utiliser le framework Angular pour réaliser le front, ASP.NET pour la gestion de l’API et du back, Entity Framework pour la connexion avec la base de données et SQL pour la base de données.",
            "",
            "Pour la gestion de ce projet nous avons utilisé GIT ainsi que différentes méthodes de gestion comme la méthode MoSCoW (Must have, Should have, Could have, Would have), qui permet de départager les tâches dans un ordre d’importance.",
            "",
            "",
            "Plus de détails :",
            "",
            "Pour ce projet j’ai surtout travaillé à la réalisation de la partie back et des tests de cette partie. Pour cela j’ai utilisé l’outil Swagger, qui permet de réaliser des requêtes http d’une façon légèrement semblable à Postman.",
            "",
            "La partie back se divise en quatre projets en C# : ",
            "L’API, qui va faire le lien entre le front et la gestion du back, est constituée des différents contrôleurs qui vont rediriger les requêtes http vers le Domain. Chaque contrôleur va utiliser les quatre types de routes : GET, PUT, POST et DELETE.",
            "Le Domain : contient les services, qui vont vérifier les données envoyées par l’API et faire les requêtes vers la base de données. Dans le domain nous allons trouver tout ce qui est nécessaire au fonctionnement de l’application, comme par exemple la récupération des utilisateurs ou leur création.",
            "Tous les contrôleurs et services vont utiliser la partie Contract qui contient les objets DTO (Data Transfer Objects), objets dits de « transport », qui vont servir d’intermédiaires entre les objets récupérés de la base de données et ceux utilisés dans la partie modèle de Angular. ",
            "Nous avons enfin la partie infrastructure dans laquelle nous allons trouver les objets tels qu’ils sont dans la base de données et le « data base context », qui va faire la connexion avec PhpMyAdmin et donc SQL.",
            ""
        ],
    },
    {
        titre : "Golang",
        paragraphes : [
            "Période : ",
            "Du 8 avril au 15 juin 2019",
            "",
            "Actuellement en stage à l’université de Cork, en Irlande, je travaille sur le développement d’une infrastructure web pour du streaming avec l’utilisation de google GO en langage principal pour la partie client. La méthode MPEG-DASH est utilisée pour la découpe et l’envoi des segments des médias.",
            "",
            "Cette infrastructure doit permettre à un client de télécharger une vidéo depuis un serveur de façon automatisée, en ajustant automatiquement la taille et qualité des segments du média téléchargés en fonction du débit calculé côté client.",
            "",
            "J’ai commencé mon stage le 8 avril (2019) et ai eu l’occasion de commencer l’application côté client, à partir de rien. Nous sommes trois à travailler sur ce projet. Nous avons actuellement une version stable (0.5), qui permet de télécharger les segments d’une URL demandée en prenant en compte différents paramètre (comme un buffer maximal, ou l’une des méthodes d’adaptation, qui sont différents moyens de calculer la meilleure qualité à demander au serveur en n’ayant aucun temps d’attente entre les téléchargements)."
        ]
    },
    {
        titre: "Android",
        paragraphes : [
            "Ce projet d’une durée de deux mois a été réalisé par groupes de deux et avait pour but de développer une application Android avec un thème libre mais différentes contraintes.",
            "",
            " Mon binôme et moi avions choisi de faire une application type bibliothèque contenant des histoires interactives dans lesquelles le joueur pourrait lire le texte de la page du « livre » avant de faire un choix.",
            "",
            "Les différentes contraintes que nous avons implémenté étaient de faire une application qui utiliserait l’une des fonctionnalités d’un téléphones (dans notre cas la caméra, à la création du joueur), nous devions développer en utilisant le SDK le plus bas possible, de manière à ce que l’application soit accessible du plus grand nombre ; savoir coder notre propre adaptateur pour l’affichage d’une liste, savoir gérer une collection de données, gérer les permissions de l’application, son cycle de vie, avoir un métier bien séparé de la vue et du modèle et savoir gérer la persistance, à savoir dans notre cas la description des histoires dans des fichiers json."
        ]
    },
    {
        titre: "Myo et Ollie",
        paragraphes : [
            "Le but de ce projet était de créer, (en deux mois et par groupes de deux), une application android permettant de faire le lien entre un bracelet connecté et un petit robot.",
            "",
            "Le bracelet connecté est un \"Myo\" : a gesture control armbrand :",
            "https://support.getmyo.com/hc/en-us/articles/203398347-Getting-started-with-your-Myo-armband",
            "",
            "Le robot utilisé est un robot \"Ollie Sphero\" : ",
            "https://www.sphero.com/ollie",
            "",
            "Lien vers le projet : ",
            "https://github.com/MaelManifacier/MyOllie"
        ]
    }
]
