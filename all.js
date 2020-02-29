var vm = new Vue({
  el: '#app',
  data: {
    title: 'ㄅㄆㄇ',
    alphabets: ['ㄅ;49', 'ㄆ;81', 'ㄇ;65', 'ㄈ;90', 'ㄉ;50', 'ㄊ;87', 'ㄋ;83', 'ㄌ;88', 'ㄍ;69', 'ㄎ;68', 'ㄏ;67', 'ㄐ;82', 'ㄑ;70', 'ㄒ;86', 'ㄓ;53', 'ㄔ;84', 'ㄕ;71', 'ㄖ;66', 'ㄗ;89', 'ㄘ;72', 'ㄙ;78', 'ㄧ;85', 'ㄨ;74', 'ㄩ;77', 'ㄚ;56', 'ㄛ;73', 'ㄜ;75', 'ㄝ;188', 'ㄞ;57', 'ㄟ;79', 'ㄠ;76', 'ㄡ;190', 'ㄢ;48', 'ㄣ;80', 'ㄤ;186', 'ㄥ;191', 'ㄦ;189'],
    alphabetList: [],
    countDownFrom: 10

  },

  created: function () {
    this.getAlphabetList()
  },

  methods: {
    // keyupEventHandler(e) {


    //   const c = this.alphabetList.find( item => item.keyCode === e.keyCode )
    //   this.countDownTimer(c)

    // },
    keyupEventHandler(e) {
      for (let i=0; i < this.alphabets.length; i++) {
        if (e.keyCode == this.alphabetList[i].keyCode) {
          this.countDownTimer(this.alphabetList[i])
        }
      }

    },
    getAlphabetList: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        const character = this.alphabets[i].split(';')
        this.alphabetList.push({
          alphabet: character[0],
          deleted: false,
          keyCode: parseInt(character[1], 10) // 將字串數字轉為number型別
        })
      }
    },

    clearAll: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList[i].deleted = false;
      }
      clearTimeout(this.time)
      this.countDownFrom = 10
    },


    countDownTimer: function (item) {
      console.log(item)
      item.deleted = true
      if (item.deleted === true) {
        clearTimeout(this.time)
        this.countDownFrom = 10
        this.countingDown()
      }

    },


    countingDown: function () {
      if (this.countDownFrom > 0) {
        this.time = setTimeout(() => {
          this.countDownFrom -= 1
          this.countingDown()
        }, 1000)
      }
    },


  },

  mounted() {
    addEventListener('keyup', this.keyupEventHandler)
  },

  beforeDestroy() {
    removeEventListener(this.keyupEventHandler)
  }


})

