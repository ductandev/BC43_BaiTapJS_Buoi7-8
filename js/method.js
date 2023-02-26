// --------------------------------------
// BÀI TẬP 1: Tổng số dương.
// --------------------------------------
/**
 * Hàm này dùng để tính tổng số dương có trong mảng.
 * @param {*} array : mảng truyền vào.
 * @returns tongSoduong: Tổng của các số dương trong mảng.
 */
function tinhTongSoDuong(array) {
    var tongSoduong = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            tongSoduong += array[index];
        }
    }

    return tongSoduong;
}


// --------------------------------------
// BÀI TẬP 2: Đếm số dương.
// --------------------------------------
/**
 * Hàm này dùng để đếm số dương có trong mảng.
 * @param {*} array : mảng truyền vào.
 * @returns demSoDuong: Số dương có trong mảng.
 */
function demSoDuongTrongMang(array) {
    var demSoDuong = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            demSoDuong += 1;
        }
    }

    return demSoDuong;
}


// --------------------------------------
// BÀI TẬP 3: Tìm số nhỏ nhất.
// --------------------------------------
/**
 * Hàm này dùng để tìm giá trị nhỏ nhất trong mảng
 * @param {*} array : mảng truyền vào.
 * @returns giaTriNhoNhat: Hàm trả ra giá trị nhỏ nhất được tìm thấy trong mảng.
 */
function timGiaTriNhoNhat(array) {
    var giaTriNhoNhat = array[0];

    for (var index = 1; index < array.length; index++) {
        if (array[index] < giaTriNhoNhat) {
            giaTriNhoNhat = array[index];
        }
    }

    return giaTriNhoNhat;
}


// --------------------------------------
// BÀI TẬP 4: Tìm số dương nhỏ nhất
// --------------------------------------
/* Bài 4 tái sử dụng hàm timGiaTriNhoNhat()
 và hạo hàm thêm giá trị vào mảng.*/
/**
 * Hàm này dùng để lọc số dương và thêm vào mảng mới.
 * @param {*} array : mảng truyền vào.
 * @returns mangSoDuong : trả về 1 mảng chỉ chứa toàn số dương.
 */
function themGiaTriVaoMang(array) {
    var mangSoDuong = [];

    for (var index = 0; index < array.length; index++) {
        if (array[index] > 0) {
            mangSoDuong.push(array[index]);
        }
    }

    return mangSoDuong;
}


// --------------------------------------
// BÀI TẬP 5: Tìm số chẵn cuối cùng.
// --------------------------------------
/**
 * Hàm này dùng để tìm số chẵn cuối cùng trong mảng
 * @param {*} array : mảng truyền vào.
 * @returns soChanCuoiTrongMang: trả về số chẳn cuối cùng nằm trong mảng.
 */
function timSoChanCuoiTrongMang(array) {
    var soChanCuoiTrongMang = 0;

    for (var index = array.length - 1; index >= 0; index--) {
        if (array[index] % 2 == 0) {
            soChanCuoiTrongMang = array[index];
            break;
        }
    }

    return soChanCuoiTrongMang;
}


// --------------------------------------
// BÀI TẬP 6: Đổi chỗ.
// --------------------------------------
/**
 * Hàm này dùng để thay đổi trị ví cho nhau trong mảng.
 * @param {*} array : mảng truyền vào.
 * @param {*} viTri1 : vị trí muốn chuyển 1
 * @param {*} viTri2 : vị trí muốn chuyển 2
 * @returns array: trả về mảng đã thay đổi vị trí cho nhau.
 */
function doiViTri(array, viTri1, viTri2) {
    var arrTemp = array[viTri1];

    array[viTri1] = array[viTri2];
    array[viTri2] = arrTemp;

    return array;
}


// --------------------------------------
// BÀI TẬP 7: Sắp xếp tăng dần.
// --------------------------------------
/**
//  Hàm này dùng để sắp xếp lại mảng theo giá trị tăng dần.
 * @param {*} array : mảng truyền vào.
 * @returns mangTangDan:  trả về mảng đã được sắp xếp có giá trị từ nhỏ tới lớn.
 */
function sapXepTangDan(array) {
    var mangTangDan;

    for (index = 0; index < array.length; index++) {
        for (solan = 0; solan < array.length - 1; solan++) {
            if (array[solan] > array[solan + 1]) {
                mangTangDan = doiViTri(array, solan, solan + 1);
            }
        }
    }

    return mangTangDan;
}


// --------------------------------------
// BÀI TẬP 8: Tìm số nguyên tố đầu tiên.
// --------------------------------------
/**
 * Hàm này dùng để kiểm số đó có phải số nguyên tố hay không.
 * @param {*} array : mảng truyền vào.
 * @returns trả về giá trị true nếu số đó là số nguyên tố hoặc false là không phải số nguyên tố.
 */
function kiemSoNguyenTo(giaTri) {
    if (giaTri < 2) {
        return false;
    }
    for (var index = 2; index <= Math.sqrt(giaTri); index++) {
        if (giaTri % index == 0) {
            return false;
        }
    }

    return true;
}


/**
 * Hàm này dùng để tìm ra số nguyên tố đầu tiên.
 * Nếu tìm được thì dừng chương trình và trả ra output.
 * @param {*} array : mảng truyền vào.
 * @returns Trả về số nguyên tố đầu tiên tim được trong mảng.
 */
function SoNguyenToDauTien(array) {
    var output = -1;

    for (var index = 0; index < array.length; index++) {
        if (kiemSoNguyenTo(array[index])) {
            output = array[index];
            break;
        }
    }

    return output;
}


// --------------------------------------
// BÀI TẬP 9: Đếm số nguyên.
// --------------------------------------
/**
 * Hàm này dùng để đếm số nguyên có trong mảng
 * @param {*} arrayFloat : mảng truyền vào có chứa giá trị số nguyên và số thực.
 * @returns SoNguyen: trả về số nguyên đếm được là bao nhiêu số.
 */
function demSoNguyenTrongMang(arrayFloat) {
    var SoNguyen = 0;

    for (var index = 0; index < arrayFloat.length; index++) {
        if (Number.isInteger(arrayFloat[index])) {
            SoNguyen++;
        }
    }

    return SoNguyen;
}


// --------------------------------------
// BÀI TẬP 10: So sánh số lượng số âm và dương.
// --------------------------------------
// Bài 10 tái sử dụng hàm demSoDuongTrongMang().
/**
 * Hàm này dùng để đếm số âm có trong mảng.
 * @param {*} array : mảng truyền vào.
 * @returns demSoAm: Số âm có trong mảng.
 */
function demSoAmTrongMang(array) {
    var demSoAm = 0;

    for (var index = 0; index < array.length; index++) {
        if (array[index] < 0) {
            demSoAm += 1;
        }
    }

    return demSoAm;
}
