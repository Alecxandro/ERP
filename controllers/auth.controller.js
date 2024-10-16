import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, email, password: hashPassword })
        await user.save()
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
