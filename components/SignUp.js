import React from "react";
import Image from "next/image";
import dsn from "../assets/dsn.png";
import { useWallet } from "@solana/wallet-adapter-react";
import toast, { Toaster } from "react-hot-toast";

const SignUp = ({ setRegistered, name, setName, url, setUrl }) => {
  const style = {
    wrapper: `flex flex-col m-auto p-6 justify-center items-center h-full w-full bg-[#252526] w-min h-min rounded-2xl`,
    title: `text-[#afb3b8] font-semibold text-xl`,
    form: `flex flex-col items-center`,
    fieldContainer: `my-4`,
    inputTitle: `text-[#afb3b8] font-semibold mb-3 ml-3`,
    inputContainer: `flex items-center w-[20rem] h-[2.5rem] bg-[#3a3b3d] rounded-full`,
    inputField: `bg-transparent flex-1 m-3 outline-none text-white px-2`,
    randomUrl: `h-full bg-[#2d2d2d] hover:bg-[#252626] text-white px-2 py-2 ml-1 hover:px-3 rounded-full cursor-pointer duration-[0.2s] ease-in-out`,
    submitButton: `bg-[#3a3b3d] text-white text-lg font-semibold mt-5 px-4 py-2 hover:px-6 rounded-full cursor-pointer duration-[0.2s] ease-in-out`,
  };

  const wallet = useWallet();

  const createUser = async (event) => {
    if (!wallet.publicKey) {
      toast("Please connect your wallet!", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#252526",
          color: "#fffcf9",
        },
      });
    } else {
      setRegistered(true);

      const res = await window.solana.connect();
      const walletAddress = res.publicKey.toString();

      try {
        // https://anonystick.com/blog-developer/fetch-javascript-2019121692350668
        await fetch(`/api/createUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userWalletAddress: walletAddress,
            name: name,
            profileImage: url,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const generateRandomProfileImageUrl = () =>
    setUrl(
      `https://avatars.dicebear.com/api/pixel-art-neutral/${Math.floor(
        Math.random() * 100
      )}.svg`
    );

  return (
    <div className={style.wrapper}>
      <Toaster position="bottom-left" reverseOrder={false} />
      <div className={style.logoContainer}>
        <Image src={dsn} height={60} width={60} alt="facebook logo" />
      </div>
      <div className={style.title}>Please sign up to use DSN</div>
      <form onSubmit={createUser} className={style.form}>
        <div className={style.fieldContainer}>
          <div className={style.inputTitle}>Name</div>
          <div className={style.inputContainer}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className={style.inputField}
              maxlength="20"
              placeholder="20 characters limit"
            />
          </div>
        </div>
        <div className={style.fieldContainer}>
          <div className={style.inputTitle}>Profile Image URL</div>
          <div className={style.inputContainer}>
            <input
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              required
              className={style.inputField}
            />
            <div
              className={style.randomUrl}
              onClick={() => generateRandomProfileImageUrl()}
            >
              Random
            </div>
          </div>
        </div>
        <button className={style.submitButton} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
