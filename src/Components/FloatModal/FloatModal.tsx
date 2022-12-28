import React, { ReactNode } from "react";
import styles from "../../styles/FloatModal.module.scss";

type Props = {
  children: ReactNode;
  show: boolean;
  reft: any;
};

function FloatModal({ show, children, reft }: Props) {
  return (
    <>
      {show ? (
        <div ref={reft} className={styles.modalForm}>
          {children}
        </div>
      ) : null}
    </>
  );
}

export default FloatModal;
