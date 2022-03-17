import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setLoading(false);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.date_uploaded}</p>
          <ul>
            {movie.genres?.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

// json을 state에 넣고 상세 정보 표현해보기
export default Detail;
