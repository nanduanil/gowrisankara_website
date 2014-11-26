module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ["Release"]
      },
    },

    copy: {
      build: {
        files: [
          {expand: true, src: ['bin/**'], dest: 'Release/'},
          {expand: true, src: ['css/**'], dest: 'Release/'},
          {expand: true, src: ['partials/**'], dest: 'Release/'},
          {expand: true, src: ['js/**'], dest: 'Release/'},
          {expand: true, src: ['img/**'], dest: 'Release/'},
          {expand: true, src: ['font-awesome-4.1.0/**'], dest: 'Release/'},
        ]
      },
    },

    concat:{
      index: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'index.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/index.html'
      },
      testimonial: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'testimonial.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/testimonial.html'
      },
      treatment: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'treatment.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/treatment.html'
      },
      attraction: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'attraction.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/attraction.html'
      },    
      contact: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'contact_us.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/contact_us.html'
      },
      about: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'about_us.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'Release/about_us.html'
      },   
    },


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean','copy','concat']);
};

/*
            rename: function(dest, src) {
              return dest + src.replace('dash_exp.html', "POS_Dash.html");
            },
content.replace("<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>","");
                content.replace("script type="text/javascript" src="js/angular.min.js"></script>","");
                content.replace("<script type="text/javascript" src="js/angular-route.min.js"></script>","");
                content.replace("<script type="text/javascript" src="js/ng-grid.min.js"></script>","");
*/