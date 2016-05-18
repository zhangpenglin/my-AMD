
(function (window) {
    var headEle=document.getElementsByTagName('head')[0]
    var myAMD = {
        load: function (url, callback) {
            var ele=document.createElement('script')
            ele.onload=function(){
                callback()
            }
            ele.src=url
            headEle.appendChild(ele)
        }
    }

    window.myAMD = myAMD

})(window)
