import React, { PropTypes, Component } from 'react';
import Link from './Link';

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { filter, children } = props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={() =>
          store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter
          })
        }>{children}</Link>
    );
  }
}

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

FilterLink.contextTypes = {
  store: PropTypes.object.isRequired
};

export default FilterLink;
