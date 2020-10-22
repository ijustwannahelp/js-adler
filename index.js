function hash(string) {
    var a = 1; b = 0;
    for(i = 0; i < string.length; i++) {
        a = a+string.charCodeAt(i) % 65521;
        b = (b+a) % 65521;
    }
    answer = (b << 16 | a).toString(16);
    return answer;
}
module.exports.hash = hash;