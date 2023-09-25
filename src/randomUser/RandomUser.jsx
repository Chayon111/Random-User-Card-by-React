import { useState, useEffect } from "react";
import Details from "./Details";

export default function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const jsonString = JSON.stringify(data);
      setUser(jsonString);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Details user={user} />
    </div>
  );
}
