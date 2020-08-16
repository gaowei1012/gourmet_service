module.exports = {
    port: 5062,
    host: '127.0.0.1',
    database: {
        DATABASE: 'gourmet',
        USERNAME: 'root',
        PASSWORD: 'gao129231wei',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,
    jwtSecret: 'jwtSecret',
}