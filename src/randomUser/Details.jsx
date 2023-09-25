import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Details({ user }) {
  if (!user) {
    return <div>No user data available</div>;
  }

  try {
    const userDetail = JSON.parse(user);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userData, setUserData] = useState(userDetail);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setUserData(userData);
    }, [userData]);

    return (
      <div>
        {userData.results.map((result, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center ">
              <div className="card " style={{ width: "500px" }}>
                <img
                  className="card-img-top"
                  src={result.picture.large}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Random User Card</h5>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => {
                      location.reload();
                    }}
                  >
                    Ganerate
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Name: {result.name.title} {result.name.first}{" "}
                    {result.name.last}
                  </li>
                  <li className="list-group-item">
                    Gender:{" "}
                    {result.gender.charAt(0).toUpperCase() +
                      result.gender.slice(1)}
                  </li>
                  <li className="list-group-item">
                    <address>
                      City: {result.location.city} <br />
                      State: {result.location.state}
                      <br />
                      Country: {result.location.country}
                      <br />
                      Postcode: {result.location.postcode}
                      <br />
                      Address: {result.location.street.number}{" "}
                      {result.location.street.name}
                    </address>
                  </li>
                  <li className="list-group-item">
                    Date of birth:{" "}
                    {new Date(result.dob.date).toLocaleDateString()}
                    <br />
                    Age: {result.dob.age}
                  </li>
                  <li className="list-group-item">Email: {result.email}</li>
                  <li className="list-group-item">
                    Phone: {result.phone} <br />
                    Cell: {result.cell}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error parsing user data</div>;
  }
}
