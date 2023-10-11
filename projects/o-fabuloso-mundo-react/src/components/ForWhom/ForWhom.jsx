import React from "react";
import styles from "./ForWhom.module.css";
import titlePraQuem from "../../assets/images/titulo3.png";

function PraQuem() {
  return (
    <>
      <section className={styles.bg__PraQuem}>
        <div className={styles.tituloPraQuem}>
          <img
            className={styles.imgTituloPraQuem}
            src={titlePraQuem}
            alt="Título: Pra quem é este Curso?"
          />
        </div>
        <div className={styles.bg__Papel__PraQuem}>
          <div className={styles.textoPraQuem}>
            <p className={styles.p__ParaQuem}>
              Para mães, pais e cuidadores que:
            </p>
            <br />
            <ul className={styles.ul}>
              <li>Tenham crianças a partir dos 7 anos de idade;</li>
              <br />
              <li>
                Perceberam que precisam ajudar no desenvolvimento da autoestima
                de seus filhos;
              </li>
              <br />
              <li>
                Estejam empenhados na construção de um futuro mais saudável para
                suas crianças;
              </li>
              <br />
              <li>
                Desejam melhorar o relacionamento com os seus pequenos, mas não
                sabem como;
              </li>
              <br />
              <li>Desejam ver seus filhos mais confiantes e seguros;</li>
              <br />
              <li>Querem simplesmente que seus filhos sejam felizes.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default PraQuem;
