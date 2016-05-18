(function (window) {
    var headEle = document.getElementsByTagName('head')[0]

    function isArray(a) {
        return {}.toString.call(a) == "[object Array]"
    }

    function load(url, callback) {
        var ele = document.createElement('script')
        ele.onload = function () {
            callback()
        }
        ele.src = url
        headEle.appendChild(ele)
    }

    function loadMulti(urls, callBack) {
        urls = isArray(urls) ? urls : [urls]
        var count=urls.length
        var loaded=0
        for(var i=0;i<count;i++){
            load(urls[i],function(){
                loaded++
                if(loaded==count){
                    callBack()
                }
            })
        }
    }

    var myAMD = {
        load: loadMulti
    }

    window.myAMD = myAMD

})(window)
