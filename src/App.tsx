import './App.css'
import moment from "moment/min/moment-with-locales";

function App() {
    moment.locale("fr")
    const today = moment()

    const getDayNames = () => {
        const dayNames = [];
        for (let i = 0; i < 7; i++) {
            dayNames.push(moment().weekday(i).format('dddd'));
        }
        return dayNames;
    }

    const getMonth = (month: number, year: number) => {
        const startOfMonth = moment([year, month]).startOf('month')
        const endOfMonth = moment([year, month]).endOf('month')

        const firstDayInCalendar = startOfMonth.startOf('week')
        const lastDayInCalendar = endOfMonth.endOf('week')

        const days: moment.Moment[] = []
        const currentDate = firstDayInCalendar

        // get all days
        while (currentDate.isBefore(lastDayInCalendar)) {
            days.push(currentDate.clone())
            currentDate.add(1, 'day')
        }

        // split in weeks
        const weeks = []
        while (days.length > 0) {
            weeks.push(days.splice(0, 7))
        }

        return weeks
    }

    const month = getMonth(today.month(), today.year())
    return (
        <>
            <h1>{today.format('MMMM YYYY')}</h1>
            <table className={`calendar__table calendar__table--${month.length.toString()}weeks`}>
                <thead>
                    <tr>
                        {getDayNames().map((name, index) => <th key={index}>{name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {month.map((week, index) => <tr key={index}>
                        {week.map((day, index) => <td key={index}>{day.date()}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default App
