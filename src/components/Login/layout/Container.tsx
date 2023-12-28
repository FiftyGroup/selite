import styles from "./Container.module.css";
import Input from "../forms/Input";
import Box from "@mui/material/Box";

function Container() {
  return (
    <div className={styles.Container}>
      <section className={styles.section}>
        <div className={styles.imagem}>Logo/imagem</div>
        <h1>Create your account</h1>
        <Box>
          <Input />
          <a href="#" className={styles.link}>
            Forgot Password
          </a>
        </Box>
      </section>
    </div>
  );
}

export default Container;
