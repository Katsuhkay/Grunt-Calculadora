const { match } = require("assert");

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //arquivo para compilar o LESS
        less: {
            //Arquivos para desenvolvimento 
            development: {
                files: { 
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            //Arquivos para produção/final
            production: {
                //comprimir o arquivo
                options: {
                    compress: true,
                },
                //destino e origem
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/main.less'],
                tasks: ['less:development']
            }
        },
        concurrent: {
            //indica as tarefas
            target: ['less:production', 'htmlmin', 'replace:PastaDist', 'clean', 'uglify']
        },
        replace: {
            PastaDev: {
                //Termos que ocorrerá a substituição
                options: {
                    patterns: [
                        {
                            //Oque será substituido e Pelo q será subsituido
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDEREÇO_DO_JS',
                            replacement: './scripts/script.js'
                        }
                    ]
                },
                //Onde ele irá fazer a substituição
                files: [
                    {
                        //Expandir e Achatar
                        expand: true,
                        flatten: true,
                        //Os arquivos de substituir
                        src: ['src/index.html'],
                        dest: 'dev/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/scripts/script.js'],
                        dest: 'dev/scripts'
                    }
                ]
            },
            PastaDist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDEREÇO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDEREÇO_DO_JS',
                            replacement: './scripts/script.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    },
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            PastaDiv: {
                files: {
                    'dist/scripts/script.min.js': 'src/scripts/**/*.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin', 'replace:PastaDist', 'clean', 'uglify'])
}