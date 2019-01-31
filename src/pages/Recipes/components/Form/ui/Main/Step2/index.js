import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'uikit/blocks/Form';
import Wizard from 'components/Wizard';
import AddIngridient from './AddIngridient';
import Ingridients from './Ingridients';

export default class Step2 extends Component {
  static propTypes = {
    values: PropTypes.shape({
      ingridients: PropTypes.array.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  state = {
    availableIngridients: [],
    currentIngridient: null,
  };

  onSearchIngridient = value => {
    console.log(value);

    // @TDO perfom query through graphql
    return new Promise(resolve => {
      const availableIngridients = [
        {
          id: 1,
          name: 'Celery',
        },
        {
          id: 2,
          name: 'Cinnamon',
        },
        {
          id: 3,
          name: 'Water',
        },
        {
          id: 4,
          name: 'Red bell pepper',
        },
        {
          id: 5,
          name: 'Celery',
        },
      ];
      return resolve(availableIngridients);
    });
  };

  onCancelIngridient = () => this.setState({ currentIngridient: null });

  onSelectIngridient = ingridient =>
    this.setState({ currentIngridient: ingridient });

  onAddIngridient = ingridient => {
    const ingridients = [...this.props.values.ingridients, ingridient];
    this.props.setFieldValue('ingridients', ingridients);
    this.setState({ currentIngridient: null });
  };

  onRemoveIngridient = id => {
    const { ingridients } = this.props.values;
    const index = ingridients.findIndex(ingridient => ingridient.id === id);

    const updatedIngridients = [
      ...ingridients.slice(0, index),
      ...ingridients.slice(index + 1, ingridients.length),
    ];

    this.props.setFieldValue('ingridients', updatedIngridients);
  };

  render() {
    const { values } = this.props;
    const { currentIngridient } = this.state;

    return (
      <Wizard.Page>
        <Form.FormGroup>
          <Form.RemoteFilter
            placeholder="Look for ingridients..."
            query={this.onSearchIngridient}
            onSelect={this.onSelectIngridient}
          />
          <Form.Feedback name="ingridients" />
        </Form.FormGroup>
        {currentIngridient && (
          <AddIngridient
            ingridient={currentIngridient}
            onConfirm={this.onAddIngridient}
            onCancel={this.onCancelIngridient}
          />
        )}
        <Ingridients
          ingridients={values.ingridients}
          onRemoveIngridient={this.onRemoveIngridient}
        />
      </Wizard.Page>
    );
  }
}
