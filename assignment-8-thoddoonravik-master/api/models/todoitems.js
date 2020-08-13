"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todoitem object.
 */
let ToDoItemSchema = new Schema(
  {
    /**
     * todoitem created date.
     */
    createdDate: {
      
      type: Date,
      default: Date.now()
    },
    /**
     * todoitem content.
     */
    taskContent: {
      type: String,
      text: true
    },
    /**
     * todo Item Place
     * 
     */
    Location:{
      type: String,
      text: true
    },
    /**
     * ToDo Item Complete status
     */
    completed: {
      type: Boolean,
      default: false
    },
    /**
     * todoitem desciption.
     */
    description: {
      type: String,
      text: true
    },
    
 },
  {
    versionKey: false
  }
);
// Duplicate the id field as mongoose returns _id field instead of id.
ToDoItemSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ToDoItemSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("todoitems", ToDoItemSchema);
