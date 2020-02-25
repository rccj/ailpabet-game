var vm = new Vue({
  el: '#app',
  data: {
    title: 'ㄅㄆㄇ',
    alphabets: ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'],
    alphabetList: [],
    countDown: 10

  },

  created: function () {
    this.getAlphabetList()
  },

  methods: {
    getAlphabetList: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList.push({ alphabet: this.alphabets[i], deleted: false })
      }
    },
    deleteAlph: function (item) {
      item.deleted = true
    },

    clearAll: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList[i].deleted = false
      }
      this.countDown = 10
    },

    resetNum: function(){
      clearTimeout(countDownTimer)
      this.countDown = 10
    },

    countDownTimer:function() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1  
          this.countDownTimer()
        }, 1000)
      }
    }
  }


})

