import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as SubmitButtonStories from './SubmitButton.stories'
import { composeStories } from '@storybook/react'

const { Default, MenuIsOpened, Disabled } = composeStories(SubmitButtonStories)
const user = userEvent.setup()

afterEach(cleanup)

test('use property to control whether to publish or draft', async () => {
  const { rerender } = render(<Default published />)

  const saveButton = screen.getByTestId('save-button')
  expect(saveButton.textContent).toEqual('Publish')

  rerender(<Default published={false} />)
  expect(saveButton.textContent).toEqual('Draft')

  return Promise.resolve()
})

test('`Publish` is displayed when publish is selected in the menu', async () => {
  // ARRANGE
  const { container } = render(<MenuIsOpened published={false} />)
  // eslint-disable-next-line
  // @ts-ignore
  await MenuIsOpened.play?.({ canvasElement: container })

  const saveButton = screen.getByTestId('save-button')
  expect(saveButton.textContent).toEqual('Draft')

  // ACT
  await user.click(screen.getByTestId('menu-item-publish'))

  // ASSERT
  expect(saveButton.textContent).toEqual('Publish')
})

test('`Draft` is displayed when draft is selected in the menu', async () => {
  // ARRANGE
  const { container } = render(<MenuIsOpened published />)
  // eslint-disable-next-line
  // @ts-ignore
  await MenuIsOpened.play?.({ canvasElement: container })

  const saveButton = screen.getByTestId('save-button')
  expect(saveButton.textContent).toEqual('Publish')

  // ACT
  await user.click(screen.getByTestId('menu-item-draft'))

  // ASSERT
  expect(saveButton.textContent).toEqual('Draft')
})

test('execute any function when selecting the menu item', async () => {
  // ARRANGE
  const mockFn = vi.fn()
  const { container } = render(<MenuIsOpened onChangePublished={mockFn} />)
  // eslint-disable-next-line
  // @ts-ignore
  await MenuIsOpened.play?.({ canvasElement: container })

  expect(mockFn).toBeCalledTimes(0)

  // ACT
  await user.click(screen.getByTestId('menu-item-publish'))

  // ASSERT
  expect(mockFn).toBeCalledTimes(1)
})

test('button is disabled', async () => {
  // ARRANGE
  render(<Disabled />)

  const saveButton = screen.getByTestId('save-button')
  const menuOpenButton = screen.getByTestId('menu-open-button')

  // ASSERT
  expect((saveButton as HTMLButtonElement).disabled).toBeTruthy()
  expect((menuOpenButton as HTMLButtonElement).disabled).toBeTruthy()

  return Promise.resolve()
})
