const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  posts: Array,
  messages: Array,
  phone: String,
  notifs: Array,
  follows: Array,
  subscriptions: Array,
  friends: Array,
  img: { data: Buffer, contentType: String }
});

const Users = mongoose.model('Users', userSchema);

const showSchema = mongoose.Schema({
  name: String,
  id: Number,
  posts: Array,
  subscriberCount: Number,
  backdropPath: String,
  genreIds: Array,
  overview: String,
  posterPath: String,
  releaseDate: String,
  title: String,
  voteAverage: Number,
});

const Shows = mongoose.model('Shows', showSchema);

const postSchema = mongoose.Schema({
  user: String,
  show: String,
  title: String,
  content: String,
  comment: Array,
  createdAt: Date,
  likes: Array,
});

const Posts = mongoose.model('Posts', postSchema);

const replySchema = mongoose.Schema({
  user: String,
  content: String,
  comment: Array,
  createdAt: Date,
  likes: Array,
});

const Replys = mongoose.model('Replys', replySchema);

const themeSchema = mongoose.Schema({
  id: Number,
  palette: Object,
  neutral: String,
  backdropUrl: String,
});

const Themes = mongoose.model('Themes', themeSchema);

module.exports = {
  Users,
  Shows,
  Posts,
  Replys,
  Themes
};
