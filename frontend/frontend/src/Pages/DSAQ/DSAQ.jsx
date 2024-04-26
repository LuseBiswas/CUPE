import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import styles from './DSAQ.module.css'; // Import CSS module for DSAQ component
import Spinner from '../../Components/Spinner/Spinner';

const API = 'https://script.googleusercontent.com/macros/echo?user_content_key=zyeKjPYTwoTu1Fh3sx-RWwUlRPLZuN1bMxt8iVK6xcoeN-Zvfs3lJeAiRBrjUbS6Gl6apKX1LdIvparzH_lDaiLqOH8FKcsZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJOQN3r6jgAjPdAN5-1mVY-s9UgEhLu-3jgU4PVKCvbe91ptJRzkkjXFPciKTFQ7_4HaJPK-1TQvAnw6UNumM8_c4vpB667xzNz9Jw9Md8uu&lib=Mn_2FE48I3X2or3U2pI1G6YoKZOw8fVRD';

const DSAQ = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching data from API
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

  return (
    <div className={styles.container}> {/* Apply container class */}
      {loading ? (
        <Spinner />
      ) : (
        <table className={styles.table}> {/* Apply table class */}
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Problem</th>
              <th>Company</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            <UserData user={user} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DSAQ;
