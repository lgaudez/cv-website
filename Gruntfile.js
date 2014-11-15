module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        dirs: {
            'bower_components': '/bower_components',
            'js': '/js',
            'tmp': '/grunt/tmp',
            'css': '/css',
            'dist' : '/grunt/dist'
        },

        src: {
            output: {
                dist : '<%= dirs.dist %>'
            },

            input: {
                js: '<%= dirs.js %>',
                css: '<%= dirs.css %>',
                bower_components: '<%= dirs.bower_components %>'
            }
        },

        /********************************** Task **********************************/

        clean: {
            options: { force: true },
            before: ['<%= dirs.dist %>']
        },

        bower: {
            install: {
                options: {
                    targetDir: '<%= dirs.bower_components %>',
                    cleanTargetDir: true,
                    layout: 'byComponent',
                    install: true,
                    copy: false,
                    verbose: true
                }
            }
        }

//        concat: {
//            options: {
//                stripBanners: {block: true, line: true},
//                separator: '\n'
//            },
//            js: {
//                src: [
//                    '<%= src.input.js %>/**/*.js'
//                ],
//                dest: '<%= dirs.tmp %>/cv-app.js'
//            },
//            libsHeader: {
//                src: [
//                    '<%= dirs.vendor %>/jquery/dist/jquery.min.js',
//                    '<%= dirs.vendor %>/bootstrap/dist/js/bootstrap.min.js'
//                ],
//                dest: '<%= src.output.dist %>/js/libs-header.min.<%= hashBuild %>.js'
//            },
//            libsFooter: {
//                src: [
//                    '<%= dirs.vendor %>/ng-file-upload/angular-file-upload-shim.min.js',
//                    '<%= dirs.vendor %>/angular/angular.min.js',
//                    '<%= dirs.vendor %>/angular-bootstrap/ui-bootstrap-tpls.min.js',
//                    '<%= dirs.vendor %>/angular-cookies/angular-cookies.min.js',
//                    '<%= dirs.vendor %>/angular-resource/angular-resource.min.js',
//                    '<%= dirs.vendor %>/ng-file-upload/angular-file-upload.min.js',
//                    '<%= dirs.vendor %>/angular-i18n/angular-locale_fr.js',
//                    '<%= dirs.vendor %>/angular-i18n/angular-locale_en.js',
//                    '<%= dirs.vendor %>/angular-translate/angular-translate.min.js',
//                    '<%= dirs.vendor %>/angular-ui-router/release/angular-ui-router.min.js'
//                ],
//                dest: '<%= src.output.dist %>/js/libs-footer.min.<%= hashBuild %>.js'
//            }
//        },

//        less: {
//            app: {
//                options: {
//                    compress: true,
//                    cleancss: true,
//                    report: 'gzip',
//                    strictImports: true
//                },
//                files: {
//                    '<%= src.output.dist %>/css/tnd-app.<%= hashBuild %>.css': '<%= src.input.css %>/tnd-public.less'
//                }
//            }
//        },

//        uglify: {
//            dist: {
//                files: {
//                    '<%= src.output.dist %>/js/tnd-app.min.<%= hashBuild %>.js': '<%= dirs.tmp %>/tnd-app.js'
//                }
//            }
//        },
    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', 'serve');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.registerTask('full', ['clean:before', 'bower']);

};