export const selectStyles = {
  container: provided => ({
    ...provided,
    width: '196px',
    margin: '20px auto',
  }),
  control: (provided, state) => ({
    ...provided,
    paddingLeft: '10px',
    height: '50px',
    border: 'none',
    borderRadius: '10.31px',
    boxShadow:
      '0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)',
    background: 'rgba(235, 216, 255, 1)',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '22px',
  }),
  option: (provided, state) => ({
    ...provided,
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '22px',
    color: state.isSelected ? 'rgba(92, 211, 168, 1)' : 'rgba(55, 55, 55, 1)',
    backgroundColor: state.isFocused ? 'rgba(235, 216, 255, 0.5)' : null,
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '10.31px',
    border: 'none',
    boxShadow:
      '0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25)',
    background: 'rgba(235, 216, 255, 1)',
  }),
};
