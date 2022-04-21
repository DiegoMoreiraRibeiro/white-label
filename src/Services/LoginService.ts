import Usuario from "../Models/UsuarioModel";
import jwt from "jsonwebtoken";
import Constants from "../Config/Constants";

class LoginService {

    SetToken(usuario: Usuario) {
        return new Promise((resolve, reject) => {
            try {

                const dadosUsuario = {
                    nome: usuario.nome,
                    email: usuario.email,
                    id: usuario.id
                };

                jwt.sign(dadosUsuario,
                    Constants.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    },
                    function (err, token2) {
                        if (err) reject(err);
                        else resolve(token2)
                    });
            } catch (error) {
                console.log(error)
            }

        })
    }

    MiddlewareValidarJWT = (req, res, next) => {
        const token = req.headers["authorization"];
        return new Promise((resolve, reject) => {
            try {
                jwt.verify(token, Constants.TOKEN_KEY, (err, userInfo) => {
                    if (err) {
                        res.status(403).send({ error: 'Token invalido' });
                        return;
                    }
                    req.userInfo = userInfo;
                    next();
                });
            } catch (error) {
                console.log(error)
            }
        })
    };

}

export default LoginService