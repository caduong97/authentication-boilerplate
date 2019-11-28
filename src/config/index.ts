import devConfig from './devConfig'
import _ from 'lodash' //package for common utils

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
//what usually contains: types of config that doesn't have to be differentiated for dev, prod and test purposes

const config = _.merge(baseConfig, envConfig)

export default config

