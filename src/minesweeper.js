class Minesweeper {
  print() {
    if (!this.stepped) {
      return '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
    }

    return '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+';
  }

  step() {
    this.stepped = true;
  }
}

module.exports = Minesweeper;
