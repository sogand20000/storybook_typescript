import React from 'react'
import { Button } from '../Button/Button'
export const LoginForm = ({}: any) => {
  return (
    <>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        data-testid="username"
        name="username"
        value="username"
      />

      <br></br>
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        data-testid="password"
        type="text"
        name="password"
        value="Password"
      />
      <br></br>
      <Button size="small" onClick={() => console.log('hi')} label="button" />
    </>
  )
}
export default LoginForm
