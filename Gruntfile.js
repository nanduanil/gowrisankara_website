module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ["Release","GruntModify"],
        force: true,
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
        dest: 'GruntModify/index.html'
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
        dest: 'GruntModify/testimonial.html'
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
        dest: 'GruntModify/treatment.html'
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
        dest: 'GruntModify/attraction.html'
      },   
      gallery: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'gallery.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'GruntModify/gallery.html'
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
        dest: 'GruntModify/contact_us.html'
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
        dest: 'GruntModify/about_us.html'
      },   
      reach_us: {
        // the files to concatenate
        src: [
          //include libs
          'base_template_head.html',
          'reach-us.html',
          'base_template_foot.html',
        ],
        // the location of the resulting JS file
        dest: 'GruntModify/reach-us.html'
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
          {expand: true, src: ['config.xml'], dest: 'Release/'},
        ]
      },

      index: {
          expand: true, src: ['GruntModify/index.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>',
                          '<title>Gowrisankara : House Of Ayurveda , Ayurvedic Homestay, Kerala</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Gowrisankara:House Of Ayurveda.In Kerala which is also commonly known as "Gods own country",you can find your ayurvedic homestay nicely placed amidst coconut palms and tropical splendour. The principal practitioner is Dr Mini Joy, and Gowrisankara is her family home. She possesses a Bachelors degree in Science (BSc) from the University of Kerala, as well as a Bachelor of Ayurvedic Medicine and Surgery (BAMS) and to date has 25 years experience as a traditional healer. We produce our own medicines and server homely food.>');
                content = content.replace('<meta name="keyword" content="">',
                          '<meta name="keyword" content="Homestay Kerala, Ayurvedic Massage, Homely Food, Ayurvedic Doctor, Homestay in Allepey, Ayurvedic Homestay, Gowrisankara">');
                
                return content;
              }
            },           
      },
      about_us: {
          expand: true, src: ['GruntModify/about_us.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : About Us</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Dr. Mini Joy has attained a Bachelors Degree in Science (BSc) from the University of Kerala and a medical degree in Ayurveda. The mother of two children has practised Ayurveda for the past 25 years. During the last 5 years she has created her own home-stay for people to be completely cared for while in therapy. Dr. Mini’s family, Vallabhassery, is one of Kerala’s well-known aristocratic Ayurveda families, who gained knowledge of Ayurveda about two centuries ago.">');
                return content;
              }
            },           
      },
      testimonial: {
          expand: true, src: ['GruntModify/testimonial.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : Testimonials</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Testimonials from the visitors to our Ayurvedic Homestay in Kerala. They talk about the homely food we server and the authentic ayurvedic medicies">');
                return content;
              }
            },           
      },
      treatment: {
          expand: true, src: ['GruntModify/treatment.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : Treatments</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Panchakarma,Uzhichil,Abhyangam,Pizhichil,Navarakizhi,Sirovasthi,Dhara,Udvarthanam">');
                return content;
              }
            },           
      },
      contact_us: {
          expand: true, src: ['GruntModify/contact_us.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : Contact Us</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Gowrisankara Ayurvedic Homestay in Kerala. Contact Us through our mobile number or email us or send a message from this page. We will get back to you at the soonest.">');
                return content;
              }
            },           
      },
      gallery: {
          expand: true, src: ['GruntModify/gallery.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : Gallery</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="Facilities at Gowrisankara Ayurvedic Homestay in Kerala.">');
                return content;
              }
            },           
      },
      reach_us: {
          expand: true, src: ['GruntModify/reach-us.html'],dest: 'Release/',flatten:true,
            options: {
              process: function (content, srcpath) {
                content = content.replace('<title></title>','<title>Gowrisankara : Reach Us</title>');
                content = content.replace('<meta name="description" content="">',
                          '<meta name="description" content="">');
                return content;
              }
            },           
      },      
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean','concat','copy']);
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