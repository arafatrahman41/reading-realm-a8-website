import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts'

const Chart = ({book}) => {
   const {total_page, book_name} = book

    return (
        <div>
            <BarChart width={600} height={600} data={book}>
                <XAxis dataKey={book_name}/>
                <YAxis/>
                <Bar dataKey={total_page} fill='#8884d8' ></Bar>
            </BarChart>
        </div>
    );
};

Chart.propTypes = {
  book : PropTypes.object  
};

export default Chart;