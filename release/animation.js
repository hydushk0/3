var slide = function(key, move){
	$(key).hover(function(){
		$(move).css({'display' :  'block'}),
		$(key).css({"height" : "35px"})
	}, function(){
		$(move).css({'display' : 'none'}),
		$(key).css({"height" : "30px"})
	});
};

slide('#key1', '#move1');
slide('#key2', '#move2');
slide('#key3', '#move3');
slide('#key11', '#move11');
slide('#key12', '#move12');
slide('#key13', '#move13');


// ####################################################

var allLinks = ['.main', '.news', '.partners', '.contacts','.targets',
				'.help', '.gifts', '.goverment','.yeah2011', '.yeah2012',
				 '.yeah2013', '.yeah2014', '.yeah2015','.guarantees', '.published', 
				 '.reports', '.berezan', '.ukraine', '.shares', '.grants', '.foto', '.video'];

var allnames = ['#l_main', '#l_news', '#l_partners', '#l_contacts','#l_targets',
				'#l_help', '#l_gifts', '#l_goverment','#l_yeah2011', '#l_yeah2012',
				 '#l_yeah2013', '#l_yeah2014', '#l_yeah2015','#l_guarantees', '#l_published', 
				 '#l_reports', '#l_berezan', '#l_ukraine', '#l_shares', '#l_grants', '#l_foto', '#l_video'];

var allbreads = [' > головна',' > новини', ' > партнери',' > контакти',' > потребують допомоги', ' > мета\\логотип',  
				' > наші пропозиції', ' > правління фонду', ' > про нас > наші проекти > 2009-2011',
				' > про нас > наші проекти > 2011-2012', ' > про нас > наші проекти > 2013',
				' > про нас > наші проекти > 2014', ' > про нас > наші проекти > 2015', 
				' > документи > установчі документи', ' > документи > публікації', ' > документи > різні звіти',
				' > історія створення > фг в Україні', ' > історія створення > фг в Березані',
				' > программи > конкурси', ' > программи > гранти', ' > галерея > фотогалерея', ' > галерея > відеогалерея'];

var clicker = function(name, link, bread){
	$(name).click(function(){
		cleaner();
		$(link).css({'display':'inline-block'});
		$('.search_bread p').html('berezanford.com.ua').append(bread);
	});
};

var cleaner = function(){
	for(var i=0; i < allLinks.length; i++){
		$(allLinks[i]).css({'display':'none'});
	};
};


clicker (allnames[0] , allLinks[0] , allbreads[0] );
clicker (allnames[1] , allLinks[1] , allbreads[1] );
clicker (allnames[2] , allLinks[2] , allbreads[2] );
clicker (allnames[3] , allLinks[3] , allbreads[3] );
clicker (allnames[4] , allLinks[4] , allbreads[4] );
clicker (allnames[5] , allLinks[5] , allbreads[5] );
clicker (allnames[6] , allLinks[6] , allbreads[6] );
clicker (allnames[7] , allLinks[7] , allbreads[7] );
clicker (allnames[8] , allLinks[8] , allbreads[8] );
clicker (allnames[9] , allLinks[9] , allbreads[9] );
clicker (allnames[10], allLinks[10], allbreads[10]);
clicker (allnames[11], allLinks[11], allbreads[11]);
clicker (allnames[12], allLinks[12], allbreads[12]);
clicker (allnames[13], allLinks[13], allbreads[13]);
clicker (allnames[14], allLinks[14], allbreads[14]);
clicker (allnames[15], allLinks[15], allbreads[15]);
clicker (allnames[16], allLinks[16], allbreads[16]);
clicker (allnames[18], allLinks[18], allbreads[18]);
clicker (allnames[19], allLinks[19], allbreads[19]);
clicker (allnames[20], allLinks[20], allbreads[20]);
clicker (allnames[21], allLinks[21], allbreads[21]);