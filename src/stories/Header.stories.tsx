import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '../Component/Header/Header'

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
