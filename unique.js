/**
 *@method unique 返回去重数组
 */

Array.prototype.unique = function() {
    var _array = [],
        _hash = {};

    for (var i = 0; i < this.length; i++) {
        if (!_hash[this[i]]) {
            _array.push(this[i]);
            this[i] = true;
        }
    }

    return _array;
}
