import React, { Component } from 'react'
import Router from 'next/router'
import checkLoggedIn from './checkLoggedIn'
import initApollo from './initApollo'
import {getCookie} from './session'
function getToken(context = {}) {
	if(context.req)
		return getCookie('token',context.req)
	return getCookie('token', null)
	return context.req && context.req.headers
		? context.req.headers.cookie
		: document.cookie
}
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
      var appoloClient =  initApollo(
				{},
				{
					getToken: () => getToken({})
				}
			)
      let { loggedInUser } = await checkLoggedIn(appoloClient)
      if (!loggedInUser) {
        Router.push('/users/login')
      }
      console.log(loggedInUser)
      this.setState({ isLoading: false, loggedInUser:loggedInUser })
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
