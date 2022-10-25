import { useEffect } from "react";
import Image from "next/image";
import solanaIcon from "../assets/sol.png";
import kiki from "../assets/kiki.jpg";
import Contact from "./Contact";

const RightSidebar = ({ getUsers, users }) => {
  const style = {
    wrapper: `w-[24rem] my-2 text-lg text-white`,
    title: `text-white font-semibold`,
    adsContainer: ``,
    ad: `flex items-center my-3 mr-[1rem] p-2 rounded-lg`,
    adImageContainer: `h-full w-[50%] flex items-center`,
    adImage: `object-cover`,
    adTitle: "w-full",
    adLink: `text-[#b0b3b8] text-sm`,
    divider: `w-[95%] border-b border-[0.5px] border-[#3e4042] my-2`,
    contact: `flex items-center my-5`,
    contactImage: `rounded-full object-cover`,
    contactName: `ml-4 text-[1rem]`,
  };

  useEffect(() => {
    ;(async () => {
      await getUsers();
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Sponsored</div>
      <div className={style.adsContainer}>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={solanaIcon}
              height={100}
              width={100}
              className={style.adImage}
              alt="solana logo"
            />
          </div>
          <div className={style.adTitle}>
            <a href="https://solana.com">
              Powerful for developers. <br />
              Fast for everyone.
            </a>
            <div className={style.adLink}>solana.com</div>
          </div>
        </div>
        <div className={style.ad}>
          <div className={style.adImageContainer}>
            <Image
              src={kiki}
              height={100}
              width={100}
              className={style.adImage}
              alt="kiki"
            />
          </div>
          <div className={style.adTitle}>
            <a href="https://github.com/fanglee2003">
              You develop tech. <br />
              Tech develop you.
            </a>
            <div className={style.adLink}>github.com/fanglee2003</div>
          </div>
        </div>

        {/* <div className={style.divider} /> */}
        <div className={style.title}>Contacts</div>
        <div className={style.contactsContainer}>
          {users.map((user) => {
            return <Contact key={user.walletAddress} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
