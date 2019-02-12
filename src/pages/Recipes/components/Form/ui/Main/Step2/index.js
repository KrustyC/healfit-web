import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import withApolloClient from 'hoc/withApolloClient';
import Heading from 'uikit/elements/Heading';

import Form from 'uikit/blocks/Form';
import Wizard from 'components/Wizard';
import AddIngridient from './AddIngridient';
import Ingridients from './Ingridients';

const SEARCH_INGRIDIENTS = gql`
  query ingridients($name: String) {
    ingridientsByName(name: $name) {
      id
      name
    }
  }
`;

class Step2 extends Component {
  static propTypes = {
    values: PropTypes.shape({
      ingridients: PropTypes.array.isRequired,
    }).isRequired,
    client: PropTypes.shape({
      query: PropTypes.func.isRequired,
    }).isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  state = {
    availableIngridients: [],
    currentIngridient: null,
  };

  onSearchIngridient = async value => {
    if (value.length === 0) {
      return this.setState({ availableIngridients: [] });
    }

    try {
      const result = await this.props.client.query({
        query: SEARCH_INGRIDIENTS,
        variables: { name: value },
      });

      return this.setState({
        availableIngridients: result.data.ingridientsByName,
      });
    } catch (error) {
      return error;
      // return console.log('error', error);
    }
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
    const { currentIngridient, availableIngridients } = this.state;

    return (
      <Wizard.Page>
        <Heading level="h1">Ingridients</Heading>
        <Heading />
        <Form.FormGroup>
          <Form.RemoteFilter
            placeholder="Search for ingridients..."
            list={availableIngridients}
            labelField="name"
            emptyMessage="No Ingridients Avaialable"
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

export default withApolloClient(Step2);
