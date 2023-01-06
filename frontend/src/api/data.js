const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccessToken': `QB-36d1f56538f7a49f6742`,
    },
    method: "GET",
};
const baseUrl = 'https://questions.aloc.com.ng/api'
const questionsUrl = `${baseUrl}/v2/m?`
const subjectsUrl = `${baseUrl}/metrics/list-subjects`
const yearsUrl = `${baseUrl}/metrics/years-available-for`

const fetchData = async (url) => {
    try {
        const response = await fetch(url, options)
        const { data } = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchSubjects = async () => {
    await fetchData(subjectsUrl)
}

export const fetchYears = async (subject) => {
    await fetchData (`${yearsUrl}/${subject}`)
}

export const fetchQuestions = async (subject, year, examType) => {
    await fetchData`${questionsUrl}subject=${subject}&year=${year}&type=utme`
}
