$('.mask-real').toArray().forEach(function(field)
{
	new Cleave(field,
	{
		prefix: '',
		numeral: true,
		numeralThousandsGroupStyle:'none',
		numeralDecimalScale: 2
	});
});

$('.mask-hora').toArray().forEach(function(field)
{
	new Cleave(field,
	{
		time: true,
		timePattern: ['h', 'm']
	});
});
