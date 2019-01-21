const qiniu = require("qiniu");
var accessKey = "mT57HocLAmbigrjdkn6EDQz7DwgbtqGbExgHd3i3";
var secretKey = "tWbmsq5CfoDYkMJCpfs7zQ3awLVFkTm-_laaz83J";
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
  scope: "chenshuai2018",
  expires: 7200
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

console.log(uploadToken);
