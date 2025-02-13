import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  const { onResetForm, onInputChange, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario With custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ricardo@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>
    </>
  )
}
