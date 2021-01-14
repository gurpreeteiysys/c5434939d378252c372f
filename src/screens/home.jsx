import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
	let history = useHistory();

	const [astroid, setAstroid] = useState('');
	const trigger = () => {
		if(astroid) {
			console.log('astroid = '+astroid);
			fetch(`https://api.nasa.gov/neo/rest/v1/neo/${astroid}?api_key=gM5ZWmppRfFjuW0ehS5Av07rpQutUIP9i3F7mrra`).then((resp) => {
				return resp.json();
			}).then((data) => {
				console.log(data);
				// let respData = data;
				// console.log(respData);
				history.push({
					pathname: '/details',
					state:{
						dataObj: data,
					}
				});
			}).catch((err) => {
				console.log(err);
				alert('Please enter valid Astroid id');
			});
		} else {
			alert('Please enter astroid value');
		}
	};
	const chnge = (e) => {
		e.preventDefault();
		setAstroid(e.target.value);
	};

	return (
		<div>
			<input type="text" placeholder="Enter Astroid Id" name="astroid_id" value={astroid} onChange={chnge} />
			<button 
				onClick={astroid && astroid.length > 1 ? trigger : null} 
				disabled={astroid && astroid.length > 1 ? false : true}
			>Submit</button>
		</div>
	);
}