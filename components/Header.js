import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { RiGroup2Line } from "react-icons/ri";
import { SiFacebookgaming } from "react-icons/si";
import solanaLogo from "../assets/sol.png";
import useWalletBalance from "../context/useWalletBalance";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const Header = ({ name, url }) => {
  const style = {
    wrapper: `flex items-center w-full h-[4rem] justify-center px-[1rem] py-[0.2rem] sticky top-0 bg-[#252526] shadow-[0px 5px 8px -9px rgba(0, 0, 0, 0.75)] z-20`,
    headerLeft: `flex justify-start w-[30vw] text-xl font-bold text-white `,
    logoLeft: `items-center flex object-contain`,
    headerCenter: `flex-1 flex items-center justify-center h-full w-[40vw] py-2`,
    searchContainer: `flex items-center bg-[#3a3b3d] w-[90%] rounded-full py-2 px-4 text-[#b0b3b8]`,
    searchInput: `border-none px-[0.6rem] bg-transparent outline-none w-max text-white placeholder:text-[#b0b3b8]`,
    headerRight: `flex justify-end w-[30vw] h-min`,
    buttonRight: `flex items-center px-3 mx-2 rounded-[0.2rem] cursor-pointer`,
    userInfo: `bg-[#FFFFFF] hover:bg-[#e1e1e1]`,
    userName: `ml-2 text-black font-semibold`,
    userImage: `rounded-full object-cover`,
    balanceContainer: `bg-[#FFFFFF] hover:bg-[#e1e1e1] text-black hover:text-white`,
    balanceIcon: `object-covers`,
    balanceText: `ml-2 text-black font-semibold `,
  };
  const [balance] = useWalletBalance();

  return (
    <div className={style.wrapper}>
      <div className={style.headerLeft}>DECENTRALIZED SOCIAL MEDIA</div>
      <div className={style.headerCenter}>
        <div className={style.searchContainer}>
          <AiOutlineSearch />
          <input
            type="text"
            className={style.searchInput}
            placeholder="Search"
          />
        </div>
      </div>
      <div className={style.headerRight}>
        {name && (
          <div className={`${style.userInfo} ${style.buttonRight}`}>
            <Image
              src={url}
              className={style.userImage}
              height={20}
              width={20}
              alt="User image"
            />
            <div className={style.userName}>{name}</div>
          </div>
        )}
        <WalletMultiButton />
        <div className={`${style.balanceContainer} ${style.buttonRight}`}>
          <Image
            src={solanaLogo}
            className={style.balanceIcon}
            height={20}
            width={20}
            alt="Solana logo"
          />
          <div className={style.balanceText}>{balance.toFixed(2)} SOL</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
