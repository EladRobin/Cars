import jwt from 'jsonwebtoken'
// user == {_id,role} - > from users object
export const createJWT = ({ _id, role }) => {
    // jwt.sign(payload,tokenSecretKey, { expiresIn: '20m'})
    const token = jwt.sign({ _id, role }, 'yarin', { expiresIn: '20m' })
    return token;
}