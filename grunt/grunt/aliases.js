module.exports = {
    prod   : [
        'uglify:prod',
        'compass:dist',
        'notify:watchJS',
        'notify:watchSASS',
    ],
    default: [
        'notify:watch',
        'watch'
    ]
};