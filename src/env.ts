export default {
  MONGODB_URI: process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/vws'
}
