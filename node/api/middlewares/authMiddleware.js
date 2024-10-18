import jwt from 'jsonwebtoken';
// import redisClient from '../../config/redisConfig.js'

const authMiddleware = async (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso denegado' });
    }

    try {
        // const isRevoked = await redisClient.get(token);
        // if (isRevoked) {
        //     return res.status(401).json({ msg: 'Token revocado' });
        // }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded.usuario;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token inválido' });
    }
};


export default authMiddleware;