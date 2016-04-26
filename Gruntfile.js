module.exports = function(grunt) {

  grunt.task.loadNpmTasks('assemble');

/* ==========================================================================
   タスク一覧
   ========================================================================== */
  grunt.initConfig({
    assemble: {

    	lsn1: {
    		options: {
    			data: ['config.yml']
    		},
    		files: [
	    		{
	    			src: 'src/lsn1/1.hbs',
	    			dest: 'dest1/1.html'
	    		}
    		]
    	},

    	lsn2: {
    		options: {
    			data: ['config.yml'],
    			partials: 'src/lsn2-4/partials/*.hbs'
    		},
    		files: [
	    		{
	    			src: 'src/lsn2-4/1.hbs',
	    			dest: 'dest2/1.html'
	    		}
    		]
    	},

    	lsn3: {
    		options: {
    			data: ['config.yml'],
    			partials: 'src/lsn2-4/partials/*.hbs'
    		},
    		files: [
	    		{
	    			src: 'src/lsn2-4/1.hbs',
	    			dest: 'dest3/1.html'
	    		}
    		]
    	},

    	lsn5: {
    		options: {
    			data: ['config.yml'],
    			partials: 'src/lsn5/partials/*.hbs',
    			layout: 'src/lsn5/default.hbs',
    			flatten: true
    		},
    		files: [
	    		{
	    			src: 'src/lsn5/body/*.hbs',
	    			dest: 'dest5/'
	    		}
    		]
    	}

    } //assemble

  }); // grunt.initConfig

/* ==========================================================================
   タスク定義
   ========================================================================== */
  // ↓（'ターミナルで実行するコマンド名', ['実行したいgruntのタスク名']）
  grunt.registerTask('lsn1', ['assemble:lsn1']);
  grunt.registerTask('lsn2', ['assemble:lsn2']);
  grunt.registerTask('lsn3', ['assemble:lsn3']);
  grunt.registerTask('lsn5', ['assemble:lsn5']);

};
