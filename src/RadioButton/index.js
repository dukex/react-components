import React, { PropTypes } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import View from '../core/View'
import ThemedComponent from '../utils/theming/ThemedComponent'
import styles from './styles.css'

export default class RadioButton extends ThemedComponent {
  static propTypes = {
    checked: PropTypes.bool,
    children: PropTypes.node,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    testId: PropTypes.string,
    value: PropTypes.any
  }

  static defaultProps = {
    checked: false,
    dir: 'ltr'
  }

  constructor (props, context) {
    super(props, context, {
      namespace: 'RadioButton',
      styles
    })
    this.id = uuid.v4()
    this.keyboard = true
    this.state = {
      focused: false
    }
  }

  onChange = () => {
    const { value, onChange } = this.props

    onChange && onChange(value)
  }

  render () {
    const {
      checked,
      children,
      dir,
      disabled,
      name,
      tabIndex,
      testId
    } = this.props

    const { focused } = this.state
    const { theme } = this

    return (
      <View
        className={ classNames(theme.checkbox, theme.radio, {
          [theme.focused]: focused,
          [theme.rtl]: dir === 'rtl'
        }) }
      >
        <input
          checked={ checked }
          className={ theme.input }
          data-test-id={ testId }
          disabled={ disabled }
          id={ this.id }
          name={ name }
          onBlur={ () => this.setState({ focused: false }) }
          onChange={ this.onChange }
          onFocus={ () => {
            this.setState({ focused: this.keyboard })
            this.keyboard = true
          } }
          tabIndex={ tabIndex }
          type='radio'
        />
        <label
          className={ theme.label }
          dir={ dir }
          htmlFor={ this.id }
          onMouseUp={ () => this.keyboard = false }
        >
          { children }
        </label>
      </View>
    )
  }
}