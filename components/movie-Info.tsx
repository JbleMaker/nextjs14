import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function ({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.info}>🎖️ {movie.vote_average.toFixed(1)}</h3>
        <a href={movie.homepage} target={"_blank"}>
          HomePage &rarr;
        </a>
        <div className={styles.genre}>
          {movie.genres.map((genres) => (
            <div key={genres.id}>
              <h3>{genres.name}</h3>
            </div>
          ))}
        </div>
        <p className={styles.overview}>{movie.overview}</p>
        <div>
          {movie.production_companies.map((production) => (
            <div key={production.id} className={styles.production}>
              <span>{production.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
