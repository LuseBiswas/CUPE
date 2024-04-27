import React from 'react';
import { SiLeetcode } from "react-icons/si"; // Import the external link icon from react-icons library

const UserData = ({ records, search }) => {
  // Skip the first element which contains header information
  const userDataToDisplay = records.slice(1);

  return (
    <>
      {userDataToDisplay.filter((userData)=>{
        return search.toLowerCase() === '' ? userData : userData.Comapny.toLowerCase().includes(search.toLowerCase())
      }).map((userData) => (
        <tr key={userData.SrNo}>
          <td>{userData.SrNo}</td>
          <td>{userData.ProblemName}</td>
          <td>{userData.Comapny}</td>
          <td >
            <a href={userData.Link} target="_blank" rel="noopener noreferrer">
              <SiLeetcode fontSize={"20px"} color='#FFA500'/> {/* Use the external link icon */}
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserData;
