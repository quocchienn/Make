/******************************
Chức năng: Wink Mở khóa tư cách thành viên vĩnh viễn
Phiên bản ứng dụng: 1.8.90
Tác giả: Hausd0rff (Chỉnh sửa: Quocchien)
*******************************/

var body = $response.body;
var json = JSON.parse(body);

// Thiết lập quyền VIP vĩnh viễn
json.data = {
    "active_sub_type": 2,
    "account_type": 1,
    "sub_type_name": "VIP Vĩnh Viễn",
    "active_sub_order_id": "99999999999999999999",
    "trial_period_invalid_time": "3249352999000", // Năm 2073
    "current_order_invalid_time": "3249352999000", // Năm 2073
    "active_order_id": "99999999999999999999",
    "limit_type": 0,
    "sub_type": 2,
    "account_id": "1230010086",
    "invalid_time": "3249352999000", // Năm 2073
    "valid_time": "1569664800000", // Ngày bắt đầu VIP
    "active_product_id": "vip_forever",
    "active_promotion_status": 2,
    "show_renew_flag": false,
    "use_vip": true,
    "have_valid_contract": true,
    "drive_type_name": "VIP Member",
    "drive_type": 1,
    "is_vip": true,
    "membership": {
        "id": "1230010086",
        "display_name": "Wink VIP",
        "level": 1,
        "level_name": "VIP"
    }
};

$done({ body: JSON.stringify(json) });