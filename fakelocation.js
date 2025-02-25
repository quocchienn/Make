/**
 * Fake địa chỉ IP sang USA cho Locket Gold
 * Script chỉnh sửa phản hồi từ ip-api.com
 */

var obj = JSON.parse($response.body);
obj.country = "United States";
obj.countryCode = "US";
obj.region = "CA";
obj.regionName = "California";
obj.city = "Los Angeles";
obj.lat = 34.0522;
obj.lon = -118.2437;
obj.timezone = "America/Los_Angeles";
obj.isp = "AT&T Internet";
obj.org = "AT&T Services, Inc.";
obj.as = "AS7018 AT&T Services, Inc.";

$done({ body: JSON.stringify(obj) });
