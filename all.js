var vm = new Vue({
  el: '#app',
  data: {
    title: 'ㄅㄆㄇ',
    alphabets: ['ㄅ;49', 'ㄆ;81', 'ㄇ;65', 'ㄈ;90', 'ㄉ;50', 'ㄊ;87', 'ㄋ;83', 'ㄌ;88', 'ㄍ;69', 'ㄎ;68', 'ㄏ;67', 'ㄐ;82', 'ㄑ;70', 'ㄒ;86', 'ㄓ;53', 'ㄔ;84', 'ㄕ;71', 'ㄖ;66', 'ㄗ;89', 'ㄘ;72', 'ㄙ;78', 'ㄧ;85', 'ㄨ;74', 'ㄩ;77', 'ㄚ;56', 'ㄛ;73', 'ㄜ;75', 'ㄝ;188', 'ㄞ;57', 'ㄟ;79', 'ㄠ;76', 'ㄡ;190', 'ㄢ;48', 'ㄣ;80', 'ㄤ;186', 'ㄥ;191', 'ㄦ;189'],
    alphabetList: [],
    countDownFrom: 10

  },

  //網頁的開始先渲染資料（對生命週期還不是很了解）
  created: function () {
    this.getAlphabetList()
  },

  methods: {
    // keyupEventHandler(e) {
    //   const c = this.alphabetList.find( item => item.keyCode === e.keyCode )
    //   this.countDownTimer(c)
    // },

    //監聽鍵盤功能
    keyupEventHandler(e) {
      for (let i = 0; i < this.alphabets.length; i++) {
        if (e.keyCode == this.alphabetList[i].keyCode) {
          this.countDownTimer(this.alphabetList[i])
        }
      }
    },
    //將alphabets從物件推進去物件做處理
    getAlphabetList: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        //宣告一個常數為alphabets分離之後的陣列['ㄅ;49','ㄆ;81']把這兩個分開來，各成一個陣列
        //前面的為character[0]後著為character[1]，[['ㄅ','ㄆ'],['49','81']]
        const character = this.alphabets[i].split(';')
        //加入其他初始資料
        this.alphabetList.push({
          alphabet: character[0],
          deleted: false,
          // 將字串數字轉為number型別
          keyCode: parseInt(character[1], 10)
        })
      }
    },
    //重置所有被刪除的字母以及倒數的時間
    clearAll: function () {
      for (let i = 0; i < this.alphabets.length; i++) {
        this.alphabetList[i].deleted = false;
      }
      clearTimeout(this.time)
      this.countDownFrom = 10
    },
    //點擊時觸發的函式
    countDownTimer: function (item) {
      //如果字母被點擊（刪除）
      if (item.deleted === false) {
        //停止正在計時的時間
        clearTimeout(this.time)
        //起始時間調回10秒
        this.countDownFrom = 10
        //執行新的倒數計時
        this.countingDown()
        //確認已被刪除
        item.deleted = true
      } else {
        return;
      }
    },
    //倒數計時功能
    countingDown: function () {
      //如果當下秒數大於0
      if (this.countDownFrom > 0) {
        //當下秒數就-1
        this.time = setTimeout(() => {
          this.countDownFrom -= 1
          //帶入此函式重複執行，直到不大於0，停止函式
          this.countingDown()
          //1000毫秒=1秒 延遲一秒執行函式，看起來就像每秒執行
        }, 1000)
      }
    },


  },
  //由於寫Vue的好像監聽不到整個li，所以寫原生JS的（對生命週期還不是很了解）
  mounted() {
    addEventListener('keyup', this.keyupEventHandler)
  },
  //要把暫存的清除掉（對生命週期還不是很了解）
  beforeDestroy() {
    removeEventListener(this.keyupEventHandler)
  }


})

