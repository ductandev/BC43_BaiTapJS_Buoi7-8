var arrNum = [];
var arrFloat = [];


// Hàm viết tắt.
function getEle(n) {
    return document.getElementById(n);
}


// -------------------------------------------------------------
//                      ADD ARRAY
// -------------------------------------------------------------
getEle("addArray").onclick = function () {
    // input: nhập số nguyên từ bàn phím, arr(number).
    var arr = parseInt(Number(getEle("inputNum").value));

    // output: mảng n phần từ, arrNum(number).
    // var arrNum = []

    // Process:
    arrNum.push(arr); // thêm phần tử vào cuối mảng.

    getEle("inputNum").value = ""; // Clear input
    getEle("showArray").innerHTML = "[" + arrNum + "]";
};


// -------------------------------------------------------------
//                      DELETE ARRAY
// -------------------------------------------------------------
getEle("deleteArray").onclick = function () {
    // Xóa phần tử cuối trong mảng.
    arrNum.splice(arrNum.length - 1, 1);

    getEle("showArray").innerHTML = "[" + arrNum + "]";
};


// -------------------------------------------------------------
//                      ADD ARRAY FLOAT
// -------------------------------------------------------------
getEle("addArrayBai9").onclick = function () {
    // input: nhập số nguyên từ bàn phím, arr(number).
    var giaTriSoThuc = Number(getEle("inputNhapSo").value);

    // output: mảng n phần từ, arrFloat(number).
    // var arrFloat = []

    // Process:
    arrFloat.push(giaTriSoThuc); // thêm phần tử vào cuối mảng.

    getEle("inputNhapSo").value = ""; // Clear input
    getEle("showArrBai9").innerHTML = "[" + arrFloat + "]";
};


// -------------------------------------------------------------
//                      DELETE ARRAY FLOAT
// -------------------------------------------------------------
getEle("deleteArrayBai9").onclick = function () {
    // Xóa phần tử cuối trong mảng.
    arrFloat.splice(arrFloat.length - 1, 1);

    getEle("showArrBai9").innerHTML = "[" + arrFloat + "]";
};


// *************************************************************
//                  BÀI TẬP 1: Tổng số dương.                  *
// *************************************************************
getEle("btnBai1").onclick = function () {
    // input: arrNum(number)
    // output: tongSoduong(number)
    var tongSoduong = 0;

    // Process:
    tongSoduong = tinhTongSoDuong(arrNum);

    getEle("ketQuaBai1").innerHTML = "Tổng số dương: " + tongSoduong;
};


// *************************************************************
//                  BÀI TẬP 2: Đếm số dương.                   *
// *************************************************************
getEle("btnBai2").onclick = function () {
    // input: arrNum(number)
    // output: demSoDuong(number)
    var demSoDuong = 0;

    // Process:
    demSoDuong = demSoDuongTrongMang(arrNum);

    getEle("ketQuaBai2").innerHTML = "Số dương: " + demSoDuong;
};


// *************************************************************
//                  BÀI TẬP 3: Tìm số nhỏ nhất.                *
// *************************************************************
getEle("btnBai3").onclick = function () {
    // input: arrNum(number)
    // output: soNhoNhat(number)
    var soNhoNhat = 0;

    // Process:
    soNhoNhat = timGiaTriNhoNhat(arrNum);

    getEle("ketQuaBai3").innerHTML = "Số nhỏ nhất : " + soNhoNhat;
};


// *************************************************************
//                  BÀI TẬP 4: Tìm số dương nhỏ nhất           *
// *************************************************************
getEle("btnBai4").onclick = function () {
    // input: arrNum(number)
    // output: soDuongMin(number)

    // Process:
    var arrPositive = themGiaTriVaoMang(arrNum);

    if (arrPositive.length > 0) {
        var soDuongMin = 0;
        soDuongMin = timGiaTriNhoNhat(arrPositive);
        getEle("ketQuaBai4").innerHTML = "Số dương nhỏ nhất : " + soDuongMin;
    } else {
        getEle("ketQuaBai4").innerHTML = "Không có số dương trong mảng";
    }
};


// *************************************************************
//                  BÀI TẬP 5: Tìm số chẵn cuối cùng.          *
// *************************************************************
getEle("btnBai5").onclick = function () {
    // input: arrNum(number)
    // output: soChanCuoiCung(number)
    var soChanCuoiCung = 0;

    // process:
    soChanCuoiCung = timSoChanCuoiTrongMang(arrNum);

    getEle("ketQuaBai5").innerHTML = "Số chẵn cuối cùng: " + soChanCuoiCung;
};


// *************************************************************
//                  BÀI TẬP 6: Đổi chỗ.                        *
// *************************************************************
getEle("btnBai6").onclick = function () {
    // input: viTri1(number), viTri2(number).
    var viTri1 = getEle("inputViTri1").value;
    var viTri2 = getEle("inputViTri2").value;

    // ouput: Vị trí 1 và 2 thay đổi chỗ cho nhau.

    // Process:
    if (viTri1 <= arrNum.length - 1 && viTri2 <= arrNum.length - 1) {
        var arrNumChange = doiViTri(arrNum, viTri1, viTri2);

        getEle("ketQuaBai6").innerHTML = "Mảng sau khi đổi: " + arrNumChange;
    } else {
        getEle("ketQuaBai6").innerHTML = "Vui lòng nhập lại vị trí, vì quá độ dài của mảng !";
    }
};


// *************************************************************
//                  BÀI TẬP 7: Sắp xếp tăng dần.               *
// *************************************************************
getEle("btnBai7").onclick = function () {
    // input: arrNum(number)
    // ouput: arrNum đã được sắp xếp.

    // Process:
    var arrangeArr = sapXepTangDan(arrNum);

    getEle("ketQuaBai7").innerHTML = "Mảng sau khi sắp xếp: " + "[" + arrangeArr + "]";
};


// *************************************************************
//                  BÀI TẬP 8: Tìm số nguyên tố đầu tiên.      *
// *************************************************************
getEle("btnBai8").onclick = function () {
    // input: arrNum(number)
    // output: số nguyen tố đầu tiên

    // Process:
    var soNguyenToDauTien = SoNguyenToDauTien(arrNum);

    getEle("ketQuaBai8").innerHTML = "Số nguyên tố đầu tiên: " + soNguyenToDauTien;
};


// *************************************************************
//                  BÀI TẬP 9: Đếm số nguyên.                  *
// *************************************************************
getEle("btnBai9").onclick = function () {
    // input: arrFloat(number)
    // output: demSo(number)
    var demSoNguyen = 0;

    // Process:
    demSoNguyen = demSoNguyenTrongMang(arrFloat);

    getEle("ketQuaBai9").innerHTML = "Số nguyên: " + demSoNguyen;
};


// *************************************************************
//          BÀI TẬP 10: So sánh số lượng số âm và dương.       *
// *************************************************************
getEle("btnBai10").onclick = function () {
    // input: arrNum(number)
    // output: so sánh số lượng số âm và số dương
    var demSoDuongArr = 0;
    var demSoAmArr = 0;

    // Process:
    demSoDuongArr = demSoDuongTrongMang(arrNum);
    demSoAmArr = demSoAmTrongMang(arrNum);

    if (demSoDuongArr > demSoAmArr) {
        getEle("ketQuaBai10").innerHTML = "Số dương > Số âm";
    } else if (demSoDuongArr == demSoAmArr) {
        getEle("ketQuaBai10").innerHTML = "Số dương = Số âm";
    } else {
        getEle("ketQuaBai10").innerHTML = "Số dương < Số âm";
    }
};
