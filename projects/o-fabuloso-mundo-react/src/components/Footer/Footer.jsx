import React from "react";
import styles from "./Footer.module.css";
import logo2 from "../../assets/images/logo-2.png";

function FooterFabuloso() {
  return (
    <section className={styles.footer}>
      <div className={styles.conteudo5}>
        <img className={styles.logo2} src={logo2} alt="logo-2" />
        <p className={styles.p3}>
          Copyright © 2023 Inc. Todos os direitos reservados. CNPJ:
          19.930.128/0001-82 <br />
          Política de Privacidade | Política de vendas | Avisos legais
        </p>
      </div>
    </section>
  );
}

export default FooterFabuloso;
