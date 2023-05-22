import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const client = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/company/job_posts/6',
});

const JobList = () => {


 
	const [joblist, setJoblist] = useState('');

	// GET with Axios
	useEffect(() => {
		const fetchPost = async () => {
			try {
				let response = await client.get('?_limit=10');
				setJoblist(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchPost();
	}, []);
    console.log(joblist);
    return(
        <>
        <post className="id"></post>
        </>
    )
}

export default JobList;