import { useState } from "react";
import { requestLogin } from "../../api/authApi";
import request from "../../api/request";
import styles from "./Login.module.css";

function Login() {

    const [login, setLogin] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLogin(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let requestBody = {
            usuario: event.target[0].value,
            senha: event.target[1].value
        }
        let login = await requestLogin(requestBody);
        console.log("ret login", login);
    }

    return (
        <section className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <p className={styles.titleLogin}>Astra store</p>
                    <div className={styles.inputContainer}>
                        <label>Usuário</label>
                        <input 
                            id="usuario" 
                            type="text" 
                            name="usuario" 
                            value={login.usuario || ""}
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Senha</label>
                        <input 
                            id="senha" 
                            type="password" 
                            name="senha" 
                            value={login.senha || ""}
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <input type="submit" value="Entrar" className={styles.buttonLogin} />
                    </div>
                    <a href="/" className={styles.link}>Criar conta</a>
                </form>
            </div>
        </section>
    );
}

export default Login;