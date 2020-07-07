const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./graph/typeDefs.js");
const { resolvers } = require("./graph/resolvers.js");
const mongoose = require("mongoose");

// Mongoose connection
const settings = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect("mongodb://localhost:27017/apollo-app", settings);
mongoose.connection.once("open", () => {
	console.log("mongoose connection success!");
});

// Pass schema definition and resolvers to the
// ApolloServer constructor
const server = new ApolloServer({ typeDefs, resolvers });

// Launch the server
server.listen({ port: 1234 }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
