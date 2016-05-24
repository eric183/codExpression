
@param {string} _string 传入指定范围的的字符串
@param {number} mount   指定生成字符串的长度
 
function randomString(_string, mount) {
    var _newString = '';

    for (var i = 0; i < mount; i++) {
        _newString += _string.charAt(Math.floor(Math.random() * _string.length));
    }

    return _newString;
}
