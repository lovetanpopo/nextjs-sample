import React from 'react'

class Home extends React.Component {
  static async getInitialProps(ctx) {
    console.log('run in : getInitialProps')
    console.log(ctx)
    return {
      hoge: undefined,
      fuga: 'live',
      moge: null
    }
  }

  render() {
    console.log('run in : Home()')
    console.log(this.props)
    return <div>Hello!!!</div>
  }
}

export default Home