import { useEffect, useState } from "react";

export const useIsADMIN = (argument) => {
  const [isAdmin, setIsAdmin] = useState(true);

  console.log("isAdmin>>", isAdmin);

  useEffect(() => {
    if (argument?.email.includes("abdulaziztojibayev6@gmail.com")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [argument]);
  return { isAdmin };
};
