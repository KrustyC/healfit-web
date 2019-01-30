import React from 'react';

import SelectContext from './context';
import {
  Action,
  Actions,
  Box,
  Icon,
  BoxMain,
  Selector,
  Input,
  Text,
} from './style';
import MultiSelect from './MultiSelect';

const SelectorBox = React.forwardRef((props, textInputRef) => (
  <SelectContext.Consumer>
    {({
      withoutInput,
      query,
      selected,
      placeholder,
      focus,
      multi,
      size,
      onFocus,
      onBlur,
      onInputChange,
    }) => (
      <Box
        focus={focus}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex="0"
        size={size}
      >
        <Selector>
          <BoxMain>
            {multi && <MultiSelect size={size} />}
            {!multi && <Text size={size}>{selected && selected.label}</Text>}
            <Input
              disabled={withoutInput}
              size={size}
              ref={textInputRef}
              placeholder={
                Object.keys(selected).length === 0 ? placeholder : ''
              }
              html={query}
              onChange={onInputChange}
            />
          </BoxMain>
        </Selector>
        <Actions>
          {/* <Action onClick={onRemoveAll} hide={!showList} size={size}>
            <Icon src={require('assets/icons/cancel-grey.svg')} />
          </Action> */}
          <Action size={size}>
            {/* eslint-disable-next-line */}
            <Icon src={require('assets/icons/arrow-down-grey.svg')} />
          </Action>
        </Actions>
      </Box>
    )}
  </SelectContext.Consumer>
));

export default SelectorBox;
