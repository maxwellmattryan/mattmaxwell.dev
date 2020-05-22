const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = Schema({
    _id:            { type: Schema.Types.ObjectId                   },
    title:          { type: String, required: true, unique: true    },
    subtitle:       { type: String, required: true                  },
    category:       { type: String, required: true                  },
    author:         { type: String, required: true                  },
    description:    { type: String, required: true                  },
    content:        { type: String, required: true                  },
    imageURLs:      [
                        {url: { type: String, required: true }}
                    ],    
    created:        { type: Date                                    },
    updated:        { type: Date, default: Date.now                 }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;