import React from "react";
import styles from "./Header.module.css";
import collage1 from "../../assets/images/collage-lu-1.png";
import logo1 from "../../assets/images/logo-1.png";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.conteudo} id="inscricao">
        <div className={styles.collage1}>
          <img
            className={styles.imgcollage1}
            src={collage1}
            alt="luh-collage-1"
          />
        </div>
        <div className={styles.logo}>
          <div className={styles.centerLogo}>
            <img className={styles.imglogo1} src={logo1} alt="logo-1" />{" "}
          </div>
          <h1 className={styles.titleHeader}>
            Um mini curso gratuito onde você vai aprender tudo o que precisa
            para ajudar a <b>ELEVAR A AUTOESTIMA DA SUA CRIANÇA.</b> Vai
            aprender ainda, como construir este mundo de autoamor{" "}
            <b>de forma leve e divertida </b>para que ela tenha um
            DESENVOLVIMENTO SEGURO E SAUDÁVEL.
          </h1>
          <div>
            <form
              className={styles.form}
              action="https://gmail.us12.list-manage.com/subscribe/post?u=dc71446deaa3185d66d6b079e&amp;id=57480ae7d2&amp;f_id=004db9e0f0"
              method="post"
            >
              <input type="text" name="NAME" placeholder="Nome" />
              <input type="email" name="EMAIL" placeholder="Email" />
              <input type="tel" name="TELEFONE" placeholder="Telefone" />
              <input
                className={styles.btn}
                type="submit"
                value="Quero participar!"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
