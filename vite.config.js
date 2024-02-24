const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080,
     // Abilita le impostazioni CORS per il server di sviluppo Vite
     cors: true
  }
}
