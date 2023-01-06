const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': `QB-c6fa43773bdaf78d294b`,
    },
    method: "GET",
};
const baseUrl = 'https://questions.aloc.com.ng/api'
const subjectsUrl = `${baseUrl}/metrics/list-subjects`
const yearsUrl = `${baseUrl}/metrics/years-available-for`

const fetchData = async (url) => {
    try {
        const response = await fetch(url, options)
        const { data } = await response.json()
        console.log(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchSubjects = async () => {
    const res = await fetchData(subjectsUrl)
    return res
}

export const fetchYears = async (subject) => {
    const res = await fetchData (`${yearsUrl}/${subject}`)
    return res
}

export const fetchQuestions = async (subject, year) => {
    const res = await fetchData(`${baseUrl}/v2/m?subject=${subject}&year=${year}&type=utme`)
    return res
}
