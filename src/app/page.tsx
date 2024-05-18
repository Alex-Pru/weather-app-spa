import Link from 'next/link';
import styles from './page.module.scss'
import Image from 'next/image';

export default function Home() {
  const cities: string[] = ['Dallol', 'Fairbanks', 'London', 'Recife', 'Vancouver', 'Yakutsk']
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section>
          <article>
            <h1>WEATHER</h1>
            <p className={styles.subtitle}>select a city</p>
          </article>
        <div className={styles.Image}>
      <Image src="/world.svg" alt="" fill objectFit='contain'/>
      </div>
        </section>
        <section className={styles.buttonList}>
          {cities.map((city) => (
            <Link href={"./weatherPage/" + city} key={city} className={styles.button}><p>{city}</p></Link>
          ))}
        </section>
      </div>
    </main>
  );
}
