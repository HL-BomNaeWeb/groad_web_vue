module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:{
      '/api':{
        target:'210.119.225.18:3000',
        changeOrigin: true,
        pathRewirte:{
          '^/api':''
        }
      }
    }
  },
outputDir:'../groad_express/public',
}
