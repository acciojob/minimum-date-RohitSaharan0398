function minDate(dates) {
  //write you code here
	let n=dates.length;
	let year="9999"
	let month="99";
	let date='99';

	for(let i=0;i<n;i++){
		let=y='';
		let m='';
		let d='';
		for(let i=0;i<4;i++){
			y+=dates[i];
		}
		for(let i=5;i<7;i++){
			m+=dates[i];
		}
		for(let i=8;i<n;i++){
			d+=dates[i];
		}

		if(year>y){
			year=y;
			month=m;
			day=d;
		}
		else if(year==y){
			if(month>m){
				month=m;
				day=d;
			}
			else if(month==m){
				if(day>d){
                    day=d;}
			}
		}
		
		
	}
	return year+'/'+month+'/'+day;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];

//alert(minDate(dates));
