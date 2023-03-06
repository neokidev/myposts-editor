import {expect, test} from 'vitest'
import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubmitButton } from './SubmitButton'

test('press chevron down button to open the menu', async () => {
  // ARRANGE
  render(<SubmitButton />)

  // ACT
  await userEvent.click(screen.getByTestId('menu-open-button'))

  // ASSERT
  const menu = screen.getByTestId('menu')
  expect(menu).toBeTruthy()
})


