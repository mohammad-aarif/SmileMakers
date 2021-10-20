import { useEffect, useState } from "react/cjs/react.development"

const useDoctors = () => {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    }, [])

    return [doctor];
}
export default useDoctors;