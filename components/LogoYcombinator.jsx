"use client"
import React, { useCallback, useEffect } from "react";
import styles from "@/pages/page.module.css";
import Image from "next/image";

export default function LogoYcombinator() {
  const restartAnimation = useCallback(() => {
    const container = document.querySelector(
      `.${styles["logo-ycombinator-box-container"]}`
    );

    container.classList.remove(styles["scroll-animation"]);
    void container.offsetWidth; // Forcibly trigger reflow
    container.classList.add(styles["scroll-animation"]);

    setTimeout(restartAnimation, 3000); // Redémarre l'animation après 3 secondes
  }, []); // Pas de dépendances ici, car restartAnimation ne doit pas être une dépendance

  useEffect(() => {
    restartAnimation(); // Démarrer l'animation au montage initial
  }, [restartAnimation]);

  return (
    <div
      className={`${styles["logo-ycombinator-box-container"]} ${styles["scroll-animation"]}`}
    >
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
      <div className={styles["logo"]}>
        <Image src={"/ellipse.svg"} height={15} width={15} alt="" />
        <Image src={"/logo-ycombinator.svg"} height={35} width={150} alt='' />
      </div>
    </div>
  );
}
