import { Title } from './styles';
import PropTypes from 'prop-types';

const TitleComponet = (props) => {
  const { children, color, variant, fontSize, marginText } = props;
  console.log('fontSize', fontSize);
  return (
    <Title
      color={color}
      variant={variant}
      fontSize={fontSize}
      marginText={marginText}
    >
      {children}
    </Title>
  );
};

TitleComponet.defaultProps = {
  color: '#7bf5b1',
  marginText: '0px',
};

TitleComponet.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['title', 'subtitle']),
  fontSize: PropTypes.string,
  marginText: PropTypes.string,
};

export default TitleComponet;
