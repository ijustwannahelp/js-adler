function hash(string) {
    var a = 1; b = 0;
    for(i = 0; i < string.length; i++) {
        a = a+string.charCodeAt(i);
        b = (b+a) % 65521;
    }
    answer = (b << 16 | a >>> 0).toString(16);
    return answer;
}
module.exports.hash = hash;