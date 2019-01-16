import React from 'react'

import mountWithContexts from 'App/helpers/mountWithContexts'
import renderWithContexts from 'App/helpers/renderWithContexts'
import Dropdown from '../'
import Link from '../../Link'

describe('Navbar Dropdown', () => {
  it('toggle the dropdown list when clicking on its first link', () => {
    const wrapper = mountWithContexts(
      <Dropdown>
        <Link to="/uikit/dropdown">Dropdown</Link>
        <Dropdown.Item to="/uikit/dropdown/1">Item One</Dropdown.Item>
        <Dropdown.Item to="/uikit/dropdown/2">Item Two</Dropdown.Item>
        <Dropdown.Item to="/uikit/dropdown/3">Item Three</Dropdown.Item>
      </Dropdown>
    )

    const dropdown = wrapper.childAt(0)
    const button = dropdown.find(Link)

    expect(wrapper.find(Dropdown.Item)).toHaveLength(0)

    button.simulate('click')
    expect(wrapper.find(Dropdown.Item)).toHaveLength(3)

    button.simulate('click')
    expect(wrapper.find(Dropdown.Item)).toHaveLength(0)
  })

  it('renders correctly', () => {
    const tree = renderWithContexts(
      <Dropdown>
        <Link to="/uikit/dropdown">Dropdown</Link>
        <Dropdown.Item to="/uikit/dropdown/1">Item One</Dropdown.Item>
        <Dropdown.Item to="/uikit/dropdown/2">Item Two</Dropdown.Item>
        <Dropdown.Item to="/uikit/dropdown/3">Item Three</Dropdown.Item>
      </Dropdown>
    )
    expect(tree).toMatchSnapshot()
  })
})
