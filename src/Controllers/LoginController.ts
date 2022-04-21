import UsuariosRepository from "../repositories/UsuariosRepository"
import LoginViewModel from "../Models/ViewModel/LoginViewModel";
import TokenViewModel from "../Models/ViewModel/TokenViewModel";
import Usuario from "../Models/UsuarioModel";
import md5 from "md5";

import Constants from "../Config/Constants";
import LoginService from "../Services/LoginService";

let loginService = new LoginService();
class LoginController {


    static validarLogin = (req, res) => {
        const { email, senha } = req.body;
        let login = new LoginViewModel(email, md5(senha).toString());

        if (!(email && senha))
            res.status(400).send({ error: 'Informe email e senha' });
        else {

            new UsuariosRepository().validarUsuario(login)
                .then(async function (usuario: Usuario) {

                    if (usuario == null)
                        res.status(401).json({ message: 'Não autorizado' });
                    else {
                        let tokenViewmModel = new TokenViewModel();

                        const token = await loginService.SetToken(usuario).then((value: any) => {
                            return value;
                        });

                        
                        tokenViewmModel = new TokenViewModel(token, '', 3600, 0, '')

                        res.json(tokenViewmModel)
                    }



                })
                .catch((err) => {
                    res.status(500).send({ error: err.toString() });
                })
        }

    }




}



export default LoginController