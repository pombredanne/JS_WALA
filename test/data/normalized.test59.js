(function(__global) {
    var tmp0, tmp1;
    tmp1 = function f(x) {
        var tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
        tmp3 = x;
        tmp4 = "f";
        tmp2 = tmp3[tmp4];
        tmp7 = tmp2;
        if (tmp2) {
            x = tmp2;
        } else {
            {}
        }
        if (tmp7) {
            {}
        } else {
            tmp5 = x;
            tmp6 = "g";
            x = tmp5[tmp6];
        }
        return;
    };
    tmp0 = "f";
    __global[tmp0] = tmp1;
})(this);