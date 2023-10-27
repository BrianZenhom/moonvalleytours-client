import './country.css';

const temporaryTours = [
  {
    name: 'Tour 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    price: 100,
    duration: 2,
    country: 'spain',
  },
  {
    name: 'Tour 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    price: 200,
    duration: 3,
    country: 'spain',
  },
];

export default function Country() {
  return (
    <section className="country">
      <article className="country_content">
        <header className="country_header container"></header>
      </article>
    </section>
  );
}
