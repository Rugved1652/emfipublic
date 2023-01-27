import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "../../styles/HeroTextArea.module.scss";
import readMoreArrow from "../../Assets/read-more-arrow.png";
import moment from "moment";
import { sanitize } from "dompurify";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

function HeroTextArea({
  title,
  date,
  description,
  subHeading,
  reportSlug,
  id,
  formatType,
}: any) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLoginToken = localStorage.getItem("true");
    if (isLoginToken === "true") {
      setIsLogin(true);
    }
  }, []);

  const Router = useRouter();
  return (
    <div className={styles.hero}>
      <div className={styles.heroHead}>
        <h2 className={styles.heroHeadText}>
          {title} <span>{moment(date).format("MMMM DD, YYYY")}</span>
        </h2>
        <h4 className={styles.heroHeadSubText}>
          {formatType === "EMFI Monthly Review" ? " " : `${formatType} : `}
          {subHeading}
        </h4>
      </div>
      <div
        className={styles.heroPara}
        dangerouslySetInnerHTML={{ __html: description.slice(0, 600) + "..." }}
      ></div>
      <Link
        href={
          !isLogin
            ? `/${Router?.query.lang}/intelligence/details/${reportSlug}?id=${id}`
            : `https://login.emfi.uk?query=https://emfi.uk/${Router?.query.lang}/intelligence/details/${reportSlug}?id=${id}`
        }
        className={styles.heroCTA}
      >
        Read More
        <Image
          className={styles.readMoreIcon}
          width={14}
          height={12}
          alt="Read more"
          src={readMoreArrow}
        />
      </Link>
    </div>
  );
}

export default HeroTextArea;
