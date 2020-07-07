const { gql } = require("apollo-server");
// Schema definition
const typeDefs = gql`
	type User {
		id: ID
		name: String
		role_id: ID
		role: Role
	}

	type Role {
		id: ID
		name: String
		users: [User]
	}

	type Query {
		users: [User]
		roles: [Role]
	}

	type Mutation {
		createUser(name: String, role_id: ID): User
		createRole(name: String): Role
	}
`;

module.exports = {
	typeDefs,
};
