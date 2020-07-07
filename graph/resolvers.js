const _ = require("lodash");
const { user, role } = require("../models");

// Resolver map
const resolvers = {
	Query: {
		users() {
			return user.find();
		},
		roles() {
			return role.find();
		},
	},
	Mutation: {
		createUser(_, args) {
			const { name, role_id } = args;
			return user.create({ name, role_id });
		},
		createRole(_, args) {
			const { name } = args;
			return role.create({ name });
		},
	},
	User: {
		role(parent) {
			return role.findById(parent.role_id);
		},
	},
	Role: {
		users(parent) {
			return user.find({ role_id: parent.id });
		},
	},
};

module.exports = { resolvers };
