var ClozeCard = function (text, cloze) {
	this.cloze = cloze;
	this.text = text;
	this.partial = this.text.replace(this.cloze, "_");
}

module.exports = ClozeCard