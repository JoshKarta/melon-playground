"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;

export default function HankoAuth() {
  const router = useRouter();

  const [hanko, setHanko] = useState();

  useEffect(() => setHanko(new Hanko(hankoApi)), []);

  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    router.replace("/dashboard");
  }, [router]);

  useEffect(
    () =>
      hanko?.onSessionCreated(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

  return (
    <>
      <style>{`
          .hankoComponent::part(container){
              border-radius: 12px;
          }
          .hankoComponent::part(headline1){
              text-align: center;
          }
      `}</style>
      <hanko-auth class={"hankoComponent"} />
    </>
  );
}
