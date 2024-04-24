import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Dans les brumes de l'adversité, Léopold, éclat de bravoure,
Navigue avec courage, épris d'une autre lueur, d'une autre couleur.
Ses bras, jadis voiles sur les mers de la vie,
Sont désormais souvenirs, écho d'une lutte infinie.

Mais en lui, un feu sacré persiste, un chant d'espoir,
Qui transcende les limites, défie le noir.
Car Léopold, en son cœur, porte la force des Titans,
Dans chaque sourire, dans chaque pas, il construit son destin.

Bras ou non, il danse avec les étoiles,
Brave les tempêtes, embrasse les voiles.
Pour lui, la vie est un océan à naviguer,
Et chaque défi est un délice à embrasser.

Dans ce ballet de vie, Léopold, ton courage éblouit,
Ta force intérieure, un phare qui jamais ne faiblit.
Que chaque aurore te trouve fier et debout,
Dans ce poème, dans ce chant, résonne ton éclat, toujours.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Bien sûr, voici une éloge mettant en avant l'amour de Léopold pour le poulet et les muscles :

Laissez-moi vous parler de Léopold, un homme dont la passion pour le poulet et la musculation illumine chaque aspect de sa vie. 

Dans chaque bouchée de poulet qu'il déguste, on peut voir une véritable communion avec cet aliment divin. Son amour pour le poulet va bien au-delà du simple plaisir gastronomique ; c'est une véritable adoration, une danse entre l'homme et sa nourriture préférée.

Mais ce n'est pas seulement son amour pour le poulet qui définit Léopold, c'est aussi son dévouement pour cultiver ses muscles. Chaque séance d'entraînement est une célébration de la force et de la détermination, un hymne à la puissance du corps humain. Ses muscles sont le fruit de son travail acharné, de sa discipline inébranlable et de sa passion indomptable.

Dans chaque repas de poulet et à chaque soulevé de poids, Léopold incarne la fusion parfaite entre la gourmandise et la force brute. Son appétit insatiable pour le poulet nourrit son corps et son esprit, lui donnant l'énergie nécessaire pour dominer chaque défi qui se présente à lui.

Mais au-delà de son amour pour le poulet et les muscles, Léopold est un exemple de détermination et de persévérance pour tous ceux qui ont la chance de le connaître. Sa passion contagieuse inspire ceux qui l'entourent à poursuivre leurs rêves avec une ferveur renouvelée, à ne jamais abandonner même face aux obstacles les plus difficiles.

En fin de compte, Léopold est bien plus qu'un amateur de poulet et un passionné de musculation ; il est un symbole de force, de passion et de détermination. Puissent ses jours être remplis de poulet savoureux et de muscles sculptés, car il incarne la quintessence de la vie pleinement vécue.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
