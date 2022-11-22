import React from 'react'
import { Item } from '../Component/filterable-product-table/Filter'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Component/filterable-product-table',
  component: Item,
} as ComponentMeta<typeof Item>

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />
export const Table = Template.bind({})
