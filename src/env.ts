export default {
  MONGODB_URI: process.env.NODE_ENV === 'production' ? 'mongodb://localhost/vws' : process.env.MONGODB_URI
}
