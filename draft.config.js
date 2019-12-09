const path = require('path')

module.exports = {
  ignore: [
    /\.stories\./,
    /\.test\./,
    /\.config\./,
  ],

  // wrapperPath: '',

  // additionalReactModules: [],

  /*
  babel: {
    ... same config you would put into a webpack config for babel-loader
  }
  */

  middleware: (app) => {
    // Generic middleware, completely pointless other than to show that it works.
    app.use((req, res, next) => {
      // Authentication, rerouting, cookie cronching - whatever...
      next()
    })

    // The most important route to add for our app. RIP, Gerome. That cat never should have got you.
    app.use('/moon-bear', (req, res) => {
      res.sendFile(path.resolve('.', 'src/images/moonbear.jpg'))
    })
  }
}