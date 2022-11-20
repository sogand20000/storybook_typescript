import { DecoratorFn } from '@storybook/react'
export const withMaxWidth: DecoratorFn = (StoryFn) => {
  /*   console.log(context)
   */
  return (
    <div style={{ maxWidth: 500, margin: 'auto', border: '1px solid #fab' }}>
      <StoryFn />
    </div>
  )
}
export const globalDecorators = [
  (StoryFn) => (
    <div>
      Hello Word
      <StoryFn></StoryFn>
    </div>
  ),
  withMaxWidth,
]
