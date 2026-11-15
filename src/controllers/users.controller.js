import { User } from '../model/users.model.js';

// insert a new user
export const createUser = async (req, res) => {
    const { lastName, firstName } = req.body;
    try {
        const user = await User.create(
            {
                fullName: `${firstName} ${lastName}`
            }
        );
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}
// get users by id
export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}