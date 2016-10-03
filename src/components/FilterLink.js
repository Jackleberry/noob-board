import React, { PropTypes, Component } from 'react';
import Link from './Link';

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { filter, children, store } = props;
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
  store: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
};

export default FilterLink;
