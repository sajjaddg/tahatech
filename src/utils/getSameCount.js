// idea form https://stackoverflow.com/a/55350977


function getSameCount(str1, str2) {
    let count = 0;
    const obj = str2.split("");
    for (let item of str1) {
        let idx = obj.findIndex(s => s === item);
        if (idx >= 0) {
            count++;
            obj.splice(idx, 1);
        }
    }
    return count;
}
export {getSameCount}