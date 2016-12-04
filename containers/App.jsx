import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyRawTheme from '../src/myThemeFile';

class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <div>
        <Header />
				<Counter value={value} actions={actions} />
      </div>
    )
  }
	static get childContextTypes() {
    return { muiTheme: PropTypes.object.isRequired };
  }
  getChildContext(){
    return {  muiTheme: getMuiTheme(MyRawTheme)};
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateProps(state) {
  return state.counter
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(App)
