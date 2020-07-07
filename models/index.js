const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	name: String,
	role_id: String,
});
const RoleSchema = mongoose.Schema({
	name: String,
});

const UserModel = mongoose.model("User", UserSchema);
const RoleModel = mongoose.model("Role", RoleSchema);

module.exports = { user: UserModel, role: RoleModel };
