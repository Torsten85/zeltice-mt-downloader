var FileNameGenerator = function(fileName, metaExtension) {
	this.file = fileName;
	this.metaExtension = metaExtension;
};

FileNameGenerator.prototype.execute = function(callback) {
	this.callback = callback;
	var file = this.file;
	var metaExtension = this.metaExtension;
	var result;
	var regEx = new RegExp('\.' + metaExtension + '$');
	if (file.match(regEx)) {
		result = {
			downloadFile: file,
			originalFile: file.replace(regEx, '')
		};
	} else {
		result = {
			downloadFile: file + '.' + metaExtension,
			originalFile: file
		};

	}
	this.callback(null, result);
};

module.exports = FileNameGenerator;
