import { useForm } from "react-hook-form";
import styles from './css/Contato.module.css'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../Footer';


function Contato() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container_contato}>
      
      <div>
      <h1>Conheça minhas Redes:</h1>
        <ul className={styles.redes}>
          {/* <AiFillBulb /> */}
          <li><Link className={styles.linkedin} to="https://www.linkedin.com/in/euanaclaramelo"><AiOutlineLinkedin /></Link>
          </li><li><Link className={styles.git} to="https://twitter.com/"><AiFillGithub /></Link>
          </li><li><Link className={styles.insta} to="https://www.instagram.com/anclaramelo/"><AiOutlineInstagram /></Link>
          </li>
        </ul>
        <p>Ou me mande um email, vamos trabalhar juntos!</p>
      </div>
      <form action="mailto:anaclaramelo2707@gmail.com" className={styles.form}>
        <div className={styles.input}>
          <h2>Fale comigo:</h2>
          <label htmlFor="text">Seu nome</label>
          <input id="nome" type="nome" />
          <label htmlFor="email">Seu email</label>
          <input id="email" type="text" />
          <label htmlFor="text">Assunto</label>
          <input id="text" type="text" email="email"/>
        </div>
        {/* <div className={styles.input}>
          <label htmlFor="texto">Password</label>
          <input id="password" type="password" />
        </div> */}
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
      </div>
      
  );
}
export default Contato;