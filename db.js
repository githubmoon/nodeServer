
  var dba = require('mysql');

function dbopen(){
    var dd=dba.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'server'
    })
    return dd;
}
exports.db1=function(){
      dbopen();
}
exports.db2=function(reqest,response){
    var qq,id,task,times,notes;
    //get reqest.query.cu
    //post reqest.body.id
    qq = reqest.body.qq;
    id = reqest.body.id;
    task = reqest.body.task;
    times = reqest.body.times;
    notes = reqest.body.notes;
    //qq = reqest.query.qq;
    //id = reqest.query.id;
    //task = reqest.query.task;
    if(qq == 'add'){
       var insert='insert into tasklist values(?,?,?,?)';
        dbopen().query(insert,[id,task,times,notes],function(er,results){
            if(er){
                console.log(er);
            }
            var cc =JSON.stringify(results);
            console.log(results);
            response.write(cc);
            response.end();
        })
    }else if(qq=='delete'){
        var deletedb='delete from tasklist where id=?';
        dbopen().query(deletedb,[id],function(er,results){
            if(er){
                console.log(er);
            }
            var cc =JSON.stringify(results);
            response.write(cc);
            response.end();
        })
    }else if(qq == 'setOne'){
            var select='select * from tasklist where id=?';
            dbopen().query(select,[id],function(er,results){
                if(er){
                    console.log(er);
                }
                var cc =JSON.stringify(results);
                response.write(cc);
                response.end();
            })
    }else{
        var select='select * from tasklist';
        dbopen().query(select,function(er,results){
            if(er){
                console.log(er);
            }
            var cc =JSON.stringify(results);
            response.write(cc);
            response.end();
        })
    }
}
exports.db3=function(){
      dbopen().end();
}