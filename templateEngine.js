function TemplateEngine(tpl,data){
	var re = /\{\{([^\}\}]+)?\}\}/g;
	while(match=re.exec(tpl)){
		tpl=tpl.replace(match[0],data[match[1]]);
	}
	return tpl;
}

module.exports=TemplateEngine