import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { authUser } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [login, setLogin] = useState({});
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.user.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate('/home');
          }
      }, [isLogged, navigate]);

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
        dispatch(authUser(requestBody))
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