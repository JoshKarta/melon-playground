import { useState, useEffect } from "react";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

export function useSessionData() {
  const [hanko, setHanko] = useState();
  const [sessionState, setSessionState] = useState({
    userID: "",
    jwt: "",
    isValid: false,
    loading: true,
    error: null,
  });

  useEffect(() => setHanko(new Hanko(hankoApi)), []);

  useEffect(() => {
    if (hanko) {
      const isValid = hanko.session.isValid();
      const session = hanko.session.get();

      if (isValid && session) {
        const { userID, jwt = "" } = session;
        setSessionState({
          userID,
          jwt,
          isValid,
          loading: false,
          error: null,
        });
      } else {
        setSessionState((prevState) => ({
          ...prevState,
          isValid: false,
          loading: false,
          error: "Invalid session",
        }));
      }
    }
  }, [hanko]);

  return sessionState;
}
