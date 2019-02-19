const Utils = {

  // Remove punctuation and other characters to make it a bit easier to get an
  // answer right
  normaliseAnswer(answer) {
    return answer.trim().toLowerCase()
                 .replace(/[\.\']/g, '')
                 .replace(/-/g, ' ')
                 .replace(/&/g, 'and');
  }

}

export { Utils }