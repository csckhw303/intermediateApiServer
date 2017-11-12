// Standup Model

var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    id: {
        type: String,
        required: true,
        default: 'class-id'	},
    title: {
        type: String,
        required: true,
        default: 'Class title'},
    watchHref: {
        type: String,
        required: true,
        default: ''},
    authorId: {
        type: String,
        required: true,
        default: ''},
    length: {
        type: String,
        required: true,
        default: '0:00'},
    category: {
        type: String,
        default: ''}
});

module.exports = mongoose.model('Course', CourseSchema );