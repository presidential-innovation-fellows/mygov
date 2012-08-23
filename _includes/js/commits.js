/* recent commits widget */
jQuery(document).ready(function($){
	$.getJSON('https://api.github.com/repos/{{ site.github.repo }}/commits?callback=?', function(data) {

		$.each( $(data.data).slice(0,5), function(k,v) {
			var url = v.url;
			url = url.replace( 'https://api.github.com/repos/{{ site.github.repo }}/commits/', 'https://github.com/{{ site.github.repo }}/commit/' );
			$('#commits').append( '<li><a href="' + url + '">' + v.commit.message + '</a> by <a href="' + v.committer.url + '">' + v.commit.author.name + '</a> - ' + $.relatizeDate.timeAgoInWords( new Date( v.commit.author.date ) ) + '</li>');
				
		});

	});

});