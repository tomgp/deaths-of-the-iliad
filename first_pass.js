//first_pass.js
// a first pass at reading in the tumblr-dump.
// the resuts of this will be cleaned by hand

fs = require('fs');

var structured_data = directory_map('./tumblr-dump/posts/', process_dump_file)
console.log(structured_data);

function directory_map(dir, f){
	var return_array = [];
	var file_list = fs.readdirSync(dir);
	for (i in file_list){
		return_array.push (  f( dir + file_list[i] ) );
	}
	return return_array;
}

function process_dump_file(file_name){
	console.log("process " + file_name);
	var content = fs.readFileSync(file_name, 'UTF-8');
	var semi_structured = { error:false, original_content:content };
//	open it
//		get the tags - process tags
//		get the <blockquote> - save as 'quote' //if there's no blcokquote add to check-by-hand-list
//		get the <p> following the blockquote - interpret this description
//		add the results to an object
	return semi_structured;
}



//process tags, for now make a list of the tags and save
// todo: take this list of tags and split into known categories, these'll form the vocabulary for the data 


//interpret description
// split at the colon. if there's no colon return false
// the first element will contain 1 or more numbers, the death IDs or enclosing range thereof
// the second element will be the nemas separates by &amp; and commas