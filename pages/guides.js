import AuthContext from "@/store/AuthContext";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/Guides.module.css";

export default function Guides() {
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  const { user, authReady } = useContext(AuthContext);
  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/supermario",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((data) => {
          if (!data.ok) {
            throw Error("You Must Be Logged in to View this Page!!");
          }
          return data.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>

      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides &&
        guides.map((guide) => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written By {guide.author}</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              amet. Ab aliquid enim voluptatem officia error, labore cum nobis
              debitis soluta qui aut excepturi maxime eaque velit dolorum sit
              autem!
            </p>
          </div>
        ))}
    </div>
  );
}
