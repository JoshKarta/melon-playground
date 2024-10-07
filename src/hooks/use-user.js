import { useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export function useUserData() {
  const [hanko, setHanko] = useState();
  const [userState, setUserState] = useState({
    id: "",
    email: "",
    loading: true,
    error: null,
  });

  useEffect(() => setHanko(new Hanko(hankoApi)), []);

  useEffect(() => {
    hanko?.user
      .getCurrent()
      .then(({ id, email }) => {
        setUserState({ id, email, loading: false, error: null });
      })
      .catch((error) => {
        setUserState((prevState) => ({ ...prevState, loading: false, error }));
      });
  }, [hanko]);

  return userState;
}
