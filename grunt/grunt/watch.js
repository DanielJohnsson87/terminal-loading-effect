module.exports = {
    jsConcat : {
        files: ['../library/js/concat/**/*.js'],
        tasks: ['uglify:concat', 'notify:watchJS']
    },
    jsSingles : {
        files: ['../library/js/singles/**/*.js'],
        tasks: ['uglify:singles', 'notify:watchJS']
    },
    css: {
        files: ['../library/scss/**/*.scss'],
        tasks: ['compass:dev', 'notify:watchSASS']
    }
};