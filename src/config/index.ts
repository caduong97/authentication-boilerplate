import devConfig from './devConfig'
import _ from 'lodash'

let envConfig = devConfig

// switch (process.env.NODE_ENV) {
//   case 'development':
//     envConfig = devConfig
//     break
//   case 'production':
//     envConfig = prodConfig
//     break
//   case 'test':
//     envConfig = testConfig
//     break
//   default:
//     envConfig = devConfig
//     break
// }

const baseConfig = {
}

const config = _.merge(baseConfig, envConfig)

export default config

