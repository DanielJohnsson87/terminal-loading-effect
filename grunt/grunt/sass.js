module.exports = {
    dev : {
        options: {
            style: 'expanded'
        },
        files  : [
            {
                cwd : '../library/scss',
                src : ['*.scss'],
                dest: '../library/css',
                ext : '.css'
            },
            {
                '../style.css': '../library/scss/style.scss',
            }
        ]
    },
    prod: {
        options: {
            style: 'compressed'
        },
        files  : [
            {
                cwd : '../library/scss',
                src : ['*.scss'],
                dest: '../library/css',
                ext : '.css'
            },
            {
                '../style.css': '../library/scss/style.scss',
            }
        ]
    }
};