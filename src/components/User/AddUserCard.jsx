import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../components/User/AddUserCard.css";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 digitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

function AddUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(watch("email"));

  function onSubmit(userData) {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(userData);
    alert("Cadastro realizado com sucesso !!!!")
    
  };
  
  const history = useNavigate();
  function handleGoBack() {
    history(-1);
}

  return (
    <form  className="add-form-container"  onSubmit={handleSubmit(onSubmit)}>
      <h2 className="add-titulo">Cadastro de Novo Usuário</h2>
      {/*<label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>*/}
      <div>
        <fieldset className="add-field-master">
          <label>
            Email
            <input type="text" {...register("email")} />
            <span>{errors.email?.message}</span>
          </label>

          <label>
            Senha
            <input type="password" {...register("password")} />
            <span>{errors.password?.message}</span>
          </label>

          <label>
            Confirmar Senha
            <input type="password" {...register("confirmPassword")} />
            <span>{errors.confirmPassword?.message}</span>
          </label>
          <button className="btn-add-user" type="submit">Cadastrar-se</button>
        </fieldset>
      </div>
    </form>

  );
}

export default AddUser;