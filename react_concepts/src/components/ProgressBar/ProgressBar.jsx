import React ,{useState, useEffect} from 'react'
import Progress from './Progress'

const ProgressBar = () => {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);
  
    useEffect(() => {
      setInterval(() => {
        setValue((val) => val + 0.1);
      }, 20);
    }, []);
    return (
        <>
            <span>Progress Bar</span>
            <Progress value={value} onComplete={() => setSuccess(true)} />
            <span>{success ? "Complete!" : "Loading..."}</span>
        </>
    )
}

export default ProgressBar