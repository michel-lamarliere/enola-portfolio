import React, { ReactNode } from "react";

import { Container } from "components/Container";

import styles from "pages/legal-notice/page/LegalNoticePage.module.scss";

type Props = {
  text: ReactNode | string;
};

const Heading = ({ text }: Props) => {
  return <div className={styles.heading}>{text}</div>;
};

const SubHeading = ({ text }: Props) => {
  return <div className={styles.subheading}>{text}</div>;
};

const Paragraph = ({ text }: Props) => {
  return <div className={styles.paragraph}>{text}</div>;
};

export const LegalNoticePage = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.title}>Mentions légales</div>
        <div className={styles.text}>
          <div className={styles.text_section}>
            <Heading text={"1. Présentation du site internet"} />
            <Paragraph
              text={
                <span className={styles.paragraph}>
                  En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
                  pour la confiance dans l’économie numérique, il est précisé
                  aux utilisateurs du site internet www.enolalouge.com
                  l’identité des différents intervenants dans le cadre de sa
                  réalisation et de son suivi:
                  <br />
                  <br />
                  Propriétaire : LOUGE ENOLA
                  <br />
                  <br /> Numéro de TVA : FR 22 898 798 285 – 31000 Toulouse{" "}
                  <br />
                  Responsable publication : Louge Enola – contact@enolalouge.com
                  <br />
                  <br /> Le responsable publication est une personne physique ou
                  une personne morale.
                  <br />
                  <br /> Webmaster : Lamarlière Michel -
                  michel.lamarliere@icloud.com
                  <br />
                  <br /> Hébergeur : Hostinger – IP : 109.106.246.58 6023 Cyprus
                  415-624-8380
                  <br />
                  <br /> Délégué à la protection des données : Louge Enola –
                  enola.louge@icloud.com
                </span>
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading
              text={
                "2. Conditions générales d’utilisation du site et des services proposés"
              }
            />
            <Paragraph
              text={
                "Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou partie des éléments ou travaux du Site. L’utilisation du site www.enolalouge.com implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site www.enolalouge.com sont donc invités à les consulter de manière régulière. Ce site internet est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par www.enolalouge.com, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le site web www.enolalouge.com est mis à jour régulièrement par www.enolalouge.com responsable. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading text={"3. Description des services fournis"} />
            <Paragraph
              text={
                "Le site internet www.enolalouge.com a pour objet de fournir une information concernant l’ensemble des activités de la société. www.enolalouge.com s’efforce de fournir sur le site www.enolalouge.com des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. Toutes les informations indiquées sur le site www.enolalouge.com sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site www.enolalouge.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading
              text={"4. Limitations contractuelles sur les données techniques"}
            />
            <Paragraph
              text={
                "Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour. Le site www.enolalouge.com est hébergé chez un prestataire sur le territoire de l’Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679) L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité. L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement pour les durées les plus courtes possibles notamment à des fins de maintenance, d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les Prestations et Services génèrent un trafic réputé anormal. www.enolalouge.com et l’hébergeur ne pourront être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes téléphoniques ou du matériel informatique et de téléphonie lié notamment à l’encombrement du réseau empêchant l’accès au serveur."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading text={"5. Propriété intellectuelle et contrefaçons"} />
            <Paragraph
              text={
                "www.enolalouge.com est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de www.enolalouge.com. Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading text={"6. Limitations de responsabilité"} />
            <Paragraph
              text={
                "www.enolalouge.com agit en tant qu’éditeur du site. www.enolalouge.com est responsable de la qualité et de la véracité du Contenu qu’il publie. www.enolalouge.com ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site internet www.enolalouge.com, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité. www.enolalouge.com ne pourra également être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site www.enolalouge.com. Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. www.enolalouge.com se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, www.enolalouge.com se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …)."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading text={"7. Gestion des données personnelles"} />
            <Paragraph
              text={
                "Le Client est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)."
              }
            />
            <SubHeading
              text={"7.1 Responsables de la collecte des données personnelles"}
            />
            <Paragraph
              text={
                "Pour les Données Personnelles collectées dans le cadre de la création du compte personnel de l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles est : LOUGE ENOLA. www.enolalouge.com est représenté par Louge Enola, son représentant légal. En tant que responsable du traitement des données qu’il collecte, www.enolalouge.com s’engage à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à partir de la collecte de leurs consentements, une information complète sur le traitement de leurs données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque fois que www.enolalouge.com traite des Données Personnelles, www.enolalouge.com prend toutes les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles au regard des finalités pour lesquelles www.enolalouge.com les traite."
              }
            />
            <SubHeading text={"7.2 Finalité des données collectées"} />
            <Paragraph
              text={
                "www.enolalouge.com est susceptible de traiter tout ou partie des données : - pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique des commandes, etc. - pour prévenir et lutter contre la fraude informatique (spamming, hacking…) : matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe - pour améliorer la navigation sur le Site : données de connexion et d’utilisation - pour mener des enquêtes de satisfaction facultatives sur www.enolalouge.com - pour mener des campagnes de communication (sms, mail) : numéro de téléphone, adresse email www.enolalouge.com ne commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des fins statistiques et d’analyses."
              }
            />
            <SubHeading
              text={"7.3 Droit d’accès, de rectification et d’opposition"}
            />
            <Paragraph
              text={
                "Conformément à la réglementation européenne en vigueur, les Utilisateurs de www.enolalouge.com disposent des droits suivants : - droit d’accès (article 15 RGPD) et de rectification (article 16 RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l’utilisation, la communication ou la conservation est interdite - droit de retirer à tout moment un consentement (article 13-2c RGPD) - droit à la limitation du traitement des données des Utilisateurs (article 18 RGPD) - droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) - droit à la portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) - droit de définir le sort des données des Utilisateurs après leur mort et de choisir à qui www.enolalouge.com devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement désigné Dès que www.enolalouge.com a connaissance du décès d’un Utilisateur et à défaut d’instructions de sa part, www.enolalouge.com s’engage à détruire ses données, sauf si leur conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale. Si l’Utilisateur souhaite savoir comment www.enolalouge.com utilise ses Données Personnelles, demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter www.enolalouge.com par écrit à l’adresse suivante : LOUGE ENOLA – DPO, Louge Enola 1 Rue Pharaon 31000 Toulouse. Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il souhaiterait que www.enolalouge.com corrige, mette à jour ou supprime, en s’identifiant précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport). Les demandes de suppression de Données Personnelles seront soumises aux obligations qui sont imposées à www.enolalouge.com par la loi, notamment en matière de conservation ou d’archivage des documents. Enfin, les Utilisateurs de www.enolalouge.com peuvent déposer une réclamation auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes)."
              }
            />
            <SubHeading
              text={"7.4 Non-communication des données personnelles"}
            />
            <Paragraph
              text={
                "www.enolalouge.com s’interdit de traiter, héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer préalablement le client. Pour autant, www.enolalouge.com reste libre du choix de ses sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). www.enolalouge.com s’engage à prendre toutes les précautions nécessaires afin de préserver la sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations du Client est portée à la connaissance de www.enolalouge.com, celle-ci devra dans les meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par ailleurs www.enolalouge.com ne collecte aucune « données sensibles ». Les Données Personnelles de l’Utilisateur peuvent être traitées par des filiales de www.enolalouge.com et des sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la présente politique. Dans la limite de leurs attributions respectives et pour les finalités rappelées ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de www.enolalouge.com sont principalement les agents de notre service client."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading text={"8. Notification d’incident"} />
            <Paragraph
              text={
                "Quels que soient les efforts fournis, aucune méthode de transmission sur Internet et aucune méthode de stockage électronique n’est complètement sûre. Nous ne pouvons en conséquence pas garantir une sécurité absolue. Si nous prenions connaissance d’une brèche de la sécurité, nous avertirions les utilisateurs concernés afin qu’ils puissent prendre les mesures appropriées. Nos procédures de notification d’incident tiennent compte de nos obligations légales, qu’elles se situent au niveau national ou européen. Nous nous engageons à informer pleinement nos clients de toutes les questions relevant de la sécurité de leur compte et à leur fournir toutes les informations nécessaires pour les aider à respecter leurs propres obligations réglementaires en matière de reporting. Aucune information personnelle de l’utilisateur du site www.enolalouge.com n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de www.enolalouge.com et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site www.enolalouge.com. Pour assurer la sécurité et la confidentialité des Données Personnelles et des Données Personnelles de Santé, www.enolalouge.com utilise des réseaux protégés par des dispositifs standards tels que par pare-feu, la pseudonymisation, l’encryption et mot de passe. Lors du traitement des Données Personnelles, www.enolalouge.com prend toutes les mesures raisonnables visant à les protéger contre toute perte, utilisation détournée, accès non autorisé, divulgation, altération ou destruction."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading
              text={
                "9. Liens hypertextes « cookies » et balises (“tags”) internet"
              }
            />
            <Paragraph
              text={
                "Le site www.enolalouge.com contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de www.enolalouge.com. Cependant, www.enolalouge.com n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait. Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés par le site."
              }
            />
            <SubHeading text={"9.1. « COOKIES"} />
            <Paragraph
              text={
                "Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur, smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur. www.enolalouge.com est susceptible de traiter les informations de l’Utilisateur concernant sa visite du Site, telles que les pages consultées, les recherches effectuées. Ces informations permettent à www.enolalouge.com&gt; d’améliorer le contenu du Site, de la navigation de l’Utilisateur. Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal. www.enolalouge.com informe l’Utilisateur que, dans ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas toutes disponibles. Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur, ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait également être le cas lorsque www.enolalouge.com ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité technique, le type de navigateur utilisé par le terminal, les paramètres de langue et d’affichage ou le pays depuis lequel le terminal semble connecté à Internet. Le cas échéant, www.enolalouge.com décline toute responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des services éventuellement proposés par www.enolalouge.com, résultant (i) du refus de Cookies par l’Utilisateur (ii) de l’impossibilité pour &lt; www.enolalouge.com d’enregistrer ou de consulter les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies. À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits en matière de Cookies. www.enolalouge.com pourra en outre faire appel aux services de prestataires externes pour l’aider à recueillir et traiter les informations décrites dans cette section. Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook, Linkedin et Google Plus figurant sur le Site de www.enolalouge.com ou dans son application mobile et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le Site Internet ou l’application mobile de www.enolalouge.com, Twitter, Facebook, Linkedin et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur, tablette, téléphone portable). Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile de www.enolalouge.com&gt;. À tout moment, l’Utilisateur peut néanmoins revenir sur son consentement à ce que www.enolalouge.com dépose ce type de cookies."
              }
            />
            <SubHeading text={"9.2. BALISES (“TAGS”) INTERNET"} />
            <Paragraph
              text={
                "www.enolalouge.com peut employer occasionnellement des balises Internet (également appelées « tags », ou balises d’action, GIF à un pixel, GIF transparents, GIF invisibles et GIF un à un) et les déployer par l’intermédiaire d’un partenaire spécialiste d’analyses Web susceptible de se trouver (et donc de stocker les informations correspondantes, y compris l’adresse IP de l’Utilisateur) dans un pays étranger. Ces balises sont placées à la fois dans les publicités en ligne permettant aux internautes d’accéder au Site, et sur les différentes pages de celui-ci. Cette technologie permet à www.enolalouge.com d’évaluer les réponses des visiteurs face au Site et l’efficacité de ses actions (par exemple, le nombre de fois où une page est ouverte et les informations consultées), ainsi que l’utilisation de ce Site par l’Utilisateur. Le prestataire externe pourra éventuellement recueillir des informations sur les visiteurs du Site et d’autres sites Internet grâce à ces balises, constituer des rapports sur l’activité du Site à l’attention de www.enolalouge.com, et fournir d’autres services relatifs à l’utilisation de celui-ci et d’Internet."
              }
            />
          </div>
          <div className={styles.text_section}>
            <Heading
              text={"10. Droit applicable et attribution de juridiction"}
            />
            <Paragraph
              text={
                "Tout litige en relation avec l’utilisation du site www.enolalouge.com est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Toulouse."
              }
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
