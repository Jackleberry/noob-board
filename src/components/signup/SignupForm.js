import React, {Component, PropTypes} from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import ValidateInput from '../../validations/signup';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state =
    // {
    //   username: '',
    //   email: '',
    //   password: '',
    //   passwordConfirmation: '',
    //   isLoading: false,
    //   errors: {}
    // };
    {
      username: 'Jackie',
      email: 'jackie@gmail.com',
      password: '',
      passwordConfirmation: '',
      isLoading: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  isValid() {
    const {errors, isValid} = ValidateInput(this.state);

    if (!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (1 == 1 || this.isValid()) {
      this.setState({errors: {}, isLoading: true});
      this.props.signup(this.state).then(
        res => {
          this.props.addFlashMessage({
            type: "success",
            text: "You have signed up successfully."
          });
          this.context.router.push('/noobs');
        },
        err => {
          if (err.response) {
            this.setState({ errors: err.response.data, isLoading: false });
          } else {
            this.props.addFlashMessage({
              type: "failure",
              text: "Error signing up user."
            });
          }
        }
      );
    }
  }

  render() {
    const {username, email, password, passwordConfirmation, isLoading, errors} = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <TextFieldGroup
          field="username"
          value={username}
          label="Username"
          onChange={this.onChange}
          error={errors.username}
        />

        <TextFieldGroup
          field="email"
          value={email}
          label="Email"
          onChange={this.onChange}
          error={errors.email}
        />

        <TextFieldGroup
          field="password"
          value={password}
          label="Password"
          onChange={this.onChange}
          error={errors.password}
          type="password"
        />

        <TextFieldGroup
          field="passwordConfirmation"
          value={passwordConfirmation}
          label="Password Confirmation"
          onChange={this.onChange}
          error={errors.passwordConfirmation}
          type="password"
        />


        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Sign Up
          </button>
        </div>

      </form>
    );
  }
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
};

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, { signup, addFlashMessage })(SignupForm);
