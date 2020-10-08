import React, { Component } from 'react'
import Router from 'next/router'
import checkLoggedIn from './checkLoggedIn'
export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        AuthComponent.getInitialProps &&
        (await AuthComponent.getInitialProps(ctx))
      let { loggedInUser } = await checkLoggedIn(ctx.client)
      if (!loggedInUser) {
        Router.push('/users/login')
      }
      this.setState({ isLoading: false, user:loggedInUser })
      // Return props.
      return { ...pageProps }
    }
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true, 
        loggedInUser:null
      }
    }
    async componentDidMount() {
      let { loggedInUser } = await checkLoggedIn(this.props.client)
      if (!loggedInUser) {
        Router.push('/users/login')
      }
      this.setState({ isLoading: false, user:loggedInUser })
    }
    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
            <AuthComponent {...this.props} loggedInUser={this.state.loggedInUser} />
          )}
        </div>
      )
    }
  }
}