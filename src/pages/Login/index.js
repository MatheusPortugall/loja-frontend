import styles from "./Login.module.css";

const handleSubmit = (event) => {
    event.preventDefault();

}

function Login() {
    return (
        <section className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <div className={styles.inputContainer}>
                        <label for="usuario">Usuário</label>
                        <input id="usuario" type="text" name="usuario" required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="senha">Senha</label>
                        <input id="senha" type="password" name="usuario" required />
                    </div>
                    <div className={styles.buttonContainer}>
                        <input type="submit" className={styles.buttonLogin} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;