/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-8-22
 * Time: 下午1:54
 * To change this template use File | Settings | File Templates.
 */
var db=require('./db.js');
exports.connet=function(reqest,response){
       db.db1();
       db.db2(reqest,response);
       db.db3();
}
