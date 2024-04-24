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
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
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
