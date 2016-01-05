/**
 * 基础组件
 * @type {express,mysql,fs}
 */
var express = require("express");
var mysql=require("mysql");
var fs=require("fs");

/**
 * 自定义组件
 * @type {dateformat,templateEngine}
 */
var dateformat=require("./dateformat")();
var templateEngine=require("./templateEngine");
var webConfig=require("./webConfig")


/**
 * 调用app
 */
var app=express();



/**
 * 创建MYSQL连接池
 * @type {[mysql]}
 */
var mysqlPool=mysql.createPool(webConfig.mysql)


/**
 * 首页
 * @param  {[type]} req                                 [description]
 * @param  {[type]} res){	res.sendfile("index.html")} [description]
 * @return {[type]}                                     [description]
 */
app.get("/",function(req,res){
	res.sendfile("index.html")
})


/**
 * 增加数据                                                                                                                                                                                        [description]
 */
app.put("/app5",function(req,res){
	req.on("data",function(data){
		var obj=JSON.parse(data.toString());
		mysqlPool.getConnection(function(err,connection){
			if(err){
				res.send("数据库连接错误");
				console.log(err);
				// connection.release();
			}else{
				connection.query("INSERT INTO user_me SET ?",{frist_name:obj.frist_name,last_name:obj.last_name,job:obj.job,about_me:obj.about_me,up_time:new Date()},function(err,result){
					if(!err){
						res.send("添加成功")
						connection.release();
					}else{
						res.send("添加失败")
						console.log(err);
					}
					
				})
				
			}
		})
		// res.send(obj);
	})
})

/**
 * 展示数据列表
 */

app.get("/list",function(req,res){
	fs.readFile("list.html",function(err,data){
		var datastr=data.toString();
		if(err){
			res.send("渲染错误")
		}else{
			var str = "";
			mysqlPool.getConnection(function(err,connection){
				if(!err){
					connection.query("SELECT * from user_me",function(err,result){
						if(!err){
							console.log(result.length);
							for(var key in result){
								str+="<tr><td>"+result[key].frist_name+""+result[key].last_name+"</td><td class='typeinfo text-right'>"+result[key].up_time.Format("yyyy-MM-dd hh:mm:ss")
								str+="</td><td class='text-right'>"
								str+="<button type='button' class='btn btn-primary' onclick='deleteUser("+result[key].user_id+")'>删除</button> &nbsp;"
							

								str+="<a href='/edit/"+result[key].user_id+"'  class='btn btn-info'>编辑</a> &nbsp;"

							    str+="<a href='/detail/"+result[key].user_id+"'  class='btn btn-default'>查看</a>"
								str+="</td></tr>"
							}
							connection.release();

			
							res.send(datastr.replace(/\{\{listbody\}\}/i,str));

						}else{
							res.send("查询错误")

						}
					})

				}else{
					res.send("数据库执行错误"+err)
				}
			})
		}
	});
	// res.sendfile("list.html");
})

/**
 * 删除数据
 */

app.post("/deleteuser",function(req,res){
	req.on("data",function(data){
		var obj=JSON.parse(data);
		mysqlPool.getConnection(function(err,connection){
			if(err){
				res.send("数据库链接错误")
			}else{
				var str = "";
				connection.query("DELETE FROM user_me WHERE ?",obj,function(err,result){
						connection.query("SELECT * from user_me",function(err,result){
							if(!err){
								console.log(result.length);
								for(var key in result){
									str+="<tr><td>"+result[key].frist_name+""+result[key].last_name+"</td><td class='typeinfo text-right'>"+result[key].up_time.Format("yyyy-MM-dd hh:mm:ss")
									str+="</td><td class='text-right'>"
									str+="<button type='button' class='btn btn-primary' onclick='deleteUser("+result[key].user_id+")'>删除</button> &nbsp;"
								

									str+="<a href='/edit/"+result[key].user_id+"'  class='btn btn-info'>编辑</a> &nbsp;"

								    str+="<a href='/detail/"+result[key].user_id+"'  class='btn btn-default'>查看</a>"
									str+="</td></tr>"
								}
								connection.release();

				
								res.send(str);

							}else{
								res.send("查询错误")

							}
						})					
				})
			}

		})
		
	})
})
/**
 * 数据详情
 * @param  {[type]} req                                                                                                                           [description]
 * @param  {[type]} res){	mysqlPool.getConnection(function(err,connection){		if(!err){			fs.readFile("detail.html",function(err,data){				var strdata       [description]
 * @return {[type]}                                                                                                                               [description]
 */
app.get("/detail/:id(\\d+)",function(req,res){
	mysqlPool.getConnection(function(err,connection){
		if(!err){
			fs.readFile("detail.html",function(err,data){
				var strdata=data.toString();
		
				if(!err){
					connection.query("SELECT * FROM user_me WHERE user_id="+req.params.id,function(err,result){
						if(!err){
							connection.release();
							var engine=templateEngine(strdata,{
								frist_name:result[0].frist_name,
								last_name:result[0].frist_name,
								job:result[0].job,
								about_me:result[0].about_me,
								up_time:result[0].up_time.Format("yyyy-MM-dd hh:mm:ss")
							})

							console.log(engine);
							res.send(engine)


						}else{
							console.log("查询错误");
						}
						
					})

				}else{
					res.send("读取文件错误")
				}

			});
			

		}else{
			console.log("数据库链接错误");
		}

	})
})


app.get("/edit/:id(\\d+)",function(req,res){
	mysqlPool.getConnection(function(err,connection){
		if(!err){
			fs.readFile("edit.html",function(err,data){
				var strdata=data.toString();
		
				if(!err){
					connection.query("SELECT * FROM user_me WHERE user_id="+req.params.id,function(err,result){
						if(!err){
							connection.release();
							var engine=templateEngine(strdata,{
								frist_name:result[0].frist_name,
								last_name:result[0].frist_name,
								job:result[0].job,
								about_me:result[0].about_me,
								user_id:result[0].user_id
							})
							console.log(engine);
							res.send(engine)
						}else{
							console.log("查询错误");
						}
						
					})

				}else{
					res.send("读取文件错误")
				}

			});
		}else{
			console.log("数据库链接错误");
		}
	})
})



app.post("/edit",function(req,res){  
	req.on("data",function(data){
		var obj=JSON.parse(data);
		mysqlPool.getConnection(function(err,connection){
			if(!err){

	
				connection.query("UPDATE user_me SET ? WHERE user_id="+obj.user_id,{frist_name:obj.frist_name,last_name:obj.last_name,job:obj.job,about_me:obj.about_me,up_time:new Date()},function(err,result){
					if(!err){
						res.send("修改成功，马上跳转列表页")
					}else{
						res.send("修改失败")
					}
				})
			}else{
				res.send("数据库出现问题")
			}
		})

	})
})










app.listen(webConfig.web.port,webConfig.web.ip,function(){
	console.log("服务器连接成功:http://%s:%s",webConfig.web.ip,webConfig.web.port);
})