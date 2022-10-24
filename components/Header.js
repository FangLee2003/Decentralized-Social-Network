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
    wrapper: `flex items-center w-full h-[4rem] justify-around px-[1rem] py-[0.2rem] sticky top-0 bg-[#252526] shadow-[0px 5px 8px -9px rgba(0, 0, 0, 0.75)] z-20`,
    headerLeft: `flex justify-center gap-[0.6rem]`,
    logoLeft: `items-center flex object-contain`,
    searchContainer: `flex items-center bg-[#3a3b3d] max-w-[18rem] rounded-full py-2 px-2 text-[#b0b3b8]`,
    searchInput: `border-none px-[0.6rem] bg-transparent outline-none w-[18rem] text-white placeholder:text-[#b0b3b8]`,
    headerCenter: `flex-1 flex items-center justify-center h-full py-2`,
    itemCenter: `flex items-center px-[1.8rem] cursor-pointer duration-[0.5s]  hover:bg-[#555657] rounded-[10px]`,
    iconCenter: `text-2xl text-[#666]`,
    headerRight: `flex h-min`,
    buttonRight: `flex items-center px-3 mx-2 rounded-[0.2rem] cursor-pointer`,
    userInfo: `bg-[#31e3bd] hover:bg-[#438791]`,
    userName: `font-bold ml-2 text-black`,
    userImage: `rounded-full object-cover`,
    balanceContainer: `bg-[#ec55bc] hover:bg-[#572079] text-black`,
    balanceIcon: `object-covers`,
    balanceText: `text-white font-bold ml-2`,
  };
  const [balance] = useWalletBalance();

  return (
    <div className={style.wrapper}>
      <div className={style.headerLeft}>
        <Image
          className={style.logoLeft}
          src="ttps://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          height={30}
          width={30}
          alt="logo"
        />
        <div className={style.searchContainer}>
          <AiOutlineSearch />
          <input
            type="text"
            className={style.searchInput}
            placeholder="Search"
          />
        </div>
      </div>
      <div className={style.headerCenter}>
        <div className={style.itemCenter}>
          <AiFillHome className={style.iconCenter} />
        </div>
        <div className={style.itemCenter}>
          <BsDisplay className={style.iconCenter} />
        </div>
        <div className={style.itemCenter}>
          <RiGroup2Line className={style.iconCenter} />
        </div>
        <div className={style.itemCenter}>
          <SiFacebookgaming className={style.iconCenter} />
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