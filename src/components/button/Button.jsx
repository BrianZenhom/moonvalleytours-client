import './button.css'

const Button = ({ name, ...props }) => {
  const { handleClick } = props
  return (
    <button onClick={handleClick} className="main_button">
      {name}
    </button>
  )
}

export default Button
