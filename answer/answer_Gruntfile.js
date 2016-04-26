module.exports = function(grunt) {

  grunt.task.loadNpmTasks('assemble');

/* ==========================================================================
   タスク一覧
   ========================================================================== */
  grunt.initConfig({
    assemble: {

      //『 lesosn1 : YAMLとhandlebarsを用いてテンプレートを1つコンパイルしてみよう』
      lsn1 :{
        options: {
          data: ['config.yml']
        },
        files: [
          {
            // ↓ src/pages/1.hbsをコンパイルしてdest/1.htmlに出力
            src: 'src/lsn1/1.hbs', // source file
            dest: 'dest1/1.html' // compile to
          }
        ]
      },

      //『 lesosn2 : partialsを使って、切り分けたheaderとfooterのファイルを読みこんでみよう』
      lsn2: {
        options: {
          data: ['config.yml'],
          // ↓ partialsオプションを付け加え、headerとfooterを読み込む
          partials: 'src/lsn2-4/partials/*.hbs'
        },
        files: [
          {
            // ↓ headerとfooterを取込む元のファイル
            src: 'src/lsn2-4/1.hbs',
            dest: 'dest2/1.html'
          }
        ]
      },

      //『 lesosn3 : YAML front matterでページ固有の変数を定義してみよう』
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

      //『 lesosn4 : helperのisを使ってみよう』
      lsn4: {
        options: {
          data: ['config.yml'],
          partials: 'src/lsn2-4/partials/*.hbs'
        },
        files: [
          {
            src: 'src/lsn2-4/1.hbs',
            dest: 'dest4/1.html'
          }
        ]
      },

      //『 lesosn5 : layoutsで共通のレイアウトを定義してみよう』
      lsn5: {
        options: {
          data: ['config.yml'],
          partials: 'src/lsn5/partials/*.hbs',
          // 新しくオプションにlayoutを追加
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

    } // assemble

  }); // grunt.initConfig

/* ==========================================================================
   タスク定義
   ========================================================================== */
  // ↓（'ターミナルで実行するコマンド名', ['実行したいgruntのタスク名']）
  grunt.registerTask('lsn1', ['assemble:lsn1']);
  grunt.registerTask('lsn2', ['assemble:lsn2']);
  grunt.registerTask('lsn3', ['assemble:lsn3']);
  grunt.registerTask('lsn4', ['assemble:lsn4']);
  grunt.registerTask('lsn5', ['assemble:lsn5']);

};
