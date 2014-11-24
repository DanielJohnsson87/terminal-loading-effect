module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    require('load-grunt-config')(grunt);
   // grunt.loadNpmTasks('assemble-less');
};

