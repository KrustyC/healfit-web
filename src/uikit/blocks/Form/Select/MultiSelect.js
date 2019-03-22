import React, { Fragment } from 'react';

import SelectContext from './context';
import Chip from './Chip';

const MultiSelect = () => (
  <SelectContext.Consumer>
    {({ selected, onRemoveOption, valueLabelMapping, size }) => (
      <Fragment>
        {selected.map(item => (
          <Chip
            key={JSON.stringify(item.value)}
            onRemove={onRemoveOption(item.value)}
            size={size}
          >
            {valueLabelMapping.get(item.value)}
          </Chip>
        ))}
      </Fragment>
    )}
  </SelectContext.Consumer>
);

export default MultiSelect;
