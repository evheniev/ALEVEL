function getCurrentPostComments ( postId ) {
	var name
	res = []
    for (var y in comments) {
            if (comments[y].postId == postId) {
                    name = comments[y].author
                    res.push({author:users[name].name, text:posts[postId].text})
            }
    }
	
        return  res
}
