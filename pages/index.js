import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Helmet } from "react-helmet";
import SignUp from "../components/SignUp";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

const style = {
  wrapper: `bg-[#18191a] min-h-screen duration-[0.5s]`,
  homeWrapper: `flex`,
  center: `flex-1`,
  main: `flex-1 flex justify-center`,
  signupContainer: `flex items-center justify-center w-screen h-[70vh]`,
};

export default function Home() {
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState(
    "https://avatars.dicebear.com/api/pixel-art-neutral/1.svg"
  );
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      await requestUsersData();
    })();
  }, []);

  const wallet = useWallet();

  const requestUsersData = async (activeAccount) => {
    try {
      const response = await fetch(`/api/fetchUsers`);
      const data = await response.json();

      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <title>DSN - Decentralized Social Network</title>

        <link rel="icon" href="../public/favicon.ico" />

        <meta name="image" property="og:image" content="../Decentralized Social Network Preview.png" />
        <meta property="og:title" content="DSN" />
        <meta property="og:description" content="Decentralized Social Network" />
        <meta property="og:url" content="https://dsn.netlify.app/" />
      </Helmet>

      <Header name={name} url={url} />
      {registered ? (
        <div className={style.homeWrapper}>
          <LeftSidebar name={name} url={url} />
          <div className={style.main}>
            <Feed connected={wallet.connected} name={name} url={url} />
          </div>
          <RightSidebar
            getUsers={requestUsersData}
            users={users}
            setUsers={setUsers}
          />
        </div>
      ) : (
        <div className={style.signupContainer}>
          <SignUp
            setRegistered={setRegistered}
            name={name}
            setName={setName}
            url={url}
            setUrl={setUrl}
          />
        </div>
      )}
    </div>
  );
}
