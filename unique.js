/**
 *@method unique 返回去重数组
 */

Array.prototype.unique = function() {
    var _array = [],
        _hash = {};

    for (var i = 0; i < this.length; i++) {
        if (!_hash[this[i]]) {
            _this[i].push(_array);
            _this[i] = true;
        }
    }

    return _array;
}
