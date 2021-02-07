import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router'

const Register = () => {

    const router = useRouter();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');

    const [notify, setNotification] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (password !== passConf) {
            setNotification('A senha e a confirmação da senha não correspondem')

            setTimeout(() => {
                setNotification('')
            }, 2000)

            setPassword('');
            setPassConf('');
            return null;

        }

        fire.auth()
            .createUserWithEmailAndPassword(userName, password)
            .catch((err) => {
                console.log(err.code, err.message)
            });

        router.push("/")
    }

    return (
        <div>
            <h1>Criar um novo Usuário</h1>

            {notify}
            <form onSubmit={handleLogin}>
                Email: <input type="text" value={userName} onChange={({ target }) => setUsername(target.value)} />
                <br />
                Senha:: <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
                <br />
                Confirmar Senha: <input type="password" value={passConf} onChange={({ target }) => setPassConf(target.value)} />
                <br />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Register