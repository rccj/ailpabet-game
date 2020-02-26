var vm = new Vue({
  el: '#app',
  data: {
    title: 'ㄅㄆㄇ',
    alphabets: ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'],
    alphabetList: [],
    countDownFrom: 10

  },

  created: function () {
    this.getAlphabetList()
  },

  methods: {
    getAlphabetList: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList.push({ alphabet: this.alphabets[i], deleted: false, counting: false })
      }
    },
    deleteAlph: function (item) {
      item.deleted = true
    },

    clearAll: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList[i].deleted = false
      }
      clearTimeout(this.time)
      this.countDownFrom = 10
    },


    countDownTimer: function (item) {
      if (item.counting === false) {
        clearTimeout(this.time)
        item.counting = true
        this.countDownFrom = 10
        this.countingDown()
      }

    },


    countingDown: function () {
      if (this.countDownFrom > 0) {
        let mytime = this
        this.time = setTimeout(() => {
          this.countDownFrom -= 1
          this.countingDown()
        }, 1000)
      }
    },


  }


})

