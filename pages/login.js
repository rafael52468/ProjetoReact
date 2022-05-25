import React from 'react'
import { AppContainer } from '../src/components/AppContainerComponent'
import { AppInput } from '../src/components/AppInputComponent'

const AppButton = props => (
  <div>
    <input type="submit" title={props.title} />
  </div>
)

const Login = props => {
  return (
    <AppContainer>
      <AppInput
        title="apelido ou email do usuário"
        label="Usuário:"
        type="text"
      />
      <AppInput label="Senha:" type="password" title="senha do usuário" />
      <AppButton title="Entrar" />
    </AppContainer>
  )
}

export default Login
