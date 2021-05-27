module.exports = {
    "development": {
        host: "localhost",
        user: "root",
        password: "developer",
        db: "academysoft_db",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
    
};