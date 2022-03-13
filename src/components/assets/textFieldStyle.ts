export const textFieldStyle = {
  '& .MuiInputBase-input': {
    color: '#ffffff',    // 入力文字の色
  },
  '& label': {
    color: '#ffffff', // 通常時のラベル色
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#EF810F', // 通常時のボーダー色
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: '#F09630',  // ホバー時のボーダー色
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',    // 通常時のボーダー色(アウトライン)
    },
    '&:hover fieldset': {
      borderColor: '#EF810F',    // ホバー時のボーダー色(アウトライン)
    },
  },
}
