// what might be here: e.g: url to dev database

const devConfig = {
  dbUrl: `mongodb+srv://${process.env.DEV_DB_USERNAME}:${process.env.DEV_DB_PASSWORD}@${process.env.DEV_DB_URL}/${process.env.DEV_DB_NAME}?retryWrites=true&w=majority`
}


export default devConfig