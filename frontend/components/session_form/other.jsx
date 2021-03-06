
logoButton() {
  if (this.props.currentUser) {
    return (
      <div className="logo">
        <img className="logo"
          src="app/assets/images/noise_nimbus_purple.png"
          onClick={this.props.history.push(`/users/${this.props.currentUser.username}`)}
        />
      </div>
    );
  } else {
    return (
      <div className="logo">
        <img className="logo-button"
          src="app/assets/images/noise_nimbus_purple.png"
        />
      </div>
    );
  }
}

  sessionLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up Instead!</Link>;
    } else {
      return <Link to="/login">Log In Instead!</Link>;
    }
  }


  class Welcome extends React.Component {
    constructor(props) {
      super(props);

      // this.state = {
      //   signupModalIsOpen: false,
      //   loginModalIsOpen: false
      // };
      //
      // this.openSignupModal = this.openSignupModal.bind(this);
      // this.afterOpenSignupModal = this.afterOpenSignupModal.bind(this);
      // this.closeSignupModal = this.closeSignupModal.bind(this);
      //
      // this.openLoginModal = this.openLoginModal.bind(this);
      // this.afterOpenLoginModal = this.afterOpenLoginModal.bind(this);
      // this.closeLoginModal = this.closeLoginModal.bind(this);
    }

    // openSignupModal() {
    //   this.setState({signupModalIsOpen: true});
    // }
    //
    // afterOpenSignupModal() {
    //
    // }
    //
    // closeSignupModal() {
    //   this.setState({ signupModalIsOpen: false });
    // }
    //
    // signupModal() {
    //   return (
    //     <div>
    //       <button onClick={this.openSignupModal}>Sign Up</button>
    //       <Modal className="session-buttons" id="signup-button"
    //         isOpen={this.state.signupModalIsOpen}
    //         onAfterOpen={this.afterOpenSignupModal}
    //         onRequestClose={this.closeSignupModal}
    //         contentLabel="Signup Modal"
    //       >
    //         <h2>Hello</h2>
    //         <div>I am a modal
    //           <SignupFormContainer />
    //         </div>
    //
    //       </Modal>
    //
    //     </div>
    //   );
    // }
    //
    // openLoginModal() {
    //   this.setState({loginModalIsOpen: true});
    // }
    //
    // afterOpenLoginModal() {
    //
    // }
    //
    // closeLoginModal() {
    //   this.setState({ loginModalIsOpen: false });
    // }
    //
    // loginModal() {
    //   return (
    //     <div>
    //       <button onClick={this.openLoginModal}>Log In</button>
    //       <Modal className="session-buttons" id="login-button"
    //         isOpen={this.state.loginModalIsOpen}
    //         onAfterOpen={this.afterOpenLoginModal}
    //         onRequestClose={this.closeLoginModal}
    //         contentLabel="Login Modal"
    //       >
    //         <h2>Hello</h2>
    //         <div>I am a modal
    //           <LoginFormContainer welcomeState={this.state} />
    //         </div>
    //
    //       </Modal>
    //
    //     </div>
    //   );
    // }


    sessionLinks() {
      return (
        <nav className='signup-login'>
          <Link to='/signup'>Create Account</Link>
          &nbsp;or&nbsp;
          <Link to='/login'>Log In</Link>
        </nav>
      );
    }

    welcomeMessage(currentUser, logout) {
      return (
        <div className="welcome-message">
          <h1>Welcome, {currentUser.username}</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    }

    determineWelcomeMessage() {
      const { currentUser, logout } = this.props;
      return (
        currentUser ? this.welcomeMessage(currentUser, logout) : this.sessionLinks()
      );
    }
