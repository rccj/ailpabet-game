var vm = new Vue({
  el: '#app',
  data: {
    title: 'ㄅㄆㄇ',
    alphabets: ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ', 'ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ', 'ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ', 'ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'],
    alphabetList: [],

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

    // clearAll: function () {
    //   alphabetList.deleted = false
    // },


  }
})