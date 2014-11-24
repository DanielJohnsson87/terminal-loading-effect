module.exports = {
    prod: {
        options: {
            mangle          : true,
            preserveComments: false,
            beautify        : false,
            compress : {
                drop_console: true
            }
        },
        files  : [
            { '../library/js/min/concat.js': ['../library/js/concat/**/*.js'] },
            {
                src    : '../library/js/singles/**/*.js',
                dest   : '../library/js/min/',
                expand : true,
                flatten: true
            }
        ]
    },
    concat : {
        options: {
            mangle          : false,
            preserveComments: true,
            beautify        : true
        },
        files  : [
            { '../library/js/min/concat.js': ['../library/js/concat/**/*.js'] }
        ]
    },
    singles : {
        options: {
            mangle          : false,
            preserveComments: true,
            beautify        : true
        },
        files  : [
            {
                src    : '../library/js/singles/**/*.js',
                dest   : '../library/js/min/',
                expand : true,
                flatten: true,
            }
        ]
    }
};