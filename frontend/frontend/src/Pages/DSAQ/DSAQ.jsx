import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import styles from './DSAQ.module.css';
import Spinner from '../../Components/Spinner/Spinner';

const API = 'https://script.googleusercontent.com/macros/echo?user_content_key=zyeKjPYTwoTu1Fh3sx-RWwUlRPLZuN1bMxt8iVK6xcoeN-Zvfs3lJeAiRBrjUbS6Gl6apKX1LdIvparzH_lDaiLqOH8FKcsZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJOQN3r6jgAjPdAN5-1mVY-s9UgEhLu-3jgU4PVKCvbe91ptJRzkkjXFPciKTFQ7_4HaJPK-1TQvAnw6UNumM8_c4vpB667xzNz9Jw9Md8uu&lib=Mn_2FE48I3X2or3U2pI1G6YoKZOw8fVRD';

const DSAQ = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const fetchUser = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.data && data.data.length > 0) {
        setUser(data.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = user.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(user.length / recordsPerPage);

  const prePage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const changeCPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Problem</th>
                <th>Company</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <UserData records={currentRecords} />
            </tbody>
          </table>
          <nav>
            <ul className={styles.pagination}>
              <li className={styles.pageItem}>
                <button className={styles.pageLink} onClick={prePage} disabled={currentPage === 1}>Prev</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`${styles.pageItem} ${currentPage === i + 1 ? styles.active : ''}`}>
                  <button className={styles.pageLink} onClick={() => changeCPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={styles.pageItem}>
                <button className={styles.pageLink} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default DSAQ;
