// import redis from 'redis';

// const redisClient = redis.createClient({
//   host: process.env.REDIS_HOST || '127.0.0.1', 
//   port: process.env.REDIS_PORT || 6379,         
//   password: process.env.REDIS_PASSWORD || null  
// });

// redisClient.on('error', (err) => {
//   console.error('Error al conectar a Redis:', err);
// });

// redisClient.connect()
//   .then(() => console.log('Conectado a Redis'))
//   .catch((err) => console.error('Error de conexión a Redis:', err));

// export default redisClient
