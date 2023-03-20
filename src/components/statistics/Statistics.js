import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsStartList,
  StatisticsStartItem,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsStartList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsStartItem
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatisticsStartItem>
        ))}
      </StatisticsStartList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
