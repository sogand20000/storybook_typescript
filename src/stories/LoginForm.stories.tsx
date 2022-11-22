import React from 'react'
import { LoginForm } from '../Component/LoginForm/LoginForm'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'Component/Login',
  component: LoginForm,
  args: {},
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const EmptyForm = Template.bind({})
export const filledForm = Template.bind({})
filledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.type(canvas.getByTestId('username'), 'email@provider.com')
  await userEvent.type(canvas.getByTestId('password'), '1234')
  const loginButton = await canvas.getByRole('button', { name: /button/i })

  await userEvent.click(loginButton)
  /*  await expect(
    canvas.getByText(
      'Everything is perfect. Your account is ready and we should probably get you started!'
    )
  ).toBe() */
}
