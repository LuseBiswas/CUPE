import React from 'react';
import { SiLeetcode } from "react-icons/si"; // Import the external link icon from react-icons library

const UserData = ({ user }) => {
  // Skip the first element which contains header information
  const userDataToDisplay = user.slice(1);

  return (
    <>
      {userDataToDisplay.map((userData) => (
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
